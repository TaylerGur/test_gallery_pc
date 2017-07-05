import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';


class ElementGallery extends Component {

    render() {
      // console.log(this.props);
        this.link = '/image/' + this.props.idImage;
  	return (
    	<div className="element_gallery">
        <div className="element_gallery_title">{this.props.data.name}</div>
        <Link to={this.link}> <img className="element_gallery_image" src={this.props.data.user.cover_url} /></Link>
        <div className="element_gallery_author">{this.props.data.user.fullname}</div>

      </div>
    );
  }
}


export default withRouter(ElementGallery);