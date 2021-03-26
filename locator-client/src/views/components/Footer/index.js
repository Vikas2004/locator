import './footer.css';
import Navbar from 'react-bootstrap/Navbar'
function Footer(){
    return(
        // <div className="Footer">
        //     <p><a href="https://github.com/Vikas2004/locator">Source Code</a></p>
        // </div>
        <Navbar bg="dark" variant="dark" className="Footer">
        <p style={{margin: '0 auto'}}><a href="https://github.com/Vikas2004/locator">Source Code</a></p>
      </Navbar>
    );
}

export default Footer;