
import React from 'react';
import { Link } from 'react-router-dom';
// import CheckIn from './CheckIn';
// import About from './About';
// import App from './App';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink} from 'reactstrap';
  
class Menu extends React.Component {
    render() {
        return (
            <div>
                <Navbar id="def-head">
                <NavbarBrand><Link to ='/' className="link-none">SEEK</Link></NavbarBrand>
                    <Nav>
                        <NavLink className="navLink"><Link to ='/check-in' className="link-none navLink">Check In</Link></NavLink>
                        <NavLink href="/About/" className="link-about">About</NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Menu;