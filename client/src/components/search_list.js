import React, { Component } from 'react';
import { db } from '../firebase';
import Navbar from './navbar';

const GOOGLE_API = "http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:" + window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1, window.location.pathname.length); + "&sensor=false"

export default class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    db.ref('Mentors').on('value', snapshot => {
      const data = snapshot.val();
      this.setState({ data });
    });
  }
<<<<<<< HEAD
  charLimit(value) {
    for (let i = 0; i < value.length; i++) {
      if (value.length > 75) {
        let result = value.substring(0, 75);
        return result + ' ...';
=======


  charLimit(value){
    for(let i=0; i < value.length; i++){
      if(value.length > 80) {
          let result = value.substring(0, 80);
          return result + " ...";
>>>>>>> c68cc5dbac948e8fe6c63166e9df728dd7faad92
      } else {
        return value;
      }
    }
  }
<<<<<<< HEAD
  renderList() {
    const { data } = this.state;
    const list = Object.keys(data).map((key, index) => {
      const path = window.location.pathname;
      const loc = path.substring(path.lastIndexOf('/') + 1, path.length);
      console.log('Location: ', loc);
      if (data[key].bio.location.split(' ').join('') === loc) {
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
=======



  renderList(){
    console.log(GOOGLE_API);
    const { data } = this.state;
    const list = Object.keys(data).map((key, index) => {
      const path = window.location.pathname;
      const loc = parseInt(path.substring(path.lastIndexOf('/') + 1, path.length));
      console.log("Location: ",loc);
      console.log("Data: ", data[key].bio.location);
      if(data[key].bio.location === loc){
      return (
          <li className="list-group-item" key={index}>
            <span>Name: {data[key].name}<br/></span>
            <span>About Me: {data[key].bio.aboutme}<br/></span>
            <span>Affiliates: {data[key].bio.affiliates}<br/></span>
            <span>Awards and Accolades: {data[key].bio.awards}<br/></span>
            <span>Experience: {data[key].bio.experience}<br/></span>
            <span>Zip Code: {data[key].bio.location}<br/></span>
          </li>
        )
>>>>>>> c68cc5dbac948e8fe6c63166e9df728dd7faad92
      }

    });
    return list;
  }
  render() {
    return (
      <div>
        <Navbar />
<<<<<<< HEAD
        <div className="container">
          <div className="row">
            {this.renderList()}
          </div>
        </div>
=======

        <ul className="list-group">
          {this.renderList()}
        </ul>
>>>>>>> c68cc5dbac948e8fe6c63166e9df728dd7faad92
      </div>
    );
  }
}
