/*
                toggleDisabled={toggleDisabled}
                days={days}
                setDays={setDays}
                dayIndex={dayIndex}
                entryIndex={entryIndex}
*/


export default function ButtonGroup({toggleDisabled, days, setDays, dayIndex, entryIndex }){
    function handleRemove(){
        let counter = 1;
        setDays( allDays =>{
            if (counter!==1) return [...allDays];
            const currentDays = [...allDays]
            // for (let i = 0; i < currentDays.length; i++){
            //     if(currentEntries[i].id === myId){
            //       currentEntries.splice(i,1)
            //     }
            // }
            counter++
            currentDays[dayIndex].dayEntries.splice(entryIndex,1)
            return([...currentDays])
        })
    }

    function handleUp(){
        let counter=1
        setDays( allDays => {

            if(entryIndex <= 0 || counter !== 1) return [...allDays]
            counter++
            const currentDays = [...allDays]
            const removedEntry = currentDays[dayIndex].dayEntries.splice(entryIndex,1)
            currentDays[dayIndex].dayEntries.splice(entryIndex-1,0,removedEntry[0])
            return [...currentDays]
        })
    }

    function handleDown(){
        let counter=1
        setDays( allDays => {
            if(entryIndex >= allDays[dayIndex].dayEntries.length-1 || counter !== 1) return [...allDays]
            counter++
            const currentDays = [...allDays]
            const removedEntry = currentDays[dayIndex].dayEntries.splice(entryIndex,1)
            currentDays[dayIndex].dayEntries.splice(entryIndex+1,0,removedEntry[0])
            return [...currentDays]
        })
    }

    return(
        <div className='flex flex-col gap-1'>
            <button type="button" className='block px-2 py-2 bg-orange-400' onClick={toggleDisabled}>Edit</button>
            <button className='block px-2 py-2 bg-red-400' onClick={handleRemove} type="button">Remove</button>
            <button onClick={handleUp} type="button" 
                className='block px-2 py-2 bg-blue-400'>
                    Up
            </button>
           <button onClick={handleDown} type="button" className='block px-2 py-2 bg-blue-400'>Down</button>
        </div>
    )
}