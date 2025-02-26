import React from 'react'

const ReusableTitle = ({ page, title, description }) => {
    return (
        <div className='w-full border-t border-gray-600'>
            <div className='w-11/12 mx-auto my-12 foros-medium'>
                <div className='flex items-center gap-2'>
                    <div className='h-0.5 w-12 bg-primary'></div>
                    <h3 className=''>{ page }</h3>
                </div>
                <h2 className='text-5xl ackeler-a'>
                    { title }
                </h2>
                <p className='mt-5'>
                    { description }
                </p>
            </div>
        </div>
    )
}

export default ReusableTitle
