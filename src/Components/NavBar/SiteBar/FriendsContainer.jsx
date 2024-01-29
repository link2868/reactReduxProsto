// import React from "react";
import FriendsElements  from "./Friends";
import { connect } from "react-redux";


const mapStateToProps = (state) => { 
  
  return ({
    sitebar: state.sitebar
  })
}

  
const FriendsContainer = connect(mapStateToProps)(FriendsElements)

export default FriendsContainer;
