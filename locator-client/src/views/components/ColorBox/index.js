import React , {Component} from 'react'
import './color.css'

function ColorBox(props){
    
        return(
            <div style={props.style} onClick={props.clickOne} className="Color"> 
            </div>     
        );
        }

export default ColorBox;