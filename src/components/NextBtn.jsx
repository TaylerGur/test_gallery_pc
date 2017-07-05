import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';



class NextBtn extends Component {

	Next(){
		let nextImage = +this.props.history.location.pathname.substr(7) + 1;
		if(nextImage > this.props.data.length-1) {
			nextImage = '/image/' + this.props.data.length-1;
		}
		else{
			nextImage = '/image/' +  nextImage;
		}
		this.props.history.push(nextImage);
	}
  render() {
  	return (
			 <input type='button' className="Image_btn" onClick={() => this.Next()} value="Next" />
    );
  }
}

function mapStateToProps(state){
	return {
		data : state.dataGallery
	}
}

export default withRouter(connect(mapStateToProps)(NextBtn));