import React, { useState } from 'react';
import axios from "axios";
import { Button, TextField, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';
import './signUp.css'

const MyApp = () => {
  const formTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff4400',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },
    },
  });

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const [email, setEmail] = useState("mon@email.com");
  const [password, setPassword] = useState("password");
  const [name, setName] = useState("name");
  const [lastname, setLastname] = useState("lastname");
  const [flash, setFlash] = useState("");

  const updateEmailField = (e) => { setEmail(e.target.value) }
  const updatePasswordField = (e) => { setPassword(e.target.value) }
  const updateNameField = (e) => { setName(e.target.value) }
  const updateLastnameField = (e) => { setLastname(e.target.value) }

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickVariant();
    const donnee = { email, password, name, lastname }
    console.log(donnee)
    axios
      .post('/auth/signup', donnee)
      .then(res => res.data)
      .then(
        data => setFlash(data.flash),
      )
  }

  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = variant => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <>
      {console.log(flash)}
      <ThemeProvider theme={formTheme}>
        <form onSubmit={handleSubmit} className="form-signup">
          <Typography variant="h6">
            {JSON.stringify({ email, password, name, lastname })}
          </Typography>
          <TextField
            type="email"
            name="email"
            value={email}
            className={classes.margin}
            onChange={(e) => updateEmailField(e)}
            rows="4"
            variant="filled"
            label="email"
            size="medium"
            margin="dense"
          />
          <TextField
            type="password"
            name="password"
            value={password}
            className={classes.margin}
            onChange={(e) => updatePasswordField(e)}
            rows="4"
            autoComplete="current-password"
            variant="filled"
            label="password"
            size="medium"
            margin="dense"
          />
          <TextField
            type="text"
            name="name"
            value={name}
            className={classes.margin}
            onChange={(e) => updateNameField(e)}
            rows="4"
            variant="filled"
            label="name"
            size="medium"
            margin="dense"
          />
          <TextField
            type="text"
            name="lastname"
            value={lastname}
            className={classes.margin}
            onChange={(e) => updateLastnameField(e)}
            rows="4"
            variant="filled"
            label="lastname"
            size="medium"
            margin="dense"
          />
          <Button
            onClick={handleClickVariant('success')}
            type="submit"
            value="Envoyer"
            className={classes.margin}
            variant="contained"
            color="primary"
          >
            Envoyer
          </Button>
        </form>
      </ThemeProvider>
    </>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}