import React, { useState, createContext, useEffect } from "react";
import { randomId } from "../helpers/globalFunctions"; //globalFunctions'
import DayComponent from "../components/DayComponent";
import QuotationHeader from "../components/QuotationHeader";
import ButtonGroup from "../components/ButtonGroup";
import sampleData from "../helpers/sampleData.js"

export const EntryFocusContext = createContext();

export default function Quotation() {
  const [days, setDays] = useState(() => {
    return [{
        dayId: randomId(),
        dayEntries: [{
            entryId: randomId(),
            type: "",
            time: "",
            activity: "",
            notes1: "",
            exclusions: "",
            perHead: 0,
            costing: 0,
            notes2: "",
        },
        ],
      },
    ];
  });

  const [focusedEntry, setFocusedEntry] = useState({})
  const [buttonY, setButtonY] = useState({btnYPos:0, dayIndex:0, entryIndex:0})

  function handleChangeFocus(entryId,event,dayIndex,entryIndex){
    const Y_OFFSET = 45
    const btnYPos = event.target.getBoundingClientRect().top - Y_OFFSET
    // console.log(btnYPos)
    setButtonY({btnYPos:btnYPos, dayIndex:dayIndex, entryIndex:entryIndex})
    setFocusedEntry ( (prevFocusedEntries) => {

        const currentFocusedEntries = {...prevFocusedEntries}
        for (let j = 0; j < days.length; j++ ){
          for(let i = 0; i < days[j].dayEntries.length; i++){
              currentFocusedEntries[days[j].dayEntries[i].entryId] = false
          }
        }
        currentFocusedEntries[entryId] = true
        return currentFocusedEntries
    })
  }

  function addDay() {
    setDays((allDays) => {
      return [
        ...allDays,
        {
          dayId: randomId(),
          dayEntries: [
            {
              entryId: randomId(),
              type: "",
              time: "",
              activity: "",
              notes1: "",
              exclusions: "",
              perHead: 0,
              costing: 0,
              notes2: "",
            },
          ],
        },
      ];
    });
  }

  function addEntryToEnd() {
    let counter = 0;
    setDays((allDays) => {
      if (counter != 0) return [...allDays]
      counter++;
      const dayIndex = allDays.length - 1;
      // console.log(dayIndex);
      const blankEntry = {
        entryId: randomId(),
        type: "",
        time: "",
        activity: "",
        notes1: "",
        exclusions: "",
        perHead: 0,
        costing: 0,
        notes2: "",
      };
      const currentDays = [...allDays];
      currentDays[dayIndex].dayEntries.push(blankEntry);
      return [...currentDays];
    });
  }

  const daysMap = days.map((day, index) => {
    return (
      <DayComponent
        key={day.dayId}
        dayIndex={index}
        days={days}
        dayId={day.dayId}
        setDays={setDays}
      />
    );
  });

  function getSampleData(){
    console.log(sampleData)
  }

  useEffect( ()=>{
    setDays(sampleData)
  },[])

  return (
    <> 
      <QuotationHeader />

      <EntryFocusContext.Provider value={{focusedEntry,setFocusedEntry,handleChangeFocus,days,setDays,buttonY,setButtonY}}>
        <div className="grid grid-cols-12">
          <div className="col-span-11 ">{daysMap}</div>

          <div className="col-span-1">
            <div className="w-full duration-300 ease-in-out print:hidden" style={{ transform: `translateY(${buttonY.btnYPos}px)` }}>
              <ButtonGroup />
            </div>
          </div>
        </div>
      </EntryFocusContext.Provider>

      <div className="flex justify-center p-4 mt-5 border border-black gap-x-2 print:hidden">
        <button
          className="px-4 py-2 bg-green-400 border border-black rounded-full"
          onClick={addEntryToEnd}
        >
          Add Entry
        </button>
        <button
          className="px-4 py-2 bg-orange-300 border border-black rounded-full"
          onClick={addDay}
        >
          Add Day
        </button>
        <button className="px-4 py-2 border border-black rounded-full cursor-default "
          onClick={(event)=>{
            console.log(event.target)
          }}  
        >
          End Day
        </button>
        <button
          className="px-4 py-2 bg-blue-500 border border-black rounded-full"
          onClick={() => {
            console.log(days);
          }}
        >
          Print Preview
        </button>
        <button
          className="px-4 py-2 border border-black rounded-full cursor-default"
          onClick={() => console.log(days)}
        >
          Save
        </button>
        <button
          className="px-4 py-2 bg-yellow-400 border border-black rounded-full"
          onClick={getSampleData}
        >
          Test
        </button>
      </div>
    </>
  );
}
