import React from 'react';
import SignUp from './components/SignUp'
import './App.css';
import {Grid, Paper} from '@material-ui/core';

function App() {
  return (
    <div className="App">
        <Grid container alignItems='center' style={{ height: '100%' }}>
            <Paper elevation={4} style={{ margin: 32 }}>
                  <SignUp />
            </Paper>
        </Grid>
    </div>
  );
}

export default App;
