import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import Bubl from './Bubl';
import { getBubls, filterByHashTag } from '../actions';
import InputBubl from './InputBubl';

class BublPage extends Component {
  state = {
    value: ''
  }

   componentDidMount() {
     const id = this.props.match.params.id;
      // later this will be a get request to get bubls for the specific school
     this.props.getBubls(id);    
   }

   handleChange = (e) => {
     this.setState({value: e.target.value});
     
     this.props.filterByHashTag(this.props.bubls, e.target.value)
     
   }


   render() {
     
    // prob can be written better
    let allHashTags = []
    this.props.bubls.forEach(bubl => {      
      allHashTags = [...allHashTags, ...bubl.hashtags]
    })

    let uniqueHashes = [...new Set(allHashTags)].sort(); 

      return (
         <div className="bubl-page">
         <h2>List of Bubls</h2>            

         <select value={this.state.value} onChange={this.handleChange}>
            <option value='all'>all</option>

           {uniqueHashes.map(hastag => <option value={hastag}>{hastag}</option> )}
         </select>

            {/* might be better to get filteredBubls from component state
            instead of redux state  */}
            {this.props.filteredBubls.map((bubl, index) => (
              <>
                 <Link exact to="/bubl">{bubl.bublname}</Link> 
                 <div>( {bubl.hashtags.map(hashtag => (<>#{hashtag} </>))} )</div>
              </>
            ))}
         </div>
      )
   }
}
const mapStateToProps = state => {
   return {
      bubls: state.bubls,
      filteredBubls: state.filteredBubls,
      fetchingBubls: state.fetchingBubls
   }
}

export default connect(mapStateToProps, {getBubls, filterByHashTag})(BublPage);