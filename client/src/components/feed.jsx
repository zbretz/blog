import React from 'react';
const httpHandler = require('../httpHandler')

class Feed extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      postData: null
    }
  }

   componentDidMount(){
    const path = this.props.match.path

    if (path === "/all"){
      httpHandler.getFeedAllUsers((err, data)=>{
      this.setState({postData:data})
      })
    } else if (path === "/:user/feed"){
        const user = this.props.match.params.user
        httpHandler.getFeedOneUser(user, (err, data)=>{
        this.setState({postData:data})
      })

    }
  }
//benefits: less state to manage, cleaner/more readable
  render(){

    if (this.state.postData){

      return(
        <div>
          {this.state.postData.map(post=>
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

  }

}

export {Feed};

