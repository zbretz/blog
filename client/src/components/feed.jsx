import React from 'react';
const httpHandler = require('../httpHandler')

class Feed extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      feedView:null,//'all', // vs 'user'
      postData: null
    }
  }

   componentDidMount(){
    //var feedView = this.props.feedView
    this.setState({feedView:this.props.feedView})

   console.log(this.props.match.params.user)
   const user = this.props.match.params.user

  console.log(this.props.feedView)
console.log(this.state.feedView)
    if(this.props.feedView === 'all'){
    //  console.log(feedView)
      httpHandler.getFeedAllUsers((err, data)=>{
        console.log('BANANAAAA')
        this.setState({postData:data})
        console.log(data)
      })
    } else {
 //     const user = this.props.feedView
        httpHandler.getFeedOneUser(user, (err, data)=>{
        this.setState({postData:data})
        console.log('sdfsdf')
        console.log(this.state.postData)
      })

    }

  }

  render(){

    console.log(this.props)

    if (this.state.postData){

      return(
        <div>

          {this.state.postData.map(post=>

                  <div style={{border:'2px solid red'}}>

             <>   <div>{post.author.userName}</div>
                <div>{post.title}</div>
                <div>{post.text}</div>
                </> </div>


          )}
        </div>
      )

    } else {
      return <div>lnklkn</div>
    }

  }

}

export {Feed};

