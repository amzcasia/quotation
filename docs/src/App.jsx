import { useState } from 'react'
import Init from './Init.jsx'
import Activity from './entries/Activity.jsx'
import Accommodation from './entries/Accommodation.jsx'
import Costing from './entries/Costing.jsx'
import ImageEntry from './entries/ImageEntry.jsx'
import Transpo from './entries/Transpo.jsx'



export default function App() {

  // const entryData = {
  //   id:generateRandomId(),
  //   time:"",
  //   activity:"",
  //   note1:"",
  //   exclusions:"",
  //   perHead:0,
  //   costing:0,
  //   note2:""
  // }

  const [entries, setEntries] = useState(()=>{
    // const newEntry = <Activity passedFunc={removeEntry} myId={generateRandomId()}/>
      return(
        [{
          id:generateRandomId(),
          time:"",
          activity:"",
          notes1:"",
          exclusions:"",
          perHead:0,
          costing:0,
          notes2:""
        }]
      )
  })

  const [entries2,setEntries2] = useState(()=>{
    return (
      [{
        id:generateRandomId(),
        time:"",
        activity:"",
        notes1:"",
        exclusions:"",
        perHead:0,
        costing:0,
        note2:""
      }]
    )
  })
  // const [entries, setEntries] = useState(() => {
  //   const myId = generateRandomId();
  //   return (
  //     {
  //       id: <Activity passedFunc={removeEntry} myId={myId}/>
  //     }
  //   )
  // })

  // [
  //   {id},
  //   {}
  // ]

  function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
  
    return id;
  }



  function addEntry(){
    setEntries( (allEntries) => {
      return(
        [...allEntries, 
        {
          id:generateRandomId(),
          time:"",
          activity:"",
          notes1:"",
          exclusions:"",
          perHead:0,
          costing:0,
          notes2:""
        }]
      )
    })
  }

  const entriesMap = entries.map( (allEntries)=>{
    return(
      <Activity  
        key={allEntries.id} 
        entries = {entries}
        setEntries={setEntries}
        myId={allEntries.id}
      />
    )
  })

  return (
    <>
      <Init />

      <div className='grid gap-y-1'>
        {entriesMap}
      </div>

      <div className='flex justify-center p-4 border border-black gap-x-2'>
        <button className='px-4 py-2 bg-green-500 rounded-full' onClick={addEntry}>Add New</button>
        <button className='px-4 py-2 border border-black rounded-full cursor-default '>End Day</button>
        <button className='px-4 py-2 bg-blue-500 rounded-full' onClick={()=>{
          console.log(entries)
        }}>Print Preview</button>
        <button className='px-4 py-2 border border-black rounded-full cursor-default'>Save</button>
      </div>
   
    </>
  )
}

