
import './location';
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../../components/Footer'
import isValidCoordinates from 'is-valid-coordinates';
import { withRouter, useHistory, Redirect, Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import { validationLatitudeLongitude } from "validation-latitude-longitude";
import {BASE_URL} from '../../../constants'

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
    let value = event.target.value
    value = value.replace(/[^A-Za-z]/ig, '')
    this.setState({locationName: value});
  }

  
  handleLatitudeChange(e) {
    const re = /^\d*\.?\d*$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({latitude: e.target.value})
   }
  }

    
  handleLongitudeChange(event) {
    const re = /^\d*\.?\d*$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({longitude: event.target.value})
   }
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
          axios.post(BASE_URL, body).then(res =>{
            this.props.history.push('/locations/');
          }
          )
           .catch(e => {console.log(e, "---error is here---")})
        }else{
          console.log("Please Enter valid coordinates")
          toast.warning("Please Enter valid coordinates")
        }
      }else{
        console.log("Location name should be string")
        toast.warning("Location name should be string")
      } 
    }else{
      console.log("Please fill all fields")
      toast.warning("Please fill all fields")
    }


}

  render(){ 
    return (
      <div>
        <Header/>
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", background: "white", height: "100vh", justifyContent: "center"}}>
        {/* <form> */}
        <ToastContainer />
        <h4>Add Location</h4>
        <div class="card shadow mb-5 bg-white rounded" style={{padding: "64px", display: "flex", justifyContent: "space-between"}}>
          
        <div style={{margin: "16px"}}>
          <input  placeholder="Location Name" type="text"  value={this.state.locationName} onChange={this.handleNameChange} />
        </div>
        <div style={{margin: "16px"}}>
          <input  placeholder="Latitude" type="text" value={this.state.latitude} onChange={this.handleLatitudeChange} />
        </div>
        <div style={{margin: "16px"}}>
          <input placeholder="Longitude" type="text" value={this.state.longitude} onChange={this.handleLongitudeChange} />
        </div>
        <button style={{backgroundColor:'#343A40', color: "white", borderRadius:'6px', width: "40%", margin: "0 auto"}} onClick={this.handleSubmit}>Save</button>  
      </div>
      <a href="/locations/">
          Go to Locations
        </a>
        </div>
        
        
        <Footer />
      </div>
    );
  }
 
}

export default withRouter(SaveLocation)

