import React, { useState } from "react";
import { randomId } from "../helpers/globalFunctions"; //globalFunctions'
import DayComponent from "../components/DayComponent";

export default function Home() {
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

  return (
    <>
      {daysMap}

      <div className="flex justify-center p-4 border border-black gap-x-2 print:hidden">
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
        <button className="px-4 py-2 border border-black rounded-full cursor-default ">
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
      </div>
    </>
  );
}
