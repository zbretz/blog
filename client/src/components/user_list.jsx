  import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const httpHandler = require('../httpHandler')


// const UserList = (props) => {

//   const authors = props.postData.map(post => post.author.userName)
//   //solution from here: https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
//   const unique_authors = [...new Set(authors)]

//   return(
//     <div>
//       {unique_authors.map(author =>
//         <p> {author} </p>
//         )}
//     </div>
//   )
// }


const UserList = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    httpHandler.getUsers((err, data)=>{
      setUserData(data)
      })
  }, [])

  return(
    <div id='user-list'>
    user list
    <div>
    <ul id='user-list--names'>
      <Link to={`/all`}><li><a>All Users</a></li></Link>
      {userData.map(author =>
      <Link to={`/${author.userName}/feed`}>
        <li><a> {author.userName} </a></li>
      </Link>
        )}
    </ul>
    </div>
    </div>
  )
}

export {UserList};