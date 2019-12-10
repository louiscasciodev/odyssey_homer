import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

class SignUp extends Component {

  state = {
    email: "mon@email.com",
    password: "password",
    name: "name",
    lastname: "lastname",
    flash: "cool"
  }

  updateEmailField = (e) => {
    this.setState({ email: e.target.value })
  }

  updatePasswordField = (e) => {
    this.setState({ password: e.target.value })
  }

  updateNameField = (e) => {
    this.setState({ name: e.target.value })
  }

  updateLastnameField = (e) => {
    this.setState({ lastname: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("A user was submited", this.state)
    fetch("/auth/signup",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state),
      })
      .then(res => res.json())
      .then(
        res => this.setState({ "flash": res.flash }),
        err => this.setState({ "flash": err.flash })
      )
  }

  render() {

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h1>
          {JSON.stringify(this.state, 1, 1)}
        </h1>
        <TextField
          type="email"
          name="email"
          placeholder="mon@email.com"
          value={this.state.email}
          onChange={(e) => this.updateEmailField(e)}
          rows="4"
          defaultValue="Default Value"
          margin="normal"
          variant="filled"
        />
        <TextField
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={(e) => this.updatePasswordField(e)}
          rows="4"
          defaultValue="Default Value"
          margin="normal"
          variant="filled"
        />
        <TextField
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={(e) => this.updateNameField(e)}
          rows="4"
          defaultValue="Default Value"
          margin="normal"
          variant="filled"
        />
        <TextField
          type="text"
          name="lastname"
          placeholder="lastname"
          value={this.state.lastname}
          onChange={(e) => this.updateLastnameField(e)}
          rows="4"
          defaultValue="Default Value"
          margin="normal"
          variant="filled"
        />
        <Button type="submit" value="Envoyer" variant="contained" color="primary">Envoyer</Button>
      </form>
    );
  }
}

export default SignUp