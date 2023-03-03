import React, { useState } from 'react'
import { Link } from 'react-dom'

export default function Auth(props) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginActive, setLoginActive] = useState(false);


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
      <div className=" w-full bg-cover bg-center relative bg-gradient-to-tr from-purple-600 h-96">
        <img className="w-full h-full object-cover absolute mix-blend-overlay" src="https://media.istockphoto.com/id/1185878239/photo/i-can-check-off-everything-on-my-to-do-list.jpg?b=1&s=170667a&w=0&k=20&c=Ggx0gruN6lSeQ22awYd5NBlevaz8KEDG24BZPQUqwr4=" alt="" />
      </div>
      <div className=' flex flex-col  items-center  ' >
        {

          loginActive ?

            <form className=" border rounded-md border-slate-200 p-5" onSubmit={basicLogin()}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                </div>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@email.com" required />
                </div>
              </div>
              <div class="mb-6">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>
              <div class="flex items-start mb-6">
                <a onClick={toggleForm} className="text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            : <form onSubmit={basicSignUp()}>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                </div>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@email.com" required />
                </div>
              </div>
              <div class="mb-6">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>

              <div class="flex items-start mb-6">
                <a onClick={toggleForm} className="text-blue-600 hover:underline dark:text-blue-500">Already Have an account ?</a>
              </div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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
