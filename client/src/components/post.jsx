import React, { useState, useEffect } from 'react';
const httpHandler = require('../httpHandler')

const usePostData = (user, postId) => {

  const [post, setPost] = useState();

  useEffect(()=>{
    let componentMounted = true;
    httpHandler.getPost(user, postId, (err, data)=>{
      if (componentMounted){
      setPost(data)
      }
    })
    return () => {
      componentMounted = false
    }
  },[])
  return post
}

const Post = (props) => {

  console.log(props.match.params.user)
  const user = props.match.params.user
  const post_id = props.match.params.post_id

  const post = usePostData(user, post_id)

  // return 'SDFSDFSF'

  if (post){
    return(
      <>
      <div>{post.title}</div>
      <div>{post.author.userName}</div>
      <div>{post.date}</div>
      <div>{post.text}</div>
      </>
    )
  } else {
    return(
      <div>fail</div>
    )
  }

  // if(props.postData){
  //   return postData
  // } else {
  //   <div>
  //     <h4> Post </h4>
  //   </div>
  // }

}

export default Post;

//set-up post routes/data-fetchers/custom hook