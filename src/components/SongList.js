import React from 'react';
import {connect} from 'react-redux'
import {selectSong} from '../actions'

class SongList extends React.Component{
   renderList(){
       return this.props.songs.map(item=>{
           return <div className="item" key={item.title}>
           <div className="right floated content">
           <button className="ui button primary" onClick={()=>this.props.selectSong(item)}>Select</button>
           </div>
           <div className="content">{item.title}</div>
           </div>
       })
   }
   render(){
       
       return <div className="ui divided list">{this.renderList()}</div>
   }
}
const mapStateToProps=(state)=>{
console.log(state)
return {songs:state.songs}
}
export default connect(mapStateToProps,{selectSong})(SongList);