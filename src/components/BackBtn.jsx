import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';



class BackBtn extends Component {


  render() {

  	return (
			 <Link className="Image_btn"  to='/'>&larr;  Back</Link>
    );
  }
}

export default withRouter(BackBtn);