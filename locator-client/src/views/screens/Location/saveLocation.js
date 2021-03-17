
import './location';
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import ColorBox from '../../components/ColorBox'

export default class SaveLocation extends Component {

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

  async handleSubmit(){
    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
    }
    const body = {
      locationName: this.state.locationName,
      latitude: this.state.latitude,
      Longitude: this.state.longitude
    }
    console.log(body,"--body is here--")
   await axios.post('http://localhost:3000/location/', body, { headers }).then(function (response) {
      console.log(response,"----response is here---");
    })
    .catch(function (error) {
      console.log(error,"---error is here---");
    });

  };
  


  render(){
    return (
      <div>
        <Header/>
        <div style={{display: "flex", alignItems: "center", background: "white", height: "100vh"}}>
        <form onSubmit={this.handleSubmit}>
        <label>
          Location Name:
          <input type="text" value={this.state.locationName} onChange={this.handleNameChange} />
        </label>
        <label>
          Latitude:
          <input type="text" value={this.state.latitude} onChange={this.handleLatitudeChange} />
        </label>
        <label>
          Longitude:
          <input type="text" value={this.state.longitude} onChange={this.handleLongitudeChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>
        
        <Footer />
      </div>
    );
  }
 
}


