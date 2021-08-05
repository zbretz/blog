import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {UserList} from './user_list.jsx';

// https://reactjs.org/docs/forms.html

const Create = (props) => {

  return(
    <form onSubmit={null}>
        <label>
          Blog Post:
          <textarea value={null} onChange={null} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )

}

export {Create};

