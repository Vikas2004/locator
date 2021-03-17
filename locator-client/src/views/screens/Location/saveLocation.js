
import './location';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import ColorBox from '../../components/ColorBox'

function SaveLocation() {
  return (
    <div>
      <Header/>
      <div style={{display: "flex", alignItems: "center", background: "white", height: "100vh"}}>
      <span style={{fontSize: 20, color: "black", width: "100%"}}>Save the Locations</span>
      </div>
      
      <Footer />
    </div>
  );
}

export default SaveLocation;
