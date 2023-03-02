import React, { useState } from 'react'

export default function Auth() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginActive, setLoginActive] = useState('');


  const basicSignUp = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/auth/register", {
      method: 'POST',
      body: JSON.stringify({
        user: {
          userName: userName,
          email: email,
          password: password,
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(data => data.json())
      .then(data => {
        console.log(data.userName)
        if (data.user) {
          props.setSessionToken(data.sessionToken);
          props.updateToken(data.sessionToken, data.id);
          props.setUserId(data.user.id);
          setUserName(data.userName)

        }
      })
      .catch(err => console.log(err))

  }

  const basicLogin = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(data => data.json())
      .then(data => {
        props.updateToken(data.sessionToken, data.user.firstName, data.user.role)
      })
      .catch(err => console.log(err))

  }

  const toggleForm = () => {
    setLoginActive(!loginActive)
  }

  return (
    <>

    </>
  )
}
