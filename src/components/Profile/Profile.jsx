import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
 
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer 
            // store={props.store}
           // updateNewPostText={props.updateNewPostText}
            // newPostText={props.profilePage.newPostText}
            // profilePage={props.profilePage}
            // posts={props.posts} 
            // dispatch={props.dispatch}
            //addPost={props.addPost}
            />
        </div>
    );
}


export default Profile;