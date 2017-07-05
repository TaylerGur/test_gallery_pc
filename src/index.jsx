import React      from 'react';
import ReactDOM   from 'react-dom';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import {Routes} from './Routes';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';


// console.log("sdsdsds");

const store = configureStore();

ReactDOM.render((
	<Provider store={store} >
		{Routes}
	</Provider>
	), document.getElementById('App'));