import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

// https://reactjs.org/docs/forms.html

function useHandleSubmit(userInfo){
  httpHandler.register_user(userInfo, (err,data)=>{
    if (err){
    }else {}
  })
}

const Register_User = (props) => {

  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  return(
    <form onSubmit={()=>{useHandleSubmit({username, bio})}}>
    {/* </form><form onSubmit={useHandleSubmit(value)}> */}
        <label>
          Select Your Username:
          <textarea id='create-username' value={username} onChange={()=>{setUsername(event.target.value)}}/>
          {/* <textarea value={value} onChange={setValue(event.target.value)} onClick={clickHandler}/> */}
          Short Bio (eg. cohort and city):
          <textarea id='create-bio' value={bio} onChange={()=>{setBio(event.target.value)}}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
  )

}

export {Create};

