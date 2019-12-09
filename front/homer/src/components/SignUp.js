import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    email: null
  }

  updateEmailField = (e) => {
    this.setState({ email: e.target.value })
  }

  render() {
    return (
      <form>
        <h1>{this.state.email}</h1>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={(e) => this.updateEmailField(e)}
        />
      </form>
    );
  }
}

export default SignUp