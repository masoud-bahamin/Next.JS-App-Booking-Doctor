import React from 'react'

export default function SearchBox() {
  return (
    <div className='bg-white rounded-lg p-4 text-xs flex justify-between items-center z-10'>
        <select className='text-gray-500 outline-none hidden md:inline-block'>
            <option value={"-1"}>Select a location</option>
            <option value={"-1"}>England</option>
            <option value={"-1"}>Franc</option>
            <option value={"-1"}>Germany</option>
        </select>
        <div>
            <input className='border-0 outline-none'
            type='text' placeholder='Search doctors, clinics, etc' />
        </div>
        <button className='btn'>Search</button>
    </div>
  )
}
