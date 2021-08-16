import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {UserList} from './user_list.jsx';
import {NavBar} from './navBar.jsx';




const Feed = (props) => {

  const [postData, setPostData] = useState([]);
  const [feedView, setFeedView] = useState(null);
  const [author, setAuthor] = useState()

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
        // setAuthor(data.author)
      })

    }
  }, [props.feedView,props.match.params.user])


    if (postData){

      return(
        <>
        <div class="container">

        <header>
          <p id='header-content'>Header Content</p>
        </header>

          {/* <header>
            <NavBar/>
          </header> */}
          <main className="container__main">

              <aside className="container__left">
                <p className='section-label'>RFP-54</p>
                <UserList postData={postData}/>
              </aside>

              <article class="container__middle">
                <p className='section-label'>blog posts</p>

                  {postData.map(post=>
                    <div className='feed-post' >
                      <Link to={`/${post.author.userName}/feed`}>
                        <p className='feed-author'>{post.author.userName}</p>
                      </Link>
                      <Link to={`/${post.author.userName}/post/${post._id}`}>
                        <p className='feed-title'>{post.title}</p>
                      </Link>
                      <p className='feed-text'>{post.text.slice(0,120)} </p>
                    </div>


                  )}

              </article>
              <nav className="container__right">
              <p className='section-label'>community questions</p>
              <div className='help-post'>


                      <Link to={`/`}>
                      <p class='help-text'>How do I undo the most recent local commits in Git? </p>
                      </Link>


              </div>


              </nav>
          </main>
          <footer>
          </footer>
        </div>
        </>




      )
    } else {
      return <div>No posts</div>
    }

}

export {Feed};

