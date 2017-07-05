import React, { Component } from 'react';
import CurrentImage from '../components/CurrentImage.jsx';
import BackBtn from '../components/BackBtn.jsx';
import NextBtn from '../components/NextBtn.jsx';
import PrevBtn from '../components/PrevBtn.jsx';

class Image extends Component {

	
  	render() {
  	// console.log(this);
  	return (
    	<div className="Image">
    		<div className="Image_panel">
    			<BackBtn />
    			<div>
    				<PrevBtn />
    				<NextBtn />
    			</div>
    		</div>
			 <CurrentImage />
       </div>
    );
  }
}

export default Image;