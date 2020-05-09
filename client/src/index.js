import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
import Product from './components/product';
import Contact from './components/contact';
import About from './components/about';
import Navigation from './components/navbar'
import Cart from './components/my_cart'

import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
 	

	<Router>

		<Navigation/>

		<Route exact path="/" component={Home} />
		<Route exact path="/product" component={Product} />
		<Route exact path="/contact" component={Contact} />
		<Route exact path="/about" component={About} />
		<Route exact path="/my_cart" component={Cart} />
	
	</Router>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
