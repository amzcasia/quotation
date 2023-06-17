import { useState } from 'react'
import Init from './Init.jsx'
import Activity from './entries/Activity.jsx'
import Accommodation from './entries/Accommodation.jsx'
import Costing from './entries/Costing.jsx'
import ImageEntry from './entries/ImageEntry.jsx'
import Transpo from './entries/Transpo.jsx'

export default function App() {
  const [entries, setEntries] = useState([<Activity myId={-1}/>])
  const zzz = "Transpo"

  function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
  
    return id;
  }

  function removeEntry(target){
    // console.log(`Remove ${target}`)
    // setEntries( allEntries =>{

    // })
  }

  function addEntry(){
    setEntries( (allEntries) => {
      const newEntry = <Activity passedFunc={removeEntry} myId={generateRandomId()}/>

      return(
        [...allEntries, newEntry]
      )
    })
  }



  return (
    <>
      <Init />
      <div className='grid gap-y-2'>
      {entries.map( (component, index) => (
        <div key={index} >{component}</div>
      ) )}
      </div>
      {/* <Accommodation />
      <Costing />
      <ImageEntry />
      <Transpo /> */}
      {/* < /> */}
      
      <div className='border border-black flex justify-center p-4 gap-x-2'>
        <button className='bg-green-500 px-4 py-2 rounded-full' onClick={addEntry}>Add New</button>
        <button className='bg-amber-500 px-4 py-2 rounded-full'>End Day</button>
        <button className='bg-blue-500 px-4 py-2 rounded-full'>Print Preview</button>
        <button className='bg-green-500 px-4 py-2 rounded-full'>Save</button>
      </div>
   
    </>
  )
}
