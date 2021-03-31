
import  './header.css'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../../../src/Favicon.png'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" class="Header">
    <Navbar.Brand href="/">
      <img
        alt=""
        src={logo}
        width="40"
        height="40"
        // className="d-inline-block align-top"
      />{' '}
      Locator
    </Navbar.Brand>
  </Navbar>
  );
}

export default Header;
