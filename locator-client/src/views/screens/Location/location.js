
import './location';
import React, {Component, propTypes} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter, useHistory, Redirect, Link } from "react-router-dom"
import { BASE_URL } from "../../../constants"
import TableView from '../../components/Table'

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

  
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          // this.getInfo()
        }
      } 
    })
  }

  getInfo = () => {
    const {query, searchId} = this.state
    
   this.state.results.forEach(function(val,index) { 
     console.log(val, index, "--value and index are here--")
     if(val == query){
       this.state.searchId = index
     }
     var url = BASE_URL+`${searchId}` 
     console.log(url, "url is here")
    axios.get(url)
      .then(response => {
        console.log(response.data,"search response is here---")
        this.setState({
          results: response.data                           
        })
      }).catch(e => console.log(e, "--error is here--"))
   }) 
   
  }

  getLocation(){
    var url = BASE_URL
    console.log(url,"--base url is here--")
      axios.get(url).then(res => {console.log(res, "---response is here----")
    this.setState({
      locations: res.data.data
    })
    console.log(this.state.locations,"--data is here--")
    })
      .catch(e => {console.log(e,"---error is here---")})
  }

  goToEditPage({context}){
 
    // const { history } = this.props;
    this.context.router.push('/location/save')
  }

  deleteLocation(id){
    var url = BASE_URL + id
    axios.delete(url).then(res => {console.log(res, "---response is here----")
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
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", background: "white", height: "90vh"}}>  
        <input
          style={{marginTop: "16px", alignSelf: "flex-end", marginRight:"16px"}}
          placeholder="Search"
          ref={input => this.search = input}
          // onChange={this.handleInputChange}
        />
        {/* </div> */}
        <div style={{display:'flex', height:"70vh", marginTop:"3%", width: "80%" }}>
        <TableView  locations={locations} />
        </div>
      </div>
      <Footer />
      </div>
    );
  }
 
}


export default withRouter(Location);