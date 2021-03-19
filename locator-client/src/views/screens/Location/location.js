
import './location';
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory, Redirect } from "react-router-dom"
// import ColorBox from '../../components/ColorBox'
import { createBrowserHistory } from 'history';

 class Location extends Component {
 
  constructor(){
    super()
    this.state = {
      locations: [],
      navigate: false
    }
    this.getLocation = this.getLocation.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
  }

  componentDidMount(){
    // // var BASE_URL = "https://treasure-locator-backend.herokuapp.com/"
    // var BASE_URL = "http://localhost:3000/location/"
    // console.log(BASE_URL,"--base url is here--")
    //   axios.get(BASE_URL).then(res => {console.log(res, "---response is here----")
    // this.setState({
    //   locations: res.data
    // })
    // })
    //   .catch(e => {console.log(e,"---error is here---")})
  
  }

   getLocation(){
   
    var BASE_URL = "https://treasure-locator-backend.herokuapp.com/location"
    console.log(BASE_URL,"--base url is here--")
      axios.get(BASE_URL).then(res => {console.log(res, "---response is here----")
    this.setState({
      locations: res.data
    })
    })
      .catch(e => {console.log(e,"---error is here---")})
  }

  goToEditPage(){
   this.props.history.push('/location/save')
  }

  deleteLocation(id){
    var BASE_URL = "https://treasure-locator-backend.herokuapp.com/location/"
    axios.delete(BASE_URL + id).then(res => {console.log(res, "---response is here----")
    this.getLocation()
    })
      .catch(e => {console.log(e,"---error is here---")})
  }

  //onClick={history.push("/locations/save")} 


  render(){
    return (
      <div>
        <Header/>
        <div style={{display: "flex", alignItems: "center", background: "white", height: "100vh"}}>
        <FontAwesomeIcon icon={faCompass} onClick={this.getLocation} />
        <ul style={{fontSize: 20, color: "black", width: "100%"}}>  
        {this.state.locations.map(location =>
        <div>
   <li>{location.locationName}</li>

<FontAwesomeIcon icon={faEdit} onClick={this.goToEditPage}   />


           <FontAwesomeIcon icon={faTrashAlt} onClick={() => this.deleteLocation(location._id)} />
           
        </div>
           )}
           </ul>
        </div>
        
        <Footer />
      </div>
    );
  }
 
}


export default Location;