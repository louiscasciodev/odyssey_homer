import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    email: "mon@email.com",
    password: "password",
    name: "name",
    lastname: "lastname"
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
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h1>
          {JSON.stringify(this.state, 1, 1)}
        </h1>
        <input
          type="email"
          name="email"
          placeholder="mon@email.com"
          value={this.state.email}
          onChange={(e) => this.updateEmailField(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={(e) => this.updatePasswordField(e)}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={(e) => this.updateNameField(e)}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={this.state.lastname}
          onChange={(e) => this.updateLastnameField(e)}
        />
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default SignUp