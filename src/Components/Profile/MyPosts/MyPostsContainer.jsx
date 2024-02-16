import { addProfilePostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profilePostsReducer";

import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
  
//   const state = props.store.getState().profilePostsPage;

//     const addNewPostMessage = () => {
//       props.store.dispatch(addProfilePostActionCreator());
//   };

//   const onPostChange = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreator(text));
    
//   };

//   return (
//     <MyPosts
//       // posts={state.posts}
//       // newPostText={state.newPostText}
//       profilePostsPage={ state}
//       addProfilePost={addNewPostMessage}
//       updateNewPostText={ onPostChange}
//     />
//   );
// };

const mapStateToProps = (state) => { 
  return ({
    posts: state.profilePostsPage.posts,
    newPostText: state.profilePostsPage.newPostText,
    // profilePostsPage: state.profilePostsPage,
    resultAuth: state.authUser.resultAuth
  })
}

const mapDispatchToProps = (dispatch) => { 
  return ({
    addProfilePost: () => { 
      dispatch(addProfilePostActionCreator())
    },
    updateNewPostText: (text) => { 
      dispatch(updateNewPostTextActionCreator(text))
    }
  })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
