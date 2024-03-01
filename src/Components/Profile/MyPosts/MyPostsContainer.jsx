import { connect } from "react-redux";
import { addProfilePostActionCreator } from "../../../redux/profilePostsReducer";
import { withAuthNavigate } from "../../../hoc/withAuthNavigate";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => { 
  return ({
    posts: state.profilePostsPage.posts,
    newPostText: state.profilePostsPage.newPostText,
    resultAuth: state.authUser.resultAuth
  })
}

const mapDispatchToProps = (dispatch) => { 
  return ({
    addProfilePost: (newPost) => { 
      dispatch(addProfilePostActionCreator(newPost))
    },
    // updateNewPostText: (text) => { 
    //   dispatch(updateNewPostTextActionCreator(text))
    // }
  })
}
const MyPostsContainerWithAuth = withAuthNavigate(MyPosts);
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsContainerWithAuth);


export default MyPostsContainer;
