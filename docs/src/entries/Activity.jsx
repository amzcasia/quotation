import { useState } from 'react'

export default function Activity(props){

    const [textValue, setTextValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

// ...

<textarea value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>


    function handleSubmit(event){
        event.preventDefault()
    }

    function handleRemove(){
        // console.log("remove test")
        props.passedFunc(props.myId)
    }

    const toggleDisabled = () => {
        console.log("toggle disability",isDisabled)
        setIsDisabled((prevIsDisabled) => !prevIsDisabled);
      };
    
      const autoResize = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
      };

    return (
        <form onSubmit={handleSubmit} className='grid grid-cols-12 gap-y-1 gap-x-1'>
            <label className='col-span-12'>Activity Entry [{props.myId}]</label>
            <label className='flex flex-col gap-y-1'>
                <span>Time:</span>
                <input className="w-full" type="time" disabled={isDisabled} />
            </label>
            <div className='flex flex-col col-span-3 gap-y-1'>  
                <label className='grid gap-y-1'>
                    <span>Activity:</span>
                    <textarea className='overflow-auto resize-none disabled:bg-primary' value={textValue} onChange={(e) => setTextValue(e.target.value)} disabled={isDisabled} onInput={autoResize} rows={3}></textarea>
                </label>
                <label className='grid gap-y-1'>
                    <span>Notes:</span>
                    <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>

                    
                </label>
            </div>

            <label className='grid content-start w-full col-span-2 gap-y-1'>
                <span>Exclusions:</span>
                <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} disabled={isDisabled}></textarea>
            </label>                
            
            
            <label className='grid content-start gap-y-1'>
                <span>Price Per Head</span>
                <input className='w-full number-input' type="number" />
            </label>
            <label className='grid content-start gap-y-1'>
                <span>Costing</span>
                <input className='w-full number-input' type="number" />
            </label>

            <label className='grid content-start col-span-3 gap-y-1'>
                <span>Notes:</span>
                <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>
            </label>
            
            <div className='grid gap-1'>
                <button type="button" className='bg-green-500 px-2 py-[2px] block' onClick={toggleDisabled}>Edit</button>
                <button className='bg-green-500 px-2 py-[2px] block' onClick={handleRemove} type="button">Remove</button>
                <button type="button" className='bg-green-500 px-2 py-[2px] block'>Up</button>
                
                <button type="button" className='bg-green-500 px-2 py-[2px] block'>Down</button>
            </div>
        </form>
    )
}