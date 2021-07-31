import React from 'react';
const httpRequest = require('../httpHandler')

class Feed extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      feedView:'all', // vs 'user'
      postData: null
    }
  }


  componentDidMount(){
    var feedView = this.props.feedView

    if(feedView = 'all'){
      httpRequest.getFeedAllUsers((err, data)=>{
        this.setState({postData:data})
        console.log(data)
      })
    } else {
      httpRequest.getFeedOneUser((err, data)=>{
        this.setState({postData:data})
        console.log(data)
      })

    }

  }

  render(){
    return(
      'surprise'
    )
  }

}

export default Feed;