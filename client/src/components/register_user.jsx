import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')
import { Link, BrowserRouter as Router, Route, Switch, Redirect, History } from "react-router-dom";


// https://reactjs.org/docs/forms.html

class Register_User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      bio: '',
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);

  }

  handleSubmit(e){
    // this.setState({redirect:true})
    const username = this.state.username
    const bio = this.state.bio
    const userInfo = {username, bio}
    httpHandler.registerUser(userInfo,(err,data)=>{
      if (err){
      }
        this.setState({redirect:true})
    })
  }

  handleChangeUsername(event){
    this.setState({username:event.target.value})
  }
  handleChangeBio(event){
    this.setState({bio:event.target.value})
  }

  render(){

    console.log(this.state.redirect)

  if (this.state.redirect) {
    return <Redirect to="/create" />
  }

  return(
    <form onSubmit={this.handleSubmit}>
        <label>
          Select Your Username:
          <textarea id='create-username' value={this.state.username} onChange={this.handleChangeUsername}/>
          Short Bio (eg. cohort and city):
          <textarea id='create-bio' value={this.state.bio} onChange={this.handleChangeBio}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
  }
}
export {Register_User};

