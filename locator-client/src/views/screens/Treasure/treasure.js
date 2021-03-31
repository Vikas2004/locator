
import './treasure.css';
import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ColorBox from '../../components/ColorBox'
import axios from 'axios'
import { BASE_URL } from "../../../constants"
//import Speech from 'react-speech';
import Speech from 'speak-tts'


export default class Treasure extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
    locations: [],
    randomLoc: {}
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
    const speech = new Speech()
    console.log("---click one hits---")
    const {locations} = this.state
    var randomItem = locations[Math.floor(Math.random()*locations.length)];
    // this.state.randomLoc=randomItem
    this.setState({
      randomLoc: randomItem
    })
    console.log(this.state.randomLoc,"---random loc is here")
    speech.speak({
      text: randomItem.locationName,
  }).then(() => {
      console.log("Success !")
  }).catch(e => {
      console.error("An error occurred :", e)
  })
    console.log(randomItem,"===item is here---")
  }


  render(){
    console.log(this.state.randomLoc.locationName,"---locations name hjsdfnjs")
    return (
      <div>
        <Header/>
        <div className="treasureSection">
        <ColorBox style={{backgroundColor: 'gray'}} randomLoc={this.state.randomLoc.locationName} clickOne={this.clickOne} />
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

