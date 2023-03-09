import React from 'react'
import { useState } from 'react';
import Datepicker from "tailwind-datepicker-react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Label, Select } from 'flowbite-react';






export default function TodayTask() {
    const [show, setShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState(Date)



    const options = {
        title: "Due date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        maxDate: new Date("2030-01-01"),
        minDate: new Date("2023-01-01"),
        theme: {
            background: "bg-slate-0",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "",
            input: "border-none",
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
                <div className="p-4 border-2  border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div>
                        <form className="p-4 bg-gray-50 rounded-lg" action="">
                            <div className="relative">
                                <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Create a new Todo" />
                                <div class="relative max-w-sm">
                                    <div>
                                        <Datepicker className="cursor-pointer border-none mb-3" options={options} onChange={handleChange} show={show} setShow={handleClose} />
                                    </div>
                                    <div className="mt-3" id="select">
                                        <Select className="border-none" id="Priority">
                                            <option>
                                                Priority 1
                                            </option>
                                            <option>
                                                Priority 2
                                            </option>
                                            <option>
                                                Priority 3
                                            </option>
                                            <option>
                                                Priority 4
                                            </option>
                                            <option>
                                                Priority 5
                                            </option>
                                        </Select>
                                    </div>
                                </div>                                {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
