import React , {Component} from 'react'
import './color.css'

class ColorBox extends Component{
 constructor(props){
     super(props)
     this.state = {
random: ""
     }
 }
 componentWillReceiveProps(props){
     console.log(props,"---props are here---")
     this.setState({
     random: props.randomLoc
     })
 }
render(){
    const {style, clickOne} = this.props
    return(
        <div style={style} onClick={clickOne}  className="Color">
        <label>{this.state.random.locationName || ""}</label>
        <label>{this.state.random.latitude}</label>
       <label>{this.state.random.longitude}</label>
      </div>   
    )
        }
    
    }
export default ColorBox;