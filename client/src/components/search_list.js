import React,{Component} from 'react';
import {db} from '../firebase';

export default class SearchList extends Component{
  constructor(props){
    super(props);
    this.state={
      data: {}
    }
  }
  renderList(data){
    if(!data){
      return "Loading...."
    }
    else {
      console.log('data is: ', this.state.data)
      return <li className="list-group-item">{data.name}</li>
    }
  }
  componentDidMount() {
		db.ref('Mentors').on('value', snapshot => {
		   const data = snapshot.val();
       this.setState({data});
       console.log(data)
		});
	}

  render(){
    const { data } = this.state;
    const list = Object.keys(data).map((key, index) => {
      return <li key={index}>{data[key].name}</li>
    })
    return(
    <ul>
      {list}
    </ul>
  )
  }
}
