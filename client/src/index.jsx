import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Feed} from './components/feed.jsx';
import Post from './components/post.jsx';
import {Create} from './components/create.jsx';
import {Register_User} from './components/register_user.jsx';
import {NavBar} from './components/navBar.jsx';


const title = 'React with Webpack and Babel';

// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('app')
// );

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          {/* <Route path="/all" component={Feed} />
          <Route path="/:user/feed" component={Feed} /> */}
          <Route path="/all" render={(props)=>(<Feed {...props} feedView={'all'}/>)} />
          <Route path="/:user/feed" render={(props)=>(<Feed {...props} feedView={'user'}/>)} />
          <Route path="/:user/post/:post_id" exact component={(props) => <Post {...props}/>} />
          <Route path="/create" exact component={(props) => <Create {...props}/>} />
          <Route path="/register_user" exact component={(props) => <Register_User {...props}/>} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
  // <RepoList/>
}

ReactDOM.render(<App />, document.getElementById('app'));