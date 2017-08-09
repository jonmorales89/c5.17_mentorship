import React, { Component } from 'react';
import { db } from '../firebase';
import axios from 'axios';

export default class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            list: []
        };
    }
    componentDidMount() {
        console.log('CDM');
        db.ref('Mentors').on('value', snapshot => {
            const data = snapshot.val();
            console.log('In firebase CB', data);
            this.setState({ data: {...data} });
        });
    }
    componentDidUpdate(prevProps, prevState){
      const currentDataLen = Object.keys(this.state.data).length;
      const prevDataLen = Object.keys(prevState.data).length;
      const listLen = this.state.list.length;

      if(prevDataLen === 0 && currentDataLen > 0){
        this.checkBounds();
      }
    }

    degreesToRadians(degrees) {
      return degrees * Math.PI / 180;
    }

    distanceFromCoords(lat1, lon1, lat2, lon2) {
      const earthRadius = 6371;

      let dLat = this.degreesToRadians(lat2-lat1);
      let dLon = this.degreesToRadians(lon2-lon1);

      lat1 = this.degreesToRadians(lat1);
      lat2 = this.degreesToRadians(lat2);

      let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      return earthRadius * c;
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

        checkBounds() {

        let mentCord = {};
        const { data } = this.state;
        console.log('checkBounds called', data);
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
            const searchCoord = {lat,lng}
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
                    let distFromMentor = this.distanceFromCoords(mentCord.lat, mentCord.lng, searchCoord.lat, searchCoord.lng);
                    console.log("Distance from mentor: ", distFromMentor);
                    if (mentCord.lat > area(lat, lng).latitude_min &&
                        mentCord.lat < area(lat, lng).latitude_max &&
                        mentCord.lng > area(lat, lng).longitude_min &&
                        mentCord.lng < area(lat, lng).longitude_max){
                        const item = (
                            <div className="col-xs-4" key={index} dist={distFromMentor}>
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
    render() {
        const { list } = this.state;
        list.sort(function(item, item1){
          return item.props.dist - item1.props.dist;
        })
        if (!list) {
            return <h1>Loading...</h1>;
        }
        return (
            <div>
              <div className="container">
                <div className="row" />
                  {list}
              </div>
            </div>
        );
    }
}
