
import './location';
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../../components/Footer'
import { useParams } from 'react-router';
import  { BASE_URL }  from '../../../constants'

// import ColorBox from '../../components/ColorBox'

export default class EditLocation extends Component {

  constructor(props){
    super(props)
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
    const search = this.props.match.params.locationId;
    console.log(search,"--location id is here--")
    const url = `http:localhost:3001/location/${search}`
    console.log(BASE_URL ,"---url is here---")
    axios.get(BASE_URL + search)
    .then(res => {
      console.log(res,"--respinse")
      this.setState({
        locationName: res.data.locationName,
        latitude: res.data.latitude,
        longitude: res.data.longitude
      })
    })
    .catch(e=> {console.log(e,"--error ishere---")})

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

    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
    }
    const body = {
      locationName: this.state.locationName,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }
    console.log(body,"--body is here--")
    const search = this.props.match.params.locationId;
    axios.put(BASE_URL + search, body).then(response => {
      console.log(response,"----response is here---");
      window.location.href="/locations"
    })
    .catch(error => {
      console.log(error,"---error is here---");
    });

  };
  


  render(){
    console.log(this.state.locationName,"--loc an=e jew")
    return (
      <div>
        <Header/>
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", background: "white", height: "100vh", justifyContent: "center"}}>
        {/* <form> */}
        <ToastContainer />
        <h4>Edit Location</h4>
        <div class="card shadow mb-5 bg-white rounded" style={{padding: "64px", display: "flex", justifyContent: "space-between"}}>
          
        <div style={{margin: "16px"}}>
          <input placeholder="Location Name" type="text" type="text" value={this.state.locationName} onChange={this.handleNameChange} />
        </div>
        <div style={{margin: "16px"}}>
          <input placeholder="Latitude" type="text" value={this.state.latitude} onChange={this.handleLatitudeChange} />
        </div>
        <div style={{margin: "16px"}}>
          <input placeholder="Longitude" type="text" value={this.state.longitude} onChange={this.handleLongitudeChange} />
        </div>
        <button style={{backgroundColor:'#343A40', color: "white", borderRadius:'6px', width: "40%", margin: "0 auto"}} onClick={this.handleSubmit}>Save</button>
      {/* </form> */}
      
      </div>
        </div>
        
        
        <Footer />
      </div>
    );
  }
 
}


