// https://www.w3schools.com/howto/howto_css_searchbar.asp
import React, { useState, useEffect } from 'react';
import {UserList} from './user_list.jsx';
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NavBar = (props) => {

  return(
    <>
    <div>
      <header>
        <div id='header-content'>
          <span>Header Content</span>
          <a href='/create'>
            <span id='writePostButton'>Write a Post</span>
          </a>
        </div>

      </header>
    </div>
    </>

  )
}

export {NavBar};
