import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')

const Feed = (props) => {

  const [postData, setPostData] = useState([]);

  const path = props.match.path;

  useEffect(() => {

    if (path === "/all"){
      httpHandler.getFeedAllUsers((err, data)=>{
      setPostData(data)
      })
    } else if (path === "/:user/feed"){
        const user = props.match.params.user
        httpHandler.getFeedOneUser(user, (err, data)=>{
        setPostData(data)
      })

    }
  }, [])


    if (postData){

      return(
        <div>
          {postData.map(post=>
            <div style={{border:'2px solid red'}}>
              <>
                <div>{post.author.userName}</div>
                <div>{post.title}</div>
                <div>{post.text}</div>
              </>
            </div>
          )}
        </div>
      )
    } else {
      return <div>lnklkn</div>
    }

    return <div>wefwefwe</div>



}

export {Feed};

