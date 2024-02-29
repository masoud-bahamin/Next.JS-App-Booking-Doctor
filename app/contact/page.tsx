import React from 'react'
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'

function Contact() {
    return (
        <div className='font-Work_Sans'>
            <Breadcrumb title='CONTACT' route='contact' />
            <div className='container px-4 md:px-0 py-6 lg:py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <p className='mb-4 lg:mb-8 text-prim'>Get in touch</p>
                        <h2 className='text-2xl lg:text-4xl font-Barlow font-medium lg:font-semibold mb-6'>Have Any Question?</h2>
                        <div className='flex gap-6 items-center border p-5 rounded-md mb-5'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-prim">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <div>
                                <p className='mb-0 text-paragraf text-sm lg:text-base'>Address</p>
                                <p className='text-lg lg:text-xl'>8432 Mante Highway, Aminaport, USA</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center border p-5 rounded-md mb-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-prim">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <div>
                                <p className='mb-0 text-paragraf text-sm lg:text-base'>Email Address</p>
                                <p className='text-lg lg:text-xl'>Bahaminwp@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center border p-5 rounded-md mb-5'>
                            <svg className='text-prim'
                                width="32px" height="32px" stroke-width="1.1" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                                <path d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z"
                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                            <div>
                                <p className='mb-0 text-paragraf text-sm lg:text-base'>Phone Number</p>
                                <p className='text-lg lg:text-xl'>+1 450 785 7452</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="">
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                                <div className="mb-5">
                                    <label htmlFor="Name" className="block mb-2 text-sm lg:text-base text-gray-900 dark:text-white">Name</label>
                                    <input type="Name" id="Name"
                                        className="border border-gray-300 text-gray-900 text-sm lg:text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Your Name" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm lg:text-base text-gray-900 dark:text-white">Email</label>
                                    <input type="email" id="email" className="border border-gray-300 text-gray-900 text-sm lg:text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Your Name" required />
                                </div>

                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                                <div className="mb-5">
                                    <label htmlFor="Phone" className="block mb-2 text-sm lg:text-base text-gray-900 dark:text-white">Phone</label>
                                    <input type="text" id="Phone"
                                        placeholder="Enter Phone Number"
                                        className="border border-gray-300 text-gray-900 text-sm lg:text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="Services" className="block mb-2 text-sm lg:text-base text-gray-900 dark:text-white">Services</label>
                                    <input type="text" id="Services"
                                        placeholder="Enter Services"
                                        className="border border-gray-300 text-gray-900 text-sm lg:text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className="mb-8">
                                <label htmlFor="Services" className="block mb-2 text-sm lg:text-base text-gray-900 dark:text-white">Message</label>
                                <textarea
                                    placeholder="Enter your comments"
                                    className="border border-gray-300 text-gray-900 text-sm lg:text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <button type="submit" className="text-white bg-prim hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-3base rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact