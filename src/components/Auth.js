import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';


export default function Auth(props) {
  // State variables for form inputs and validation errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginActive, setLoginActive] = useState(false);

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Validation functions for form inputs
  const validateUsername = (value) => {
    if (!value) {
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$^+=!*()@%&])[0-9a-zA-Z#$^+=!*()@%&]{8,}$/;
    if (!value) {
      setPasswordError('Password is required');
    } else if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (!passwordRegex.test(value)) {
      setPasswordError('Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character from the set [#$^+=!*()@%&]');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (value) => {
    if (!value) {
      setConfirmPasswordError('Confirm password is required');
    } else if (value !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };


  // Form submission functions
  const basicSignUp = async (e) => {
    e.preventDefault();

    validateUsername(username);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    // If no validation errors, make POST request to register user
    if (!usernameError && !emailError && !passwordError && !confirmPasswordError) {

      await fetch("http://localhost:3000/register", {
        method: 'POST',
        body: JSON.stringify({
          users: {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
          }
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(data => data.json())
        .then(data => {
          console.log(data.user.username)
          if (data.user) {
            console.log(data)
            props.setSessionToken(data.sessionToken);
            props.updateToken(data.sessionToken, data.user.username, data.user.id);
            props.setUserId(data.user.id);
            setUsername(data.user.username)
          }
        })
        .catch(err => console.log(err))
    }

  }

  // Define a function that will handle basic login.
  // The function receives an event object as an argument.
  const basicLogin = async (e) => {
    // Prevent the default form submission behavior.
    e.preventDefault()

    // Validate the username, email, password, and confirmPassword fields.
    validateUsername(username);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    // If there are no validation errors, send a POST request to the '/login' endpoint.
    if (!usernameError && !emailError && !passwordError && !confirmPasswordError) {

      await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({
          user: {
            email: email,
            username: username,
            password: password
          }
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(data => data.json())
        .then(data => {
          if (data.user) {

            props.updateToken(data.sessionToken, data.user.username, data.user.id)
            props.setUserId(data.user.id)
            console.log(props.userId)
          }
          console.log(data)
          // If the request is successful, update the token and the user's username.
        })
        .catch(err => console.log(err))
    }
  }

  // Define a function that toggles between the login and sign up forms.
  const toggleForm = () => {
    setLoginActive(!loginActive)
  }

  // Render the login/sign up page.
  return (
    <>
      <div className=" w-full bg-cover bg-center relative bg-gradient-to-tr from-blue-700 h-80">
        <img className="blur-sm w-full h-full object-cover absolute mix-blend-overlay" src="https://media.istockphoto.com/id/496207390/photo/writing-to-do-list-of-a-day-is-a-good-habit.jpg?b=1&s=170667a&w=0&k=20&c=Mk3WZTtiYvBP6GedoL1OI1C6uTppgOS7chYbhWBEB1w=" alt="" />
        <div className="p-24">
          <h1 className="text-white text-2xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl  font-bold  "> Take Control of Your Schedule </h1>
          <h2 className="text-white text-xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl  font-light ">Simplify Your Day with Donzo</h2>
        </div>
      </div>
      <div className=' h-max flex flex-col items-center my-7' >
        {

          loginActive ?

            <form className="w-6/12" onSubmit={basicLogin}>
              <h1 className=" tracking-wider text-blue-500 text-4xl font-bold mb-6">Login</h1>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Username</label>
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} onBlur={() => validateUsername(username)} className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                  {usernameError && <span className="text-red-500">{usernameError}</span>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Email</label>
                  <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => validateEmail(email)} className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@email.com" required />
                  {emailError && <span className="text-red-500">{emailError}</span>}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => validatePassword(password)} type="password" id="password" className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                {passwordError && <span className="text-red-500">{passwordError}</span>}
              </div>
              <div className="flex items-start mb-6">
                <a onClick={toggleForm} className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">Sign up</a>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              {props.userId !== "" && <Navigate to='/today' />}
            </form>

            : <form className="w-6/12" onSubmit={basicSignUp}>
              <h1 className="text-4xl font-bold mb-6 text-blue-500">Get Started !</h1>

              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Username</label>
                  <input value={username} onChange={(e) => setUsername(e.target.value)} onBlur={() => validateUsername(username)} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                  {usernameError && <span className="text-red-500">{usernameError}</span>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => validateEmail(email)} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@email.com" required />
                  {emailError && <span className="text-red-500">{emailError}</span>}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => validatePassword(password)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                {passwordError && <span className="text-red-500">{passwordError}</span>}
              </div>
              <div className="mb-6">
                <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Confirm Password</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={() => validateConfirmPassword(confirmPassword)} type="password" id="confirmpassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                {confirmPasswordError && <span className="text-red-500">{confirmPasswordError}</span>}
              </div>

              <div className="flex items-start mb-6">
                <a onClick={toggleForm} className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">Already Have an account ?</a>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              {props.userId !== "" && <Navigate to='/today' />}
            </form>}




      </div>
    </>
  )
}
{/* <form className="flex flex-col border-2 border-solid  bg-transparent w-6/12 h-80 p-5 rounded-md border-cyan-200" action="">

  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <label htmlFor="username">Username</label>
    <input type="text" name="username" />

    <label htmlFor="email">Email</label>
    <input className="ring-slate-500" type="email" name="email" />

    <label htmlFor="password">Password</label>
    <input type="password" name="password" />

    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" name="confirmPassword" />
  </div>
</form> */}
