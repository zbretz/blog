import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Feed} from './components/feed.jsx';

import Post from './components/post.jsx';

const title = 'React with Webpack and Babel';

// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('app')
// );

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Switch>
          {/* <Route path="/all" component={Feed} />
          <Route path="/:user/feed" component={Feed} /> */}
          <Route path="/all" render={(props)=>(<Feed {...props} feedView={'all'}/>)} />
          <Route path="/:user/feed" render={(props)=>(<Feed {...props} feedView={'user'}/>)} />
          <Route path="/:user/post/:post_id" exact component={(props) => <Post {...props}/>} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
  // <RepoList/>
}

ReactDOM.render(<App />, document.getElementById('app'));