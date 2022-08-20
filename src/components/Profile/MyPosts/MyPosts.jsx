import React from 'react';
import './MyPosts.module.css'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import post from "./Post/Post";

const MyPosts = (props) => {

    let postElements =
         props.posts.map(p => <Post message = {p.post}  laikCkaun = {p.laikCkaun}/>)

    return (
        <div className={s.indent}>
            <h3> My posts </h3>
            <div>
                <div>
                <textarea></textarea>
            </div>
                <div>
                <button>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    );
}

export default MyPosts;