import React, { useState, useContext, createContext } from 'react'
import { randomId } from '../helpers/globalFunctions'
import Activity from './Activity'

// export const EntryFocusContext = createContext();

export default function DayComponent ({dayIndex, days, dayId, setDays}){
    
    // const [focusedEntry, setFocusedEntry] = useState({})

    // function handleChangeFocus(entryId){
    //     setFocusedEntry ( (prevFocusedEntries) => {
    //         const currentFocusedEntries = {...prevFocusedEntries}
    //         for(let i = 0; i < days[dayIndex].dayEntries.length; i++){
    //             currentFocusedEntries[days[dayIndex].dayEntries[i].entryId] = false
    //         }
    //         currentFocusedEntries[entryId] = true
    //         return currentFocusedEntries
    //     })
    // }
    
    function removeDay (){
        setDays( allDays =>{
            const currentDays = [...allDays]
            currentDays.splice(dayIndex,1)
            return(
                [...currentDays]
            )
        })
    }
    
    function addEntry() {
        const blankEntry = {
            entryId: randomId(),
            time: "",
            activity: "",
            notes1: "",
            exclusions: "",
            perHead: 0,
            costing: 0,
            notes2: "",
        };
        let counter=1;
        setDays( allDays => {
            if (counter!==1) return [...allDays];
            const currentDays = [...allDays];
            currentDays[dayIndex].dayEntries.push(blankEntry);
            counter++
            return ([...currentDays]);
        });
    }
      
    const entriesMap = days[dayIndex].dayEntries.map( (entry,index)=>{
        return(
            <Activity 
                type={'activity'}
                key={entry.entryId}
                dayIndex={dayIndex}
                entryIndex={index}
                entryId = {entry.entryId}
                time={entry.time}
                activity={entry.activity}
                notes1={entry.notes1}
                exclusions={entry.exclusions}
                perHead={entry.perHead}
                costing={entry.costing}
                notes2={entry.notes2}
                days={days}
                setDays={setDays}
            />
        )
    })
    
    return(
        <div className="grid gap-y-1">
            <div className='grid content-center grid-cols-11 py-1 gap-x-2 px-[1%]'>
                <span className='text-lg font-semibold'>Day {dayIndex+1}</span>
                <span className='col-span-2 text-lg print:col-span-3'>June 19, 2023</span>
                <span className='text-lg'>Monday</span>
                {/* <span className='col-span-7'></span> */}

                <div className="grid grid-cols-2 col-span-2 print:hidden gap-x-2">
                    <button onClick={addEntry} className='bg-green-400' type="button">Add Entry</button>
                    <button onClick={removeDay} className='bg-red-400' type="button">Remove Day</button>
                </div>
                { (dayIndex == 0) && <span className="print:hidden">perHead</span>}
                { (dayIndex == 0) && <span className="print:hidden">Costing</span>}
                { (dayIndex == 0) && <span className="print:hidden">Notes</span>}
            </div>
            <div>
                {/* <EntryFocusContext.Provider value={{focusedEntry,setFocusedEntry,handleChangeFocus}}> */}
                {entriesMap}
                {/* </EntryFocusContext.Provider> */}
            </div>
        </div>
    )
}
