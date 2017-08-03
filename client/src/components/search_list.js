import React, { Component } from 'react';
import { db } from '../firebase';
import Navbar from './navbar';

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


  render() {
=======
  renderList(){
>>>>>>> d91f395f6bdbafaf89d989745907a3b315070768
    const { data } = this.state;
    const list = Object.keys(data).map((key, index) => {
      const path = window.location.pathname;
      const loc = path.substring(path.lastIndexOf('/') + 1, path.length);
      console.log("Location: ",loc);
      if(data[key].bio.location.split(" ").join("") === loc){
      return (
<<<<<<< HEAD
        <div key={index} className="col-xs-4">
          <div className="card mr-3 mb-3" style={{ width: '20rem' }}>
            <img className="card-img-top" src="http://lorempixel.com/output/people-q-c-318-180-1.jpg" alt="Card image cap" />
            <div className="card-block">
              <h5 className="card-title">
                <div>{data[key].name}</div>
              </h5>
              <div className="card-text">
                <div><strong>About Mentor:</strong></div>
                <div>{this.charLimit(data[key].bio.aboutme)}</div>
                <div className="text-capitalize"><strong>Dance Style:</strong> {data[key].bio.style}</div>
                <div><strong>Location:</strong> {data[key].bio.location}</div>
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      );
=======
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
>>>>>>> d91f395f6bdbafaf89d989745907a3b315070768
    });
    return list
  }
  render() {
    return (
      <div>
        <Navbar />
<<<<<<< HEAD
        <div className="row">
            {list}
        </div>
=======
        <ul className="list-group">
          {this.renderList()}
        </ul>
>>>>>>> d91f395f6bdbafaf89d989745907a3b315070768
      </div>
    );
  }
}
