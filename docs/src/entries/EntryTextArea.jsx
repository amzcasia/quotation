import { getMyIndex } from "../globalFunctions"

export default function TextArea({entryId, dayIndex, entryIndex, inputType, days, setDays, disabled}){
    const autoResize = (event) => {
        event.target.style.height = 'auto'
        event.target.style.height = event.target.scrollHeight + 'px'
    }

    const handleChange = (e) =>{
        // setEntries( (allEntries) =>{
        //     const currentEntries = [...allEntries]
        //     currentEntries[getMyIndex(entryId)][inputType] = e.target.value
        //     return ([...currentEntries])
        // })
        setDays( (allDays)=>{
            const currentDays =  [...allDays]
            currentDays[dayIndex].dayEntries[entryIndex][inputType] = e.target.value
            return [...currentDays]
        })
    }
    
    return (
        <textarea 
            className='px-1 overflow-auto resize-none disabled:bg-primary disabled:bb' 
            value={days[dayIndex].dayEntries[entryIndex][inputType]} 
            onChange={handleChange} 
            disabled={disabled} 
            onInput={autoResize} 
            rows={3}>
        </textarea>
    )
}