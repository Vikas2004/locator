
import './location';
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import isValidCoordinates from 'is-valid-coordinates';
import { withRouter, useHistory, Redirect, Link } from "react-router-dom"
import { validationLatitudeLongitude } from "validation-latitude-longitude";

class SaveLocation extends Component {
 
  constructor(){
    super()
  this.state = {
    locationName: '',
    latitude: '',
    longitude: '',
  }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleLatitudeChange = this.handleLatitudeChange.bind(this)
  this.handleLongitudeChange = this.handleLongitudeChange.bind(this)
  }

  componentDidMount(){
     
  }

  handleNameChange(event) {
    console.log(event,"--event is here--")
    this.setState({locationName: event.target.value});
  }

  
  handleLatitudeChange(event) {
    console.log(event,"--event is here--")
    this.setState({latitude: event.target.value});
  }

    
  handleLongitudeChange(event) {
    console.log(event,"--event is here--")
    this.setState({longitude: event.target.value});
  }

   handleSubmit(){
    const body = {
      locationName: this.state.locationName,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }

    var reg = new RegExp("([+-]?\d+\.?\d+)\s*,\s*([+-]?\d+\.?\d+)");

    if(body.locationName !== "" && body.latitude !== "" && body.longitude !== ""){
      console.log(body.latitude,body.longitude)
      if(typeof body.locationName === 'string'){
        if(validationLatitudeLongitude.latitude(body.latitude), validationLatitudeLongitude.longitude(body.longitude)){
          axios.post("http://localhost:3001/location/", body).then(res =>{
            this.props.history.push('/locations/');
          }
          )
           .catch(e => {console.log(e, "---error is here---")})
        }else{
          console.log("Please Enter valid coordinates")
        }
      }else{
        console.log("Location name should be string")
      } 
    }else{
      console.log("Please fill all fields")
    }


}

  render(){
    return (
      <div>
        <Header/>
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", background: "white", height: "100vh"}}>
        {/* <form> */}
        <label>
          Location Name:
          <input type="text" style={{border: "0px 0px 0px 0px"}} type="text" value={this.state.locationName} onChange={this.handleNameChange} />
        </label>
        <label>
          Latitude:
          <input type="text" value={this.state.latitude} onChange={this.handleLatitudeChange} />
        </label>
        <label>
          Longitude:
          <input type="text" value={this.state.longitude} onChange={this.handleLongitudeChange} />
        </label>
        <button  onClick={this.handleSubmit}>Save</button>
      {/* </form> */}
        </div>
        
        <Footer />
      </div>
    );
  }
 
}

export default withRouter(SaveLocation)

