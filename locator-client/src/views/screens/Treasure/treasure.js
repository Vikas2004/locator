
import './treasure.css';
import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ColorBox from '../../components/ColorBox'

export default class Treasure extends React.Component {
  
  render(){
    return (
      <div>
        <Header/>
        <div className="treasureSection">
        <ColorBox style={{backgroundColor: 'gray'}} />
        <ColorBox style={{backgroundColor: 'yellow'}} />
        </div>
        <Footer />
      </div>
    );
  }

}

