import React from 'react';
import Post from "./Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "./NewPost.jsx";


function PostList() {
    return (
        <>
            <NewPost />
            <list className={classes.posts}>
                <Post author="max" body="hi"/>
                <Post author="mag" body="kill"/>
            </list>
        </>
    );
}

export default PostList;