import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from './components/feed.jsx';
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
          <Route path="/" exact component={() => <Feed />} />
          <Route path="/post" exact component={() => <Post />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
  // <RepoList/>
}

ReactDOM.render(<App />, document.getElementById('app'));