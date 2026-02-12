import React, {useState} from 'react';
import Post from "./Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";


function PostList({onClose, modalVisible}) {
    const [enteredBody, setEnteredBody] = useState('')
    const [author, setAuthor] = useState('')
    const changeBodyHandler = (e) => {
        setEnteredBody(e.target.value)
    }
    const changeAuthorHandler = (e) => {
        setAuthor(e.target.value)
    }

    return (
        <>
            {modalVisible &&
                <Modal onClose={onClose}>
                    <NewPost
                    onChangeBody={changeBodyHandler}
                    onChangeAuthor={changeAuthorHandler}
                    onClose={onClose}
                    />
                </Modal>
            }
            <ul className={classes.posts}>
                <Post author="max" body={enteredBody}/>
                <Post author="mag" body={author}/>
            </ul>
        </>
    );
}

export default PostList;