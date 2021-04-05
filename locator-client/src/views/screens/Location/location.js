
import './location';
import React, {Component} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BASE_URL } from "../../../constants"
import TableView from '../../components/Table'
import { withRouter } from "react-router-dom"

 class Location extends Component {
 
  constructor(props){
    super(props)
    this.state = {
      locations: [],
      navigate: false,
      query: '',
      results: [],
      searchId: ""
    }
    this.getLocation = this.getLocation.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
  }

  componentDidMount(){
    this.getLocation()
  }

  
  handleInputChange = () => {
      if (this.search.value&& this.search.value.length > 1) {
          this.getInfo(this.search.value)
      } 
  }
getInfo(val){
  console.log(this.state.locations,"---value is here000")
  this.state.locations.forEach(location => {
    if(location.locationName === val){
      console.log(location.locationName,"matches")
      const url = BASE_URL + location._id
      axios.get(url).then(res => { 
        console.log(res,"---response is here---")
      //   this.setState({
      //   locations: res.data
      // })
      this.setState({locations: [res.data]})
    console.log(this.state.locations,"---locations are here---")
    }).catch(e=>console.log(e,"---error is here---"))
    }
  })
}

  getLocation(){
    this.search.value = ""
    var url = BASE_URL
      axios.get(url).then(res => {console.log(res, "---get response is here----")
    this.setState({
      locations: res.data.data
    })
    })
      .catch(e => {console.log(e,"---error is here---")})
  }

  deleteLocation(id){
    var url = BASE_URL + id
    axios.delete(url).then(res => {toast("Location Deleted Successfully")
    this.getLocation()
    })
      .catch(e => {console.log(e,"---error is here---")})
  }

  //onClick={history.push("/locations/save")} 


  render(){
    const {locations} = this.state
    return (
  <div>
        <Header/>
        <div style={{display: "flex", flexDirection:"column", justifyContent: "space-between",alignItems:"center", background: "white", height: "90vh"}}>  
        <div style={{marginTop: "16px", alignSelf: "flex-end", marginRight:"16px"}}>
        <input 
          placeholder="Search"
          ref={input => this.search = input}
          style={{marginRight: "10px"}}
          // onChange={this.handleInputChange}
        />
        <FontAwesomeIcon icon={faSearchLocation} style={{marginRight: "10px"}} onClick={() => {this.handleInputChange()}}>Search</FontAwesomeIcon>
        <FontAwesomeIcon icon={faTimesCircle} style={{marginRight: "10px"}} onClick={() => {this.getLocation()}}>Clear</FontAwesomeIcon>
        </div>
        <div style={{width: "80%"}}>
        <ToastContainer  />
        {/* </div> */}
        <div style={{display:'flex', height:"70vh", marginTop:"3%" }}>
       <TableView  locations={locations} deleteLoc={this.deleteLocation} /> }
        </div>
        <a href="/locations/save">
         Add Location
        </a>
      </div>
                
      </div>
      <Footer />
      </div>
    );
  }
 
}


export default withRouter(Location);