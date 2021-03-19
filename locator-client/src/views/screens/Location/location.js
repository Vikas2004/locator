
import './location';
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"
// import ColorBox from '../../components/ColorBox'

export default class Location extends Component {
 
  constructor(){
    super()
    this.state = {
      locations: []
    }
    this.getLocation = this.getLocation.bind(this)
  }

  componentDidMount(){
    // var BASE_URL = "https://treasure-locator-backend.herokuapp.com/"
  
  }

  getLocation(){
    var BASE_URL = "https://treasure-locator-frontend.herokuapp.com/"
    console.log(BASE_URL,"--base url is here--")
      axios.get(BASE_URL).then(res => {console.log(res, "---response is here----")
    this.setState({
      locations: res.data
    })
    })
      .catch(e => {console.log(e,"---error is here---")})
  }

  goToEditPage(){

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
{/* <Redirect to="/locations/save/">  */}
<FontAwesomeIcon icon={faEdit}  />
{/* </Redirect> */}

         
           <FontAwesomeIcon icon={faTrashAlt}  />
        </div>
           )}
           </ul>
        </div>
        
        <Footer />
      </div>
    );
  }
 
}


