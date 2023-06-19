import { useState } from 'react'

export default function Activity(props){

    const [textValue, setTextValue] = useState('');

// ...

<textarea value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>


    function handleSubmit(event){
        event.preventDefault()
    }

    function handleRemove(){
        // console.log("remove test")
        props.passedFunc(props.myId)
    }

    return (
        <form onSubmit={handleSubmit} className='grid bb gap-y-1'>
            <label>Activity Entry</label>
            <div className='grid grid-cols-12 gap-x-1'>
                <label className='flex flex-col gap-y-1'>
                    <span>Time:</span>
                    <input className="w-full" type="text" />
                </label>
                <div className='flex flex-col col-span-3 gap-y-1'>  
                    <label className='grid gap-y-1'>
                        <span>Activity:</span>
                        <textarea row="2" value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>
                    </label>
                    <label className='grid gap-y-1'>
                        <span>Notes:</span>
                        <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>

                        
                    </label>
                </div>
   
                <label className='grid content-start w-full col-span-2 gap-y-1'>
                    <span>Exclusions:</span>
                    <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>
                </label>                
                
                <label className='grid content-start gap-y-1'>
                    <span>Price Per Head</span>
                    <input className='w-full' type="text" />
                </label>
                <label className='grid content-start gap-y-1'>
                    <span>Costing</span>
                    <input className='w-full' type="text" />
                </label>

                <label className='grid content-start col-span-3 gap-y-1'>
                    <span>Notes:</span>
                    <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>
                </label>
                
                <div className='grid gap-1'>
                    <button type="button" className='bg-green-500 px-2 py-[2px] block'>Edit</button>
                    <button className='bg-green-500 px-2 py-[2px] block' onClick={handleRemove} type="button">Remove {props.myId}</button>
                    <button type="button" className='bg-green-500 px-2 py-[2px] block'>Up</button>
                    
                    <button type="button" className='bg-green-500 px-2 py-[2px] block'>Down</button>
                </div>
            </div>
        </form>
    )
}