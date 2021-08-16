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



      <div class="create_container">

<main className="create_container__main">

      <div id='create_container__main__post_title'>{post.title}</div>
      <div id='create_container__main__post_author'>{post.author.userName}</div>
      <div id='create_container__main__post_date'>{post.date}</div>
      <div id='create_container__main__post_text'>{post.text}</div>

</main>

<aside class="create_container__sidebar">
        ...
</aside>

<footer>
</footer>
</div>


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