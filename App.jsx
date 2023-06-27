import { useState } from 'react'
import {randomId} from './helpers/globalFunctions' //globalFunctions'
import Header from './components/Header'
import Init from './components/Init'
import DayComponent from './components/DayComponent'
import Activity from './components/Activity.jsx'
import Accommodation from './components/Accommodation.jsx'
import Costing from './components/Costing.jsx'
import ImageEntry from './components/ImageEntry.jsx'
import Transpo from './components/Transpo.jsx'



export default function App() {
  const [days,setDays] = useState( ()=>{
    return(
      [{
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
    )
  })

  function addDay(){
    setDays((allDays)=>{
      return (
        [...allDays,{
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
      )
    })
  }

  function addEntryToEnd() {
    const dayIndex=days.length-1
    console.log(dayIndex)
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
    

    const daysMap = days.map( (day,index) => {
      return(
        <DayComponent 
          key={day.dayId}
          dayIndex={index}
          days={days}
          dayId={day.dayId}
          setDays={setDays}
        />
      )
    })
  

  return (
    <>
      {daysMap}

      <div className='flex justify-center p-4 border border-black gap-x-2 print:hidden'>
        <button className='px-4 py-2 bg-green-400 border border-black rounded-full' onClick={addEntryToEnd}>Add Entry</button>
        <button className='px-4 py-2 bg-orange-300 border border-black rounded-full' onClick={addDay}>Add Day</button>
        <button className='px-4 py-2 border border-black rounded-full cursor-default '>End Day</button>
        <button className='px-4 py-2 bg-blue-500 border border-black rounded-full' 
        onClick={()=>{console.log(days)}}>Print Preview</button>
        <button className='px-4 py-2 border border-black rounded-full cursor-default' onClick={()=>console.log(days)}>Save</button>
      </div>
   
    </>
  )
}
