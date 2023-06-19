import { useState } from 'react'
import Init from './Init.jsx'
import Activity from './entries/Activity.jsx'
import Accommodation from './entries/Accommodation.jsx'
import Costing from './entries/Costing.jsx'
import ImageEntry from './entries/ImageEntry.jsx'
import Transpo from './entries/Transpo.jsx'

export default function App() {

  const [entries, setEntries] = useState(()=>{
    const newEntry = <Activity passedFunc={removeEntry} myId={generateRandomId()}/>
      return(
        [newEntry]
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


  function removeEntry(target){
    console.log(`Remove ${target}`)
    // console.log(`Remove test(App)`)
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
      <div className='grid gap-y-1'>
      {entries.map( (component, index) => (
        <div key={index} >{component}</div>
      ) )}
      {/*
        entries.map( (component, myID)=>{
          <div key={myID}>{id}
          </div>
        } )*/
      }
      </div>
      {/* <Accommodation />
      <Costing />
      <ImageEntry />
      <Transpo /> */}
      {/* < /> */}
      
      <div className='flex justify-center p-4 border border-black gap-x-2'>
        <button className='px-4 py-2 bg-green-500 rounded-full' onClick={addEntry}>Add New</button>
        <button className='px-4 py-2 rounded-full bg-amber-500'>End Day</button>
        <button className='px-4 py-2 bg-blue-500 rounded-full'>Print Preview</button>
        <button className='px-4 py-2 bg-green-500 rounded-full'>Save</button>
      </div>
   
    </>
  )
}

