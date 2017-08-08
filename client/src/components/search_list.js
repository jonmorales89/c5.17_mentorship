import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAllMentors } from '../actions/';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.checkBounds = this.checkBounds.bind(this);
  }

  componentDidMount() {
    this.props.getAllMentors();
  }


  charLimit(value) {
    for (let i = 0; i < value.length; i++) {
      if (value.length > 75) {
        let result = value.substring(0, 200);
        return result + ' ...';


      } else {
        return value;
      }
    }
  }


  checkBounds(list) {
    let mentCord = {};

    const GOOGLE_URL = `http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${this
      .props.match.params.zipcode}&sensor=false`;

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
      const List = Object.keys(list).map((key, index) => {
        const URL =
          'http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:' +
          list[key].bio.location +
          '&sensor=false';
        axios.get(`${URL}`).then(resp => {
          console.log('resp', resp);
          mentCord = resp.data.results[0].geometry.location;
          console.log('mentCord', mentCord);
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
                      Name: {list[key].name}
                    </h6>
                    <div className="card-text">
                      <p>About Me:</p>
                      <p>
                        {this.charLimit(list[key].bio.aboutme)}
                      </p>
                      <p>
                        Affiliates: {list[key].bio.affiliates}
                      </p>
                      <p>
                        Serving Location: {list[key].bio.location}
                      </p>
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            );
            // this.setState({ list: [...this.state.list, item] });
          }
        });
      });
    });
  }

  render() {
    return (

      <div className="container">
        <div className="row" />
        {list}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mentors: state.mentors.allMentors
  };
}

export default connect(mapStateToProps, { getAllMentors })(SearchList);
