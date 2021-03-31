
import './location';
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { withRouter, useHistory, Redirect, Link } from "react-router-dom"

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
  axios.post("http://localhost:3001/location/", body).then(res =>{
    console.log(res,"--response is here--")
    this.props.history.push('/');
  }
  )
   .catch(e => {console.log(e, "---error is here---")})
}

  render(){
    return (
      <div>
        <Header/>
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", background: "white", height: "100vh"}}>
        {/* <form> */}
        <label>
          Location Name:
          <input style={{border: "0px 0px 0px 0px"}} type="text" value={this.state.locationName} onChange={this.handleNameChange} />
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

