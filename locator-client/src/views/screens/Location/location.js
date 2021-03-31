
import './location';
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BASE_URL } from "../../../constants"
import TableView from '../../components/Table'
import { useHistory, withRouter, Redirect, Link } from "react-router-dom"

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
    // this.setState({
    //   query: this.search.value
    // }, () => {
      if (this.search.value&& this.search.value.length > 1) {
          this.getInfo(this.search.value)
      } 
    // })
  }

    getInfo(val){
    const {query, locations, searchId} = this.state
    locations.forEach(location => {
      console.log(val,"---ahhaaaaa")
      if(location.locationName == val){
        console.log(location._id,"---id should be here---")
         this.setState({
           searchId: location._id
         })
      }
      console.log(searchId,"--search id is here--")
      var url = BASE_URL+`${searchId}` 
      console.log(url, "url is here")
     axios.get(`http://localhost:3000/location/${searchId}`).then(res => {console.log(res, "---response is here----")  
     console.log(this.state.locations,"--loc is here--")
     this.setState({
       locations: res.data.data
     })
      }).catch(e => console.log(e, "--error is here--"))
    })
  
   
  }

  getLocation(){
    var url = BASE_URL
      axios.get(url).then(res => {console.log(res, "---get response is here----")
    this.setState({
      locations: res.data.data
    })
    })
      .catch(e => {console.log(e,"---error is here---")})
  }

  goToEditPage(){
    console.log("hello tis jis gce")
    // const history = useHistory()
    // this.context.history.push('/save')
      window.location.href('/edit')
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
        <div style={{display: "flex", flexDirection:"column", justifyContent: "space-between", background: "white", height: "90vh"}}>  
        <div>

        <input
          style={{marginTop: "16px", alignSelf: "flex-end", marginRight:"16px"}}
          placeholder="Search"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        {/* </div> */}
        <div style={{display:'flex', height:"70vh", marginTop:"3%", width: "80%" }}>
        <TableView  locations={locations} deleteLoc={this.deleteLocation} editLoc={this.goToEditPage} />
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