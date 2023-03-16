import React from 'react'
import { useState } from 'react';
import Datepicker from "tailwind-datepicker-react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Label, Select } from 'flowbite-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';







export default function TodayTask(props) {
    const [show, setShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState(Date)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [priority, setPriority] = useState(1);
    const [project, setProject] = useState('');


    const options = {
        title: "Due date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        maxDate: new Date("2030-01-01"),
        minDate: new Date("2023-01-01"),
        theme: {
            background: "bg-slate-50",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "",
            input: "bg-slate-50",
            inputIcon: "",
            selected: "bg-blue-500",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span className="bg-none"><AiOutlineArrowLeft /></span>,
            next: () => <span><AiOutlineArrowRight /></span>,
        },
        datepickerClassNames: "top-12",
        defaultDate: new Date("2023-01-01"),
        language: "en",
    }

    const CreateTask = (e) => {
        e.preventDefault();
        // handle form submission here
    };


    const handleChange = (selectedDate) => {
        setSelectedDate(selectedDate)
    }
    const handleClose = () => {
        setShow(!show)
    }
    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2  border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div>
                        <button onClick={() => props.setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Task</button>
                    </div>
                </div>
                {props.showModal && (
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
                                        Create New Task
        </h3>
                                    <div className="mt-3 sm:mt-4">
                                        <form onSubmit={CreateTask}>
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
                                                    placeholder="Enter task title"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="description"
                                                    className="block text-gray-700 font-bold mb-2"
                                                >
                                                    Description
              </label>
                                                <textarea
                                                    id="description"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder="Enter task description"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                ></textarea>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="dueDate"
                                                    className="block text-gray-700 font-bold mb-2"
                                                >
                                                    Due Date
              </label>
                                                <DatePicker
                                                    id="dueDate" selected={dueDate}
                                                    onChange={(date) => setDueDate(date)}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholderText="Select due date"
                                                    dateFormat="MMMM d, yyyy"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="priority"
                                                    className="block text-gray-700 font-bold mb-2"
                                                >
                                                    Priority
              </label>
                                                <select
                                                    id="priority"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={priority}
                                                    onChange={(e) => setPriority(e.target.value)}
                                                >
                                                    <option value="1">Priority 1</option>
                                                    <option value="2">Priority 2</option>
                                                    <option value="3">Priority 3</option>
                                                    <option value="4">Priority 4</option>
                                                    <option value="5">Priority 5</option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="project"
                                                    className="block text-gray-700 font-bold mb-2"
                                                >
                                                    Project
              </label>
                                                <select
                                                    id="project"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={project}
                                                    onChange={(e) => setProject(e.target.value)}
                                                >
                                                    <option value="">Select project</option>
                                                    <option value="Project A">Project A</option>
                                                    <option value="Project B">Project B</option>
                                                    <option value="Project C">Project C</option>
                                                </select>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    type="submit"
                                                >
                                                    Create Task
              </button>
                                                <button
                                                    className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    onClick={() => props.setShowModal(false)}
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

            </div>

        </>
    )
}
