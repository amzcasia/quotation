import { getMyIndex } from "../helpers/globalFunctions"
import {useEffect, useRef} from "react"


export default function TextArea({entryId, dayIndex, entryIndex, inputType, days, setDays, disabled}){
    const textareaRef = useRef(null)

    const autoResize = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'
        let offset = 0
        if(textarea.scrollHeight < 200){
            offset = 0
        }
        else if (textarea.scrollHeight >= 200 && textarea.scrollHeight < 550){
            offset = 24;
        }else{
            offset = 48;
        }
        textarea.style.height = textarea.scrollHeight + offset + 'px'
    }

    const handleChange = (e) =>{
        setDays( (allDays)=>{
            const currentDays =  [...allDays]
            currentDays[dayIndex].dayEntries[entryIndex][inputType] = e.target.value
            return [...currentDays]
        })
    }

    useEffect(()=>{
        autoResize();
    },[])
    
    return (
        <textarea 
            className='px-1 overflow-hidden border border-gray-400 rounded-md resize-none print:border-none print:overflow-hidden disabled:bg-primary disabled:bb' 
            value={days[dayIndex].dayEntries[entryIndex][inputType]} 
            onChange={handleChange} 
            disabled={disabled} 
            onInput={autoResize} 
            rows={1}
            ref={textareaRef}
            >
            
        </textarea>
    )
}