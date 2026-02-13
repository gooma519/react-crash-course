import Post from "./Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import {useEffect, useState} from "react";


function PostList({onClose, modalVisible}) {
    const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const addPostHandler = (postData) => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPosts((existingPosts) => [postData, ...existingPosts])
    }
    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true)
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json()
            setPosts(resData.posts)
            setIsFetching(false)
        }

        fetchPosts()
    }, []);
    return (
        <>
            {modalVisible &&
                <Modal onClose={onClose}>
                    <NewPost onClose={onClose} onAddPost={addPostHandler}/>
                </Modal>
            }
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map(({body, author}, idx) => <Post key={idx+"post"} body={body} author={author}/>)}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{textAlign:'center', color:'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some</p>
                </div>
            )}
            {isFetching && (<div style={{textAlign: 'center', color: 'white'}}><p>loading...</p></div>)}
        </>
    );
}

export default PostList;