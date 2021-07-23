import React from 'react';
import ReactDOM from 'react-dom';
import RepoList from './components/test.jsx';

const title = 'React with Webpack and Babel';

// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('app')
// );

const App = () => (
  <RepoList/>
)

ReactDOM.render(<App />, document.getElementById('app'));