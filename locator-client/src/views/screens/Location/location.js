
import './location';
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import ColorBox from '../../components/ColorBox'

export default class Location extends Component {

  constructor(){
    super()
    this.state = {
      locations: []
    }
  }

  componentDidMount(){
    var BASE_URL = "https://treasure-locator-backend.herokuapp.com/"
    // var BASE_URL = "http://localhost:3001"
    console.log(BASE_URL,"--base url is here--")
      axios.get(BASE_URL + "/location/").then(res => {console.log(res, "---response is here----")
    this.setState({
      locations: res.data
    })
    })
      .catch(e => {console.log(e,"---error is here---")})
  }


  render(){
    return (
      <div>
        <Header/>
        <div style={{display: "flex", alignItems: "center", background: "white", height: "100vh"}}>
        <ul style={{fontSize: 20, color: "black", width: "100%"}}>  
        {this.state.locations.map(location =>
           <li>{location.locationName}</li>
           )}
           </ul>
        </div>
        
        <Footer />
      </div>
    );
  }
 
}


