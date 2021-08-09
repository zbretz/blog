import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {UserList} from './user_list.jsx';

// https://reactjs.org/docs/forms.html

function useHandleSubmit(post){
  httpHandler.create(post, (err,data)=>{
    if (err){
    }else {}
  })
}

const Create = (props) => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const clickHandler = () =>{
    // httpHandler.create()
  }

  return(
    <form onSubmit={()=>{useHandleSubmit({title,text})}}>
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

