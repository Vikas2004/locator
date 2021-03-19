
import './location';
import React, {Component} from 'react'
import axios from 'axios'

// import ColorBox from '../../components/ColorBox'

export default class About extends Component {

  constructor(){
    super()
  this.state = {
      text: ""
  }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/location/about').then(res => {
        console.log(res,"--response is here--")
        this.setState({text: res.data})
    }).catch(e => {console.log(e,"error is here")})
  }


  render(){
      
    return (
      <div>{this.state.text}</div>
    );
  }
 
}


