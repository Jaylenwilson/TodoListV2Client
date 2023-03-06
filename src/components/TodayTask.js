import React from 'react'
import { useState } from 'react';
import Datepicker from "tailwind-datepicker-react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'






export default function TodayTask() {
    const [show, setShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState(Date)



    const options = {
        title: "Due date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "bg-slate-200",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "",
            input: "",
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




    const handleChange = (selectedDate) => {
        setSelectedDate(selectedDate)
    }
    const handleClose = () => {
        setShow(!show)
    }
    return (
        <>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div>
                        <form action="">
                            <div className="relative">
                                <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Create a new Todo" />
                                <div class="relative max-w-sm">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <Datepicker className="cursor-pointer" options={options} onChange={handleChange} show={show} setShow={handleClose} />
                                </div>                                {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
