import React, { useState } from 'react'

export default function DayComponent ({children}){
    return(
        <div className="grid gap-y-1">
            <div className='grid grid-cols-12 gap-x-2'>
                <span className='text-lg font-semibold'>Day 1</span>
                <span className='col-span-2 text-lg'>June 19, 2023</span>
                <span className='text-lg'>Monday</span>
            </div>
            {children}
        </div>
    )
}