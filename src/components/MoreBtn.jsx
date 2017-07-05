import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as data from '../redux/actions/dataActions';
import * as page from '../redux/actions/pageActions';
import axios from 'axios';

class MoreBtn extends Component {
    addMoreImage(){

       axios.get(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${this.props.page}`)
      .then((response) => {
          console.log('response ', response);
          // this.setState({
          //   data : response
          // });
          this.props.dispatch(data.add(response.data.photos));
          this.props.dispatch(page.edit(this.props.page + 1));
          console.log(this.props.data);
          console.log(this.props.page);
      })
      .catch((error) =>{
        console.log('errr');
      });
    }
    render() {
      // console.log(this.props);
  	return (
    	<div>
        <input className="more_button" type='button' value="more images..." onClick={() => this.addMoreImage()} />
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    page : state.page,
    data : state.dataGallery
  }
}


export default connect(mapStateToProps)(MoreBtn);