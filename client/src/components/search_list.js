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
  renderList(data) {
    if (!data) {
      return 'Loading....';
    } else {
      console.log('data is: ', this.state.data);
      return (
        <li className="list-group-item">
          {data.name}
        </li>
      );
    }
  }
  componentDidMount() {
    db.ref('Mentors').on('value', snapshot => {
      const data = snapshot.val();
      this.setState({ data });
      console.log(data);
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


  render() {
    const { data } = this.state;
    const list = Object.keys(data).map((key, index) => {
      return (
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
    });
    return (
      <div>
        <Navbar />
        <div className="row">
            {list}
        </div>
      </div>
    );
  }
}
