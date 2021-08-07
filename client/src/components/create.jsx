import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {UserList} from './user_list.jsx';

// https://reactjs.org/docs/forms.html

function useHandleSubmit(text){
  httpHandler.create(text, (err,data)=>{
    if (err){
    }else {}
  })
}

const Create = (props) => {

  const [value, setValue] = useState('');
  // const submit = useHandleSubmit(text)

  const clickHandler = () =>{
    // httpHandler.create()
  }

  return(
    <form onSubmit={()=>{useHandleSubmit(value)}}>
    {/* </form><form onSubmit={useHandleSubmit(value)}> */}
        <label>
          Blog Post:
          {/* <textarea value={value} onChange={setValue(event.target.value)} onClick={clickHandler}/> */}
          <textarea value={value} onChange={()=>{setValue(event.target.value)}}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
  )

}

export {Create};

