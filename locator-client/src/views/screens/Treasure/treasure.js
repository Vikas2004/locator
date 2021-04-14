
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
    currentLocLat: "",
    currentLocLon: ""
    }
    this.clickOne = this.clickOne.bind(this)
    this.validateLocation= this.validateLocation.bind(this)
  }


  componentDidMount(){
    this.getLocation()
  }

  validateLocation =  () => {
    const speech = new Speech()
    const {randomLoc, currentLoc} = this.state
    console.log(randomLoc,"---random loc is here---")
   geolocation.getCurrentPosition((err, position) => {
     if(position) {
     console.log(String(position["coords"].latitude), randomLoc.latitude, String(position["coords"].longitude), randomLoc.longitude, "---position i shere---")
     if(parseFloat(String(position["coords"].latitude)) == parseFloat(randomLoc.latitude) && parseFloat(String(position["coords"].longitude)) == parseFloat(randomLoc.longitude)){
       toast("You have reached the location")
       console.log("Matched")
       speech.speak({
        text: "Hoorayyy!! you found the treasure",
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
     }else{
      toast("Locations Did not match")
      console.log("not matched")
      speech.speak({
        text: "Ah Ah, Treasure is not here",
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
     }
    }
    //  if(position)
     this.setState({
       currentLocLat: position["coords"].latitude,
       currentLocLon: position["coords"].longitude
     })
    })
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
    const {locations} = this.state
    var randomItem = locations[Math.floor(Math.random()*locations.length)];
    // this.state.randomLoc=randomItem
    this.setState({
      randomLoc: randomItem
    })
    speech.speak({
      text: "Time for the hunt, your treasure has been created",
  }).then(() => {
      console.log("Success !")
  }).catch(e => {
      console.error("An error occurred :", e)
  })
    console.log(randomItem,"===item is here---")
  }


  render(){
    // console.log(this.state.currentLoc.latitude, this.state.currentLoc.longitude, "current loc is here---")
    const currentLoc = {latitude: this.state.currentLocLat, longitude: this.state.currentLocLon}
    return (
      <div>
        <ToastContainer />
        <Header/>
        <div className="treasureSection">
        <div style={{backgroundColor: 'gray', display: "flex", flexDirection: "column"}} className="Color" onClick={this.clickOne}>Click Here to start the Game</div>
        <div style={{backgroundColor: 'yellow', display: "flex", flexDirection: "column"}} className="Color" onClick={this.validateLocation}>Click Here to check treasure</div>
        {/* <ColorBox style={{backgroundColor: 'yellow',  display: "flex", flexDirection: "column"}} randomLoc={currentLoc} clickOne={this.validateLocation}  /> */}

        <a href="/locations/save">
         Add Location
        </a>
        </div>
        <Footer />
      </div>
    );
  }

}

