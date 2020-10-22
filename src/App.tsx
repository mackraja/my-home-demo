import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from "history";
import { CssBaseline } from "@material-ui/core";
import Routes from './routes';

// History
const history = window.matchMedia('(display-mode: standalone)').matches
    ? createHashHistory()
	: createBrowserHistory();

function App(props?: any) { 
  return (
        <Router history={history}>
          <CssBaseline/>
          <Routes />      
        </Router>
  );
}

export default App;
