// https://www.w3schools.com/howto/howto_css_searchbar.asp
import React, { useState, useEffect } from 'react';
import {UserList} from './user_list.jsx';

const NavBar = (props) => {

  return(

    <div className="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div class="search-container">
        <form >
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>

    </div>

  )
}

export {NavBar};
