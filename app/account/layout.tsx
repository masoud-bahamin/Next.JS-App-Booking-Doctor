import React, { ReactNode } from 'react'
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import Aside from '../components/templates/Account/Aside'

function layout({ children }: { children: ReactNode }) {
    return (
        <div className='bg-slate-100'>
            <Breadcrumb title='Account' route='Account' />
            <div className='container mx-auto px-4 md:px-0 py-12 flex flex-wrap md:flex-nowrap gap-8'>
                <div className='bg-white border w-full lg:w-1/4 h-fit'>
                    <Aside />
                </div>
                <div className='bg-white w-full lg:w-3/4 p-8'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout