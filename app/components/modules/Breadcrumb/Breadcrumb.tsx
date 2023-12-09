import React from 'react'

export default function Breadcrumb({title , route} : {title : string , route : string}) {
    return (
        <div className='bg-second px-8 py-4 text-white mb-12'>
            <div className='text-xs mb-1'>
                <span>Home / </span>
                <span>{route}</span>
            </div>
            <div>{title}</div>
        </div>
    )
}
