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


  function handleSubmit(e, post){
    e.preventDefault();
    httpHandler.create(post)
    .then(()=>{
      setRedirect(true)
      })
    .catch((err) => {alert(err)})
    console.log('redirect?', redirect)
  }

  if(redirect){
    const history = useHistory();
    history.push("/all")
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

