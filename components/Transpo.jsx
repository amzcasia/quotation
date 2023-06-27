import { useState } from 'react'

export default function Transpo(){
    return (
        <form className='py-5 grid gap-y-2 border border-black'>
            <label>Transpo Entry</label>
            <div className='flex gap-x-2'>
                <label className='grid'>
                    Start:
                    <input type="text" />
                </label>
                <label className='grid'>
                    <span>Activity:</span>
                    <input type="text" />
                    <input className='' type="text" />
                </label>
                <label className='grid'>
                    Notes:
                    <input type="text" />
                </label>
                <div className='flex gap-x-2'>
                    <label className='grid'>Price Per Head
                        <input type="text" />
                    </label>
                    <label className='grid'>
                        Costing
                        <input type="text" />
                    </label>
                    <label className='grid'>
                        Notes:
                        <input type="text" />
                    </label>
                </div>
            </div>
        </form>
    )
}