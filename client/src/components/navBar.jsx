// https://www.w3schools.com/howto/howto_css_searchbar.asp
import React, { useState, useEffect } from 'react';
import {UserList} from './user_list.jsx';
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NavBar = (props) => {

  return(
    <>
    <div>
      {/* <h1>Hello Webpack</h1>
      <Link to={`/create`}>
        <div id='writePostButton'>Write a Post</div>
      </Link> */}
      <a href='/create'>
        <div id='writePostButton'>Write a Post</div>
      </a>
   </div>
    <div className="topnav">
      <a class="active" href="#home">RFP-54</a>
      <a href="#about">Week 1</a>
      <a href="#contact">Week 2</a>
      <div class="search-container">
        <form >
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>

    </div>
    </>

  )
}

export {NavBar};
