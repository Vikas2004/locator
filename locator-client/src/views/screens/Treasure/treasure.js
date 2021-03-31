
import './treasure.css';
import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ColorBox from '../../components/ColorBox'
import axios from 'axios'
import { BASE_URL } from "../../../constants"

export default class Treasure extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    locations: []
    }
    this.clickOne = this.clickOne.bind(this)
  }

  componentDidMount(){
    this.getLocation()
  }

  getLocation(){
    var url = BASE_URL
      axios.get(url).then(res => {console.log(res, "---get response is here----")
    this.setState({
      locations: res.data.data
    })
    })
      .catch(e => {console.log(e,"---error is here---")})
  }

  clickOne = () => {
    console.log("---click one hits---")
    const {locations} = this.state
    var randomItem = locations[Math.floor(Math.random()*locations.length)];
    console.log(randomItem,"===item is here---")
  }


  render(){
    const locations = this.props
    console.log(locations,"---locations are here---")
    return (
      <div>
        <Header/>
        <div className="treasureSection">
        <ColorBox style={{backgroundColor: 'gray'}} clickOne={this.clickOne} />
        <ColorBox style={{backgroundColor: 'yellow'}} />
        <a href="/locations/">
          Go to Locations
        </a>
        </div>
        <Footer />
      </div>
    );
  }

}

