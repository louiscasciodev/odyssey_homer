import React, { useState } from 'react';
import axios from "axios";
import { Button, TextField } from '@material-ui/core';

const SignUp = () => {
  const [email, setEmail] = useState("mon@email.com");
  const [password, setPassword] = useState("password");
  const [name, setName] = useState("name");
  const [lastname, setLastname] = useState("lastname");
  const [flash, setFlash] = useState("");

  const updateEmailField = (e) => { setEmail(e.target.value) }
  const updatePasswordField = (e) => { setPassword(e.target.value) }
  const updateNameField = (e) => { setName(e.target.value) }
  const updateLastnameField = (e) => { setLastname(e.target.value) }

  const handleSubmit = (e) => {
    e.preventDefault();
    const donnee = { email, password, name, lastname }
    console.log(donnee)
    axios
      .post('/auth/signup', donnee)
      .then(res => res.data)
      .then(
        data => setFlash(data.flash),
      )
  }

  return (
    <>    
    {console.log(flash)}
      <form onSubmit={handleSubmit}>
        <h1>
          {JSON.stringify({email, password, name, lastname})}
        </h1>
        <TextField
          type="email"
          name="email"
          value={email}
          onChange={(e) => updateEmailField(e)}
          rows="4"
          margin="normal"
          variant="filled"
        />
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={(e) => updatePasswordField(e)}
          rows="4"
          margin="normal"
          variant="filled"
        />
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={(e) => updateNameField(e)}
          rows="4"
          margin="normal"
          variant="filled"
        />
        <TextField
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => updateLastnameField(e)}
          rows="4"
          margin="normal"
          variant="filled"
        />
        <Button type="submit" value="Envoyer" variant="contained" color="primary" >Envoyer</Button>
      </form>
    </>
  );
}

export default SignUp