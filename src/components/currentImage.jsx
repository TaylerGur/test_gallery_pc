import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import * as data from '../redux/actions/dataActions';
import * as page from '../redux/actions/pageActions';

class CurrentImage extends Component {
  componentDidMount(){
      let currentImage = this.props.history.location.pathname.substr(7);
      if(+this.props.data.length < 1 ){
          let item = currentImage == 0 ? 1 : Math.ceil(+currentImage/20);
        for(let i = 1; i < item + 1; i++){
            console.log('before - ', this.props.page);
            this.props.dispatch(page.edit(+this.props.page+1));
            console.log('after - ', this.props.page);
            console.log('i', i);
            axios.get(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${i}`)
                  .then((response) => {
                      this.props.dispatch(data.add(response.data.photos));
                      console.log(this.props.data);
                  })
                  .catch((error) =>{
                      console.log('errr');
                  });
        }
      }
  }
  render() {
  	// console.log(this);
  	this.currentImage = this.props.history.location.pathname.substr(7);

  	return (
      <div className='currentImage'>
			   <img className="currentImage_image" src={this.props.data.length != 0? this.props.data[this.currentImage].user.cover_url : '#'} />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		data: state.dataGallery,
    page : state.page
	}
}
export default withRouter(connect(mapStateToProps)(CurrentImage));