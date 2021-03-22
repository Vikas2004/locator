
import './location';
import React, {Component, propTypes} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter, useHistory, Redirect, Link } from "react-router-dom"



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
          this.getInfo()
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
     var url = `https://treasure-locator-frontend.herokuapp.com/location/${searchId}` 
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
    var BASE_URL = "https://treasure-locator-frontend.herokuapp.com/location/"
    console.log(BASE_URL,"--base url is here--")
      axios.get(BASE_URL).then(res => {console.log(res, "---response is here----")
    this.setState({
      locations: res.data
    })
    console.log()
    })
      .catch(e => {console.log(e,"---error is here---")})
  }

  goToEditPage({context}){
 
    // const { history } = this.props;
    this.context.router.push('/location/save')
  }

  deleteLocation(id){
    var BASE_URL = "https://treasure-locator-frontend.herokuapp.com/location/"
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
        <form>
        <input
          placeholder="Search"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        </form>
        <FontAwesomeIcon icon={faCompass} onClick={this.getLocation} />
        <ul style={{fontSize: 20, color: "black", width: "100%"}}>  
        {this.state.locations.map(location =>
        <div>
   <li>{location.locationName}</li>
<Link to="/locations/Edit" params={{ id: location._id }}>
<FontAwesomeIcon icon={faEdit}    />
</Link>



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


export default withRouter(Location);