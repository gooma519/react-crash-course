import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost({onClose, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('')
    const [author, setAuthor] = useState('')
    const changeBodyHandler = (e) => {
        setEnteredBody(e.target.value)
    }
    const changeAuthorHandler = (e) => {
        setAuthor(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const postData = {body: enteredBody, author: author}
        onAddPost(postData)
        onClose()
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required onChange={changeAuthorHandler}/>
        </p>
        <p className={classes.actions}>
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Submit</button>
        </p>
    </form>
  );
}

export default NewPost;
