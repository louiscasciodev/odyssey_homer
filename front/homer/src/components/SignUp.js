import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

class SignUp extends Component {

  state = {
    formSubmit: {
      email: "mon@email.com",
      password: "password",
      name: "name",
      lastname: "lastname",
    },
    flash: "cool"
  }

  updateEmailField = (e) => {
    let formSubmit = {...this.state.formSubmit}
    formSubmit.email = e.target.value;
    this.setState({formSubmit})
  }

  updatePasswordField = (e) => {
    let formSubmit = {...this.state.formSubmit}
    formSubmit.password = e.target.value;
    this.setState({formSubmit})
  }

  updateNameField = (e) => {
    let formSubmit = {...this.state.formSubmit}
    formSubmit.name = e.target.value;
    this.setState({formSubmit})
  }

  updateLastnameField = (e) => {
    let formSubmit = {...this.state.formSubmit}
    formSubmit.lastname = e.target.value;
    this.setState({formSubmit})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let formSubmit = {...this.state.formSubmit}
    console.log("A user was submited", formSubmit)
    fetch("/auth/signup",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state.formSubmit),
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
          {JSON.stringify(this.state.formSubmit)}
        </h1>
        <TextField
          type="email"
          name="email"
          defaultValue="mon@email.com"
          value={this.state.formSubmit.email}
          onChange={(e) => this.updateEmailField(e)}
          rows="4"
          margin="normal"
          variant="filled"
        />
        <TextField
          type="password"
          name="password"
          defaultValue="password"
          value={this.state.formSubmit.password}
          onChange={(e) => this.updatePasswordField(e)}
          rows="4"
          margin="normal"
          variant="filled"
        />
        <TextField
          type="text"
          name="name"
          defaultValue="name"
          value={this.state.formSubmit.name}
          onChange={(e) => this.updateNameField(e)}
          rows="4"
          margin="normal"
          variant="filled"
        />
        <TextField
          type="text"
          name="lastname"
          defaultValue="lastname"
          value={this.state.formSubmit.lastname}
          onChange={(e) => this.updateLastnameField(e)}
          rows="4"
          margin="normal"
          variant="filled"
        />
        <Button type="submit" value="Envoyer" variant="contained" color="primary" >Envoyer</Button>
      </form>
    );
  }
}

export default SignUp