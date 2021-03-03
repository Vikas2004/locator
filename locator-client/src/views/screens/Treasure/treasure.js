
import './treasure.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
//import ColorBox from '../../components/ColorBox'

function Treasure() {
  return (
    <div>
      <Header/>
      <div className="treasureSection">
      {/* <ColorBox style={{backgroundColor: 'gray'}} />
      <ColorBox style={{backgroundColor: 'yellow'}} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Treasure;
