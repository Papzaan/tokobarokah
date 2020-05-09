import React from 'react';
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import imnav from '../assets/logo192.png'
import navcart from '../assets/cart2.png'


class Navigation extends React.Component {
	
	render () {
		return ( 
			<>
			<Navbar>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
			    <Navbar.Brand href="#">
			      <a className="abrand" href="/">Toko Barokah</a>
			    </Navbar.Brand>
			    <Nav className="ml-auto">

			    	<NavLink className="mr-sm-4 p-2 " exact to="/" activeClassName="navbar-nav-active"> Home </NavLink>
			    	<NavLink className="mr-sm-4 p-2 " to="/product" activeClassName="navbar-nav-active"> Product </NavLink>
			    	<NavLink className="mr-sm-4 p-2 " to="/about" activeClassName="navbar-nav-active"> About </NavLink>
			    	<NavLink className="mr-sm-4 p-2 " to="/contact" activeClassName="navbar-nav-active">Contact </NavLink>
			    	<NavLink className="mr-sm-4" to="/my_cart" activeClassName="navbar-nav-active">
			    	<img class="navcart" src={navcart} /> 
			    	</NavLink>

			    </Nav>
			    </Navbar.Collapse>

		  	</Navbar>
			</>
		)
	}
}

export default Navigation;
