import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';



class PrevBtn extends Component {

	Prev(){
		let prevImage = +this.props.history.location.pathname.substr(7) - 1;
		if(prevImage < 1) {
			prevImage = '/image/0';
		}
		else{
			prevImage = '/image/' +  prevImage;
		}
		this.props.history.push(prevImage);
	}
  render() {
  	return (
			 <input type='button' className="Image_btn" onClick={() => this.Prev()} value="Prev" />
    );
  }
}

function mapStateToProps(state){
	return {
		data : state.dataGallery
	}
}

export default withRouter(PrevBtn);