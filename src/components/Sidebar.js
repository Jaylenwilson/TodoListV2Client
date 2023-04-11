import React from 'react';
import { useState } from 'react'
import { Navigate } from 'react-router';
import { AiOutlinePlus } from 'react-icons/ai'
import Logo from '../assets/donzo-b-w-logo.png'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
    const [dropdownActive, setDropDownActive] = useState(false)
    const [projectModal, setProjectModal] = useState(false)

    const taskCount = props.tasks.length;

    const activateDropDown = () => {
        setDropDownActive(!dropdownActive)
        console.log(dropdownActive)
    }

    const handleCreateModal = () => {
        setProjectModal(true)
    }


    return (

        <>
            {props.userId && (
                <nav>
                    <nav className="fixed top-0 z-50 w-full border-b text-white bg-blue-500 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-3 py-3 lg:px-5 lg:pl-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-start">
                                    <div className="flex ml-2 md:mr-24">
                                        <img src={Logo} class="mr-3 h-10" alt="Task solver logo" />
                                        {/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span> */}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button className="justify-center mr-10 rounded-md hover:bg-blue-400  p-1">
                                        <AiOutlinePlus title="Create a Task" onClick={() => props.setShowModal(true)} size={30} />
                                    </button>
                                    <div className="flex items-center ml-3">
                                        <div>
                                            <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                            </button>
                                        </div>
                                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                            <div className="px-4 py-3" role="none">
                                                <p className="text-sm text-gray-900 dark:text-white" role="none">
                                                    Neil Sims
                                            </p>
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                                    neil.sims@flowbite.com
                                            </p>
                                            </div>
                                            <ul className="py-1" role="none">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </nav>
            )}
            {props.sessionToken ?



                <aside id="default-sidebar" className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <ul className="space-y-2">
                            <li>
                                <Link to="/upcoming" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span className="ml-3">Upcoming</span>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="group-hover:text-gray-900 flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Today</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{taskCount}</span>
                                </a>
                            </li>
                            <li>
                                <button onClick={activateDropDown} type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Projects</span>
                                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span onClick={handleCreateModal} className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">+</span>
                                </button>


                                {dropdownActive ?

                                    <ul id="dropdown-example" className="py-2 space-y-2">
                                        {props.projectDropDown()}
                                    </ul>
                                    : null}
                            </li>
                            <li>
                                <button onClick={props.clearToken} href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Sign out</span>
                                </button>
                                {props.sessionToken === "" && <Navigate to='/' />}
                            </li>
                        </ul>
                    </div>
                </aside>

                : null}

            {projectModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        ></span>
                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h3
                                    className="text-lg leading-6 font-medium text-gray-900"
                                    id="modal-headline"
                                >
                                    Create Project
                            </h3>
                                <div className="mt-3 sm:mt-4">
                                    <form onSubmit={props.createProject}>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="title"
                                                className="block text-gray-700 font-bold mb-2"
                                            >
                                                Title*
                                        </label>
                                            <input
                                                type="text"
                                                id="title"
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter a project title"
                                                value={props.projectName}
                                                onChange={(e) => props.setProjectName(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                type="submit"
                                            >
                                                Create Project
                                        </button>
                                            <button
                                                className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                onClick={() => setProjectModal(false)}
                                            >
                                                Cancel
                                        </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
