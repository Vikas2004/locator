
import './location';
import React, {Component} from 'react'
import axios from 'axios'

// import ColorBox from '../../components/ColorBox'

export default class Vikas extends Component {

  constructor(){
    super()
  this.state = {
      text: ""
  }
  }

  componentDidMount(){
    axios.get('https://treasure-locator-frontend.herokuapp.com/location/vikas').then(res => {
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


