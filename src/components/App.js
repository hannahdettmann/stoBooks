import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Layout from './Layout/Layout'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Layout from './Layout/Layout';




const App = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default App
