import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
import Product from './components/product';
import Contact from './components/contact';
import About from './components/about';
import Navigation from './components/navbar'
import Footer from './components/footer'
import Cart from './components/my_cart'
import AdminBarang from './components/roboti/AdminBarang'

import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
 	

	<Router>

		<Navigation/>

		<Route exact path="/" component={Home} />
		<Route exact path="product" component={Home} />
		<Route exact path="/contact" component={Contact} />
		<Route exact path="about" component={Home} />
		<Route exact path="/my_cart" component={Cart} />
		<Route exact path="/roboti/AdminBarang" component={AdminBarang} />

		<Footer/>
	
	</Router>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
