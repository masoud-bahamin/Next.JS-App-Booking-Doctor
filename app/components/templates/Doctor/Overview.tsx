import React from 'react'

export default function Overview({username} : {username : string}) {
    return (
        <div className='p-8'>
            <h3 className='mb-8 font-semibold'>About “{username}”</h3>
            <p className='text-gray-500 mb-3 text-sm'>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quisquam, eius nobis odit fuga in tempora nam,
                nesciunt placeat temporibus optio voluptate tempore nostrum,
                enim earum sed minus ipsam cumque praesentium!
            </p>
            <p className=' font-medium'>Languages</p>
            <p className='text-sm text-prim'>English</p>
            <p className='text-sm text-prim'>French</p>
            <p className='text-sm text-prim'>German</p>
        </div>
    )
}
