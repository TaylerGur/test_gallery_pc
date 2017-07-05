import React, { Component } from 'react';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import Gallery from './containers/Gallery.jsx';
import Image from './containers/Image.jsx';


export const Routes =
	(
		<Router >
			      <Switch>
				        <Route path="/image/:id" component={Image} />
				      	<Route path="/" component={Gallery} />
			      </Switch>
  		</Router>
);