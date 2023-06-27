import { getMyIndex } from "../helpers/globalFunctions"

export default function TextArea({entryId, dayIndex, entryIndex, inputType, days, setDays, disabled}){
    const autoResize = (event) => {
        event.target.style.height = 'auto'
        console.log(event.target.scrollHeight)
        let offset = 0
        if(event.target.scrollHeight < 200){
            offset = 0
        }
        else if (event.target.scrollHeight >= 200 && event.target.scrollHeight < 550){
            offset = 24;
        }else{
            offset = 48;
        }
        event.target.style.height = event.target.scrollHeight + offset + 'px'
    }

    const handleChange = (e) =>{
        setDays( (allDays)=>{
            const currentDays =  [...allDays]
            currentDays[dayIndex].dayEntries[entryIndex][inputType] = e.target.value
            return [...currentDays]
        })
    }
    
    return (
        <textarea 
            className='px-1 overflow-hidden resize-none print:overflow-hidden disabled:bg-primary disabled:bb' 
            value={days[dayIndex].dayEntries[entryIndex][inputType]} 
            onChange={handleChange} 
            disabled={disabled} 
            onInput={autoResize} 
            rows={1}>
        </textarea>
    )
}