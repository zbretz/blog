import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {UserList} from './user_list.jsx';



const Feed = (props) => {

  const [postData, setPostData] = useState([]);
  const [feedView, setFeedView] = useState(null);


  const path = props.match.path;

  useEffect(() => {

    if (path === "/all"){
      httpHandler.getFeedAllUsers((err, data)=>{
      setPostData(data)
      setFeedView(path)
      })
    } else if (path === "/:user/feed"){
        const user = props.match.params.user
        httpHandler.getFeedOneUser(user, (err, data)=>{
        setPostData(data)
        setFeedView(path)
      })

    }
  }, [props.feedView])


    if (postData){

      return(
        <>

        <UserList postData={postData}/>
        <div id='feed'>
          {postData.map(post=>
            <div className='post' >
              <h3 className='post-title'>{post.title}</h3>
              <div className='post-content'>
                <Link to={`/${post.author.userName}/feed`}>
                  <div><strong>{post.author.userName}</strong></div>
                </Link>
                <div>{post.text}</div>
               </div>

            </div>
          )}
        </div>
        </>
      )
    } else {
      return <div>No posts</div>
    }

}

export {Feed};

