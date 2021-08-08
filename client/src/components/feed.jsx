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
            <NavBar/>
          </header>
          <main class="container__main">
              <aside class="container__left">
                <UserList postData={postData}/>
              </aside>
              <article class="container__middle">


                <div id='feed'>
                  Post Feed
                  {postData.map(post=>
                    <div className='post' >
                      <Link to={`/${post.author.userName}/post/${post._id}`}>
                        <h3 className='post-title'>{post.title}</h3>
                      </Link>
                      <div className='post-content'>
                        <Link to={`/${post.author.userName}/feed`}>
                          <div><strong>{post.author.userName}</strong></div>
                        </Link>
                        <div>{post.text.slice(0,120)}</div>
                      </div>

                    </div>
                  )}
                </div>

              </article>
              <nav class="container__right">
                <div id='qa_feed'>
                  {/* Questions and Answers
                  <div className='qa_feed__qa'>
                  </div>

                  <div className='qa_feed__qa'>
                  </div> */}
                  Questions and Answers

                    <div className='post' >
                      <Link to={`/`}>
                        <h3 className='post-title'>Title</h3>
                      </Link>
                      <div className='post-content'>
                        <Link to={`/`}>
                          <div><strong>Author Name</strong></div>
                        </Link>
                        <div>Question</div>
                      </div>

                    </div>




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

