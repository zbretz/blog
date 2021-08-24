import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')
import { Link, BrowserRouter as Router, Route, Switch, useHistory, Redirect } from "react-router-dom";
import {UserList} from './user_list.jsx';

// https://reactjs.org/docs/forms.html



// maybe re-direct to main page but since saving post and requesting to main feed is async and slow, send post data to feed and display that to user?
// or simply direct to post
// or just to main feed and see if it appears

const Create = (props) => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false)
  // const [post_id, setPost_id] = useState()
  // const [post_author_userName, setPost_author_userName] = useState()
  const [post, setPost] = useState()

  var _id;

  function handleSubmit(e, post){
    e.preventDefault();
    httpHandler.create(post)
    .then((response)=>{
      // setPost_id(response.data._id);
      // setPost_author_userName(response.data.author.userName);
      setPost({'id':response.data._id, 'userName':response.data.author.userName})
      setRedirect(true)
      })
    .catch((err) => {alert(err)})
  }

  if(redirect){
    const history = useHistory();
    // history.push(`/${post_author_userName}/post/${post_id}`)
    history.push(`/${post.userName}/post/${post.id}`)

    return null
    //  return <Redirect to="/all" />
  }


  return(
    <form onSubmit={(e)=>handleSubmit(e,{title,text})}>
    {/* </form><form onSubmit={useHandleSubmit(value)}> */}
        <label>
          Title:
          <textarea id='create-title' value={title} onChange={()=>{setTitle(event.target.value)}}/>
          {/* <textarea value={value} onChange={setValue(event.target.value)} onClick={clickHandler}/> */}
          Text:
          <textarea id='create-text' value={text} onChange={()=>{setText(event.target.value)}}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
  )

}


export {Create};

