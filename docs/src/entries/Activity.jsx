import { useState } from 'react'

export default function Activity(props){

    function handleSubmit(event){
        event.preventDefault()

    }
    function handleRemove(event){
        console.log(props.myId)
    }

    return (
        <form onSubmit={handleSubmit} className='py-5 grid gap-y-1 border border-black'>
            <label>Activity Entry</label>
            <div className='flex gap-x-1'>
                <label className='grid'>
                    Start:
                    <input type="text" />
                </label>
                <label className='grid gap-y-1'>
                    <span>Activity:</span>
                    <input className="" type="text" />
                    <input className='' type="text" />
                </label>
                <label className='grid'>
                    Notes:
                    <input type="text" />
                </label>
                <div className='flex gap-x-1'>
                    <label className='grid'>Price Per Head
                        <input type="text" />
                    </label>
                    <label className='grid'>
                        Costing
                        <input type="text" />
                    </label>
                    <label className='grid'>
                        Notes:
                        <input className='bg-[999999]' type="text" />
                    </label>
                </div>
                <div className='grid grid-cols-2 gap-1'>
                    <button type="button" className='bg-green-500 px-2 py-[2px] block'>Edit</button>
                    <button type="button" className='bg-green-500 px-2 py-[2px] block'>Go UP</button>
                    <button type="button" className='bg-green-500 px-2 py-[2px] block'>Remove {props.myId}</button>
                    <button type="button" className='bg-green-500 px-2 py-[2px] block'>Go Down</button>
                </div>
            </div>
        </form>
    )
}