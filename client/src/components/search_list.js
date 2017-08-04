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
      }
    });
    return list;
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}
