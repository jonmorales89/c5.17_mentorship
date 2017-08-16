import React, { Component } from "react";
import { db } from "../firebase";
import axios from "axios";
import Card from "./card";
import "./css/card.css";
import Search from "./searchbar";

export default class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      list: [],
      showModal: false
    };
  }
  componentWillMount() {
    db.ref("Mentors").on("value", snapshot => {
      const data = snapshot.val();
      this.setState({ data });
      const path = window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1,
        window.location.pathname.length
      );
      if (path === "results") {
        this.renderAll();
      }
    });
  }
  componentWillUnmount() {
    db.ref("Mentors").off();
  }
  componentDidUpdate(prevProps, prevState) {
    const path = window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1,
      window.location.pathname.length
    );
    const currentDataLen = Object.keys(this.state.data).length;
    const prevDataLen = Object.keys(prevState.data).length;
    const listLen = this.state.list.length;

    if (prevDataLen === 0 && currentDataLen > 0 && path != "results") {
      this.checkBounds();
    }
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  distanceFromCoords(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371;
    let dLat = this.degreesToRadians(lat2 - lat1);
    let dLon = this.degreesToRadians(lon2 - lon1);
    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius * c;
  }
  distanceInMiles(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    return dist;
  }
  charLimit(value) {
    const mentorBio = value;
    for (let i = 0; i < mentorBio.length; i++) {
      if (mentorBio.length > 60) {
        let result = mentorBio.substring(0, 60);
        if (result.length - 1 !== " ") {
          for (let j = result.length - 1; j >= 0; j--) {
            if (result[j] === " ") {
              return result.substring(0, j) + " ...";
            }
          }
        }
      } else {
        return mentorBio;
      }
    }
  }
  affiliateLimit(value) {
    const text = value;
    if (text.includes(",")) {
      const end = text.indexOf(",");
      return text.substring(0, end) + " ...";
    } else {
      return text;
    }
  }
  cardClick() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  renderAll() {
    const { data } = this.state;
    const list = Object.keys(data).map((key, index) => {
      const item = (
        <Card
          data={data[key]}
          key={index}
          charLimit={str => this.charLimit(str)}
          affiliateLimit={str => this.affiliateLimit(str)}
        />
      );
      this.setState({ list: [...this.state.list, item] });
    });
  }
  checkBounds() {
    let mentCord = {};
    const { data } = this.state;
    console.log("data: ", data);
    const GOOGLE_URL =
      "http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:" +
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1,
        window.location.pathname.length
      ) +
      "&sensor=false";
    axios.get(`${GOOGLE_URL}`).then(resp => {
      const lat = resp.data.results[0].geometry.location.lat;
      const lng = resp.data.results[0].geometry.location.lng;
      const searchCoord = { lat, lng };
      const area = function(lat, lng) {
        const lat_change = 32 / 111.2;
        const lon_change = Math.abs(Math.cos(lat * (Math.PI / 180)));
        const bounds = {
          latitude_min: lat - lat_change,
          longitude_min: lng - lon_change,
          latitude_max: lat + lat_change,
          longitude_max: lng + lon_change
        };
        return bounds;
      };
      const list = Object.keys(data).map((key, index) => {
        const URL =
          "http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:" +
          data[key].bio.location +
          "&sensor=false";
        axios.get(`${URL}`).then(resp => {
          let location = resp.data.results[0].formatted_address;
          location = location.substring(0, location.indexOf(","));
          mentCord = resp.data.results[0].geometry.location;
          const distFromMentor = this.distanceFromCoords(
            mentCord.lat,
            mentCord.lng,
            searchCoord.lat,
            searchCoord.lng
          );
          const miles = parseInt(
            this.distanceInMiles(
              mentCord.lat,
              mentCord.lng,
              searchCoord.lat,
              searchCoord.lng
            )
          );
          console.log("Miles:", miles);
          console.log(distFromMentor);
          if (
            mentCord.lat > area(lat, lng).latitude_min &&
            mentCord.lat < area(lat, lng).latitude_max &&
            mentCord.lng > area(lat, lng).longitude_min &&
            mentCord.lng < area(lat, lng).longitude_max
          ) {
            const item = (
              <Card
                data={data[key]}
                key={index}
                dist={distFromMentor}
                charLimit={str => this.charLimit(str)}
                affiliateLimit={str => this.affiliateLimit(str)}
                location={location}
                miles={miles}
              />
            );
            this.setState({ list: [...this.state.list, item] });
          }
        });
      });
    });
  }
  render() {
    const path = window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1,
      window.location.pathname.length
    );
    const { list } = this.state;
    const orderedList = list.sort(function(item, item1) {
      return item.props.dist - item1.props.dist;
    });
    if (!list) {
      return <h1>Loading...</h1>;
    }
    if (path === "results") {
      return (
        <div className="container">
          <div className="mdl-layout">
            <div className="mdl-layout__content">
              <div className="mdl-grid">
                {list}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="mdl-layout">
          <div className="mdl-layout__content">
            <div className="mdl-grid">
              {orderedList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
