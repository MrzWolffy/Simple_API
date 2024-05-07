import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './index.css'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');

    const navigate = useNavigate()

    function handleRegister() {
        axios.post('http://localhost:5000/', { action: 'register', username, password, email, phone})
            .then(response => {
                setStatus(response.data);
                navigate('/login');
            })
            .catch(error => {
                setStatus(error.response.data);
            });
        console.log(status)
    }

    return (
    <div class="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
    <div class="grid gap-8">
      <div
        id="back-div"
        class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
      >
        <div
          class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
        >
          <h1 class="pt-3 pb-6 font-bold dark:text-gray-400 text-center cursor-default">
            Register
          </h1>
          <div class="text-center dark:text-gray-400" >{status}</div>
          <form class="space-y-4">
            <div>
              <label for="username" class="mb-2  dark:text-gray-400 text-lg ">Username</label>
              <input
                id="username"
                class="border pb-2 pl-3 h-14 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="username"
                placeholder="username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label for="password" class="mb-2 dark:text-gray-400 text-lg ">Password</label>
              <input
                id="password"
                class="border pb-2 pl-3 h-14 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Password"
                required
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label for="email" class="mb-2 dark:text-gray-400 text-lg ">Email</label>
              <input
                id="email"
                class="border pb-2 pl-3 h-14 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="email"
                placeholder="Email"
                required
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="phone" class="mb-2 dark:text-gray-400 text-lg ">Phone</label>
              <input
                id="phone"
                class="border pb-2 pl-3 h-14 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="phone"
                placeholder="Phone"
                required
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              class="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="button" onClick={handleRegister}
            >
              Register
            </button>
            {status === 'Successfully Register' && (
              navigate('/login')
            )}
          </form>
          <div class="flex flex-col mt-4 items-center justify-center text-sm">
                <h3 class="dark:text-gray-300">
                  Already have account?
                  <a
                    class="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="/"
                  >
                    <span
                      class="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                      
                    >
                      &nbsp;Log in
                    </span>
                  </a>
                </h3>
              </div>
        </div>
      </div>
      </div>
    </div>
    );
}

export default Register;