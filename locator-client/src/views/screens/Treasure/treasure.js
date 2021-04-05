
import './treasure.css';
import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ColorBox from '../../components/ColorBox'
import axios from 'axios'
import { BASE_URL } from "../../../constants"
//import Speech from 'react-speech';
import Speech from 'speak-tts'
import { toast, ToastContainer } from 'react-toastify';
var geolocation = require('geolocation')


export default class Treasure extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
    locations: [],
    randomLoc: {},
    currentLoc: {}
    }
    this.clickOne = this.clickOne.bind(this)
    this.validateLocation= this.validateLocation.bind(this)
  }

  componentDidMount(){
    this.getLocation()
  }

  validateLocation = async () => {
    console.log("---validate hits---")
   var cl
    const {randomLoc, currentLoc} = this.state
    console.log(randomLoc,"---random loc is here1---")
   await geolocation.getCurrentPosition((err, position) => {
     if(position) console.log(position,"---position is here---")
     this.setState({
       currentLoc: position["coords"]
     })
     if((randomLoc.latitude === currentLoc.latitude) && (randomLoc.longitude === currentLoc.longitude)){
         toast.success("You have reached the location successfully")
     }else{
       toast.error("Locations did not match")
     }
    }
 )
   
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
    console.log(this.state.currentLoc, "current loc is here---")
    return (
      <div>
        <ToastContainer />
        <Header/>
        <div className="treasureSection">
        <ColorBox style={{backgroundColor: 'gray', display: "flex", flexDirection: "column"}} randomLoc={this.state.randomLoc} clickOne={this.clickOne} />
        <ColorBox style={{backgroundColor: 'yellow',  display: "flex", flexDirection: "column"}} randomLoc={this.state.currentLoc} clickOne={this.validateLocation}  />
        <a href="/locations/">
          Go to Locations
        </a>
        </div>
        <Footer />
      </div>
    );
  }

}

