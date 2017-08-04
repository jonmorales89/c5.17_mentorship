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


  charLimit(value){
    for(let i=0; i < value.length; i++){
      if(value.length > 80) {
          let result = value.substring(0, 80);
          return result + " ...";
      } else {
        return value;
      }
    }
  }



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
      }

    });
    return list
  }
  render() {
    return (
      <div>
        <Navbar />

        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}
