import React , {Component} from 'react'
import './color.css'

class ColorBox extends Component{
    render(){
        return(
            <div style={this.props.style} className="Color"> 
            </div>
            
        );
    }
   
}

export default ColorBox;