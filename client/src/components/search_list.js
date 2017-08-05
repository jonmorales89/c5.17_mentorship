import React, { Component } from 'react';
import { db } from '../firebase';
<<<<<<< HEAD
import Navbar from './navbar';
=======
>>>>>>> 9a6f350ec9e5036450942c60915014225344666e
import axios from 'axios';
export default class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
<<<<<<< HEAD
      mentors: {}
=======
      mentors: {},
      list: []
>>>>>>> 9a6f350ec9e5036450942c60915014225344666e
    };

    this.checkBounds = this.checkBounds.bind(this);
  }

  componentDidMount() {
    db.ref('Mentors').on('value', snapshot => {
      const data = snapshot.val();
      this.setState({ data });
      this.checkBounds();
    });
    test();
  }

  test() {
    const { data } = this.state;
    console.log('data', data);
  }

  charLimit(value) {
    for (let i = 0; i < value.length; i++) {
      if (value.length > 75) {
        let result = value.substring(0, 75);
        return result + ' ...';
      } else {
        return value;
      }
    }
  }
<<<<<<< HEAD

  area(lat, lng) {
    const lat_change = 32 / 111.2;
    const lon_change = Math.abs(Math.cos(lat * (Math.PI / 180)));
    const bounds = {
      latitude_min: lat - lat_change,
      longitude_min: lng - lon_change,
      latitude_max: lat + lat_change,
      longitude_max: lng + lon_change
    };
    return bounds;
  }

  checkBounds() {
    let mentCord = {};
    const { data } = this.state;
    const GOOGLE_API =
      'http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:' +
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf('/') + 1,
        window.location.pathname.length
      ) +
      '&sensor=false';
    axios.get(`${GOOGLE_API}`).then(function(resp) {
      const lat = resp.data.results[0].geometry.location.lat;
      const lng = resp.data.results[0].geometry.location.lng;
      console.log('LATLNG', lat, lng);
      const list = Object.keys(data).map((key, index) => {
        const URL =
          'http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:' +
          data[key].bio.location +
          '&sensor=false';
        axios.get(`${URL}`).then(function(resp) {
          mentCord = resp.data.results[0].geometry.location;
          if (
            mentCord.lat > this.area(lat, lng).latitude_min &&
            mentCord.lat < this.area(lat, lng).latitude_max &&
            mentCord.lng > this.area(lat, lng).longitude_min &&
            mentCord.lng < this.area(lat, lng).longitude_max
          ) {
          }
          const { mentors } = this.state;
          this.setState({
            mentors: { ...mentors, ...list }
          });
        });
      });
      console.log('mentor state', this.state.mentors);
      console.log('List: ', list);
    });
  }

  renderList() {
    const { mentors } = this.state;
    console.log(mentors);
    const list = Object.keys(mentors).map((key, index) => {
=======

  // version 2: not working
  checkBounds() {
    let mentCord = {};
    const { data } = this.state;

    const GOOGLE_URL =
      'http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:' +
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf('/') + 1,
        window.location.pathname.length
      ) +
      '&sensor=false';

    axios.get(`${GOOGLE_URL}`).then(resp => {
      const lat = resp.data.results[0].geometry.location.lat;
      const lng = resp.data.results[0].geometry.location.lng;

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
          'http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:' +
          data[key].bio.location +
          '&sensor=false';
        axios.get(`${URL}`).then(resp => {
          mentCord = resp.data.results[0].geometry.location;
          if (
            mentCord.lat > area(lat, lng).latitude_min &&
            mentCord.lat < area(lat, lng).latitude_max &&
            mentCord.lng > area(lat, lng).longitude_min &&
            mentCord.lng < area(lat, lng).longitude_max
          ) {
            const item = (
              <div className="col-xs-4" key={index}>
                <div className="card" style={{ width: '20rem' }}>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/318X180/b3b3b3/fff.png"
                  />
                  <div className="card-block">
                    <h6 className="card-title">
                      Name: {data[key].name}
                    </h6>
                    <div className="card-text">
                      <p>About Me:</p>
                      <p>
                        {this.charLimit(data[key].bio.aboutme)}
                      </p>
                      <p>
                        Affiliates: {data[key].bio.affiliates}
                      </p>
                      <p>
                        Serving Location: {data[key].bio.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
            this.setState({ list: [...this.state.list, item] });
          }
        });
      });
    });
  }

  // version 1 - temporary, but displays cards
  renderList() {
    const { data } = this.state;
    const list = Object.keys(data).map((key, index) => {
>>>>>>> 9a6f350ec9e5036450942c60915014225344666e
      return (
        <div className="col-xs-4" key={index}>
          <div className="card" style={{ width: '20rem' }}>
            <img
              className="card-img-top"
              src="https://dummyimage.com/318X180/b3b3b3/fff.png"
            />
            <div className="card-block">
              <h6 className="card-title">
                Name: {data[key].name}
              </h6>
              <div className="card-text">
                <p>About Me:</p>
                <p>
                  {this.charLimit(data[key].bio.aboutme)}
                </p>
                <p>
                  Affiliates: {data[key].bio.affiliates}
                </p>
                <p>
                  Serving Location: {data[key].bio.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return list;
  }

  render() {
    const { list } = this.state;

    console.log('THE LIST:', list);

    if (!list) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
<<<<<<< HEAD
        <Navbar />
=======
>>>>>>> 9a6f350ec9e5036450942c60915014225344666e
        <div className="container">
          <div className="row" />
        </div>
      </div>
    );
  }
}
