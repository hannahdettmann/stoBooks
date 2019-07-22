import React from 'react';
import logo from '../../images/stoBooks.png';
import '../../styles/App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
      <Typography variant="h2" gutterBottom>
        StoBooks
      </Typography>
      <Typography variant="h5" gutterBottom>
        Made By Students, For Students
      </Typography>
      </header>
      <body>
      <Grid container 
          justify="center"
          className="homeRow"
          alignItems="flex-end" 
          spacing={2}>
        <img src={logo} alt="logo" className="big-avatar" /> 
      </Grid>
        <div className="homeRow">
          <Grid container 
          justify="center"
          alignItems="flex-end" 
          spacing={2}>
            <Grid item xs={12}>
            <BrowserRouter>
              <Link to="/login">
            <Button variant="contained" className="nav-button">
                Login
              </Button>
                </Link> 
              </BrowserRouter>
            </Grid>
            <Grid item xs={12}>
            <BrowserRouter>
              <Link to="/buy">
            <Button variant="contained" className="nav-button">
                Search Books
              </Button>
                </Link> 
              </BrowserRouter>
            </Grid>
            <Grid item xs={12}>
            <BrowserRouter>
              <Link to="/about">
              <Button variant="contained" className="nav-button">
              Learn More
              </Button>
              </Link>
              </BrowserRouter>
            </Grid>
          </Grid>
        </div>
      </body>
    </div>
  );
}

export default Homepage;
