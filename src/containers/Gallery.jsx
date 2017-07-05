import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as data from '../redux/actions/dataActions';
import * as page from '../redux/actions/pageActions';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ElementGallery from '../components/ElementGallery.jsx';
import MoreBtn from '../components/MoreBtn.jsx';


class Gallery extends Component {
  componentDidMount(){
    if(this.props.page == 1){
        axios.get('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=1')
      .then((response) => {
          this.props.dispatch(page.edit(2));
          this.props.dispatch(data.create(response.data.photos));
      })
      .catch((error) =>{
        console.log('errr');
      });
    }
    
  }
  render() {
       // console.log('data ', this.props.data);

    if(this.props.data){
       // console.log('data ', this.props.data.data.photos);
        this.list =  this.props.data.map((e, i) => {
          // console.log(e.user);
           return ( <ElementGallery data={e} idImage={i} key={i}/> );
        });
    }
    // console.log(this.props.data);
  	return (
      <div>
    	   <div className="gallery">
			       {this.list}
        </div>
        <MoreBtn />
     </div>
    );
  }
}
function mapStateToProps(state){

  return {
      data: state.dataGallery,
      page : state.page
  }

}

export default withRouter(connect(mapStateToProps)(Gallery));