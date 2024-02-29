import { connect } from "react-redux";
import { addProfilePostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profilePostsReducer";
import { withAuthNavigate } from "../../../hoc/withAuthNavigate";
import MyPosts from "./MyPosts";


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
const MyPostsContainerWithAuth = withAuthNavigate(MyPosts);
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsContainerWithAuth);


export default MyPostsContainer;
