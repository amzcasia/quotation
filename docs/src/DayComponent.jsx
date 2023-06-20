import React, { useState } from 'react'
import { randomId } from './globalFunctions'
import Activity from './entries/Activity'

export default function DayComponent ({dayIndex, days, dayId, setDays}){

    /*
    key={day.dayId}
    day={day}
    dayId={day.dayId}
    setDays={setDays}
    entries={day.dayEntries}
    setEntries={setEntries}

    key={entry.entryId}
    time={entry.time}
    activity={entry.activity}
    notes1={entry.notes1}
    exclusions={entry.exclusions}
    perHead={entry.perHead}
    costing={entry.costing}
    notes2={entry.notes2}
    days={days}
    setDays={setDays}

    days = [{
        dayId:randomId(),
        dayEntries: [{
            entryId:randomId(),
            time:"",
            activity:"",
            notes1:"",
            exclusions:"",
            perHead:0,
            costing:0,
            notes2:""
        }]
    }]

    */

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
      

    // const addEntry = () => {
    //     const newEntry = {
    //       entryId: randomId(),
    //       time: "",
    //       activity: "",
    //       notes1: "",
    //       exclusions: "",
    //       perHead: 0,
    //       costing: 0,
    //       notes2: "",
    //     };
      
    //     setDays((prevDays) => {
    //       const updatedDays = [...prevDays];
    //       updatedDays[0].dayEntries.push(newEntry);
    //       return updatedDays;
    //     });
    //   };
      
    // const myIndex = getMyIndex(days,'dayId',dayId)
    const entriesMap = days[dayIndex].dayEntries.map( (entry,index)=>{
        return(
            <Activity 
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
            <div className='grid content-center grid-cols-12 py-1 gap-x-2'>
                <span className='text-lg font-semibold'>Day {dayIndex+1}</span>
                <span className='col-span-2 text-lg'>June 19, 2023</span>
                <span className='text-lg'>Monday</span>
                {/* <span className='col-span-7'></span> */}
                <button onClick={addEntry} className='bg-green-400' type="button">Add Entry</button>
                <button onClick={removeDay} className='bg-red-400' type="button">Remove Day</button>
            </div>
            <div >
                {entriesMap}
            </div>


            
        </div>
    )
}