import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
// import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Title title={'React + Electron'} />
    </div>
    // <Router>
    //   <Switch>
    //     <Route path='/'>
    //       <div>可视化简历平台</div>
    //       <div>这是 Electron + React </div>
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
