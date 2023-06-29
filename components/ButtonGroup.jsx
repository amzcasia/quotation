import { useContext } from 'react';
import {EntryFocusContext} from '../pages/Quotation'
// export default function ButtonGroup({toggleDisabled, days, setDays, dayIndex, entryIndex}){
export default function ButtonGroup(){
    const {days, setDays, buttonY, handleChangeFocus} = useContext(EntryFocusContext)

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

            // .target.getBoundingClientRect().top
            function getBoundingClientRect(){
                return ({top:86})
            }
            const fakeEvent = {target:{getBoundingClientRect}}
            // console.log('fakeEvent')
            // console.log(fakeEvent.target.getBoundingClientRect().top)
            handleChangeFocus(currentDays[0].dayEntries[0].entryId, fakeEvent, 0, 0)
            counter++
            currentDays[buttonY.dayIndex].dayEntries.splice(buttonY.entryIndex,1)
            return([...currentDays])
        })
        

    }

    function handleUp(){
        let counter=1
        setDays( allDays => {

            if(buttonY.entryIndex <= 0 || counter !== 1) return [...allDays]
            counter++
            const currentDays = [...allDays]
            const removedEntry = currentDays[buttonY.dayIndex].dayEntries.splice(buttonY.entryIndex,1)
            currentDays[buttonY.dayIndex].dayEntries.splice(buttonY.entryIndex-1,0,removedEntry[0])
            return [...currentDays]
        })
    }

    function handleDown(){
        let counter=1
        setDays( allDays => {
            if(buttonY.entryIndex >= allDays[buttonY.dayIndex].dayEntries.length-1 || counter !== 1) return [...allDays]
            counter++
            const currentDays = [...allDays]
            const removedEntry = currentDays[buttonY.dayIndex].dayEntries.splice(buttonY.entryIndex,1)
            currentDays[buttonY.dayIndex].dayEntries.splice(buttonY.entryIndex+1,0,removedEntry[0])
            return [...currentDays]
        })
    }

    return(
        <div className='flex flex-col justify-end gap-1'>
            {/* <button type="button" className='px-2 py-1 bg-yellow-400 ' onClick={toggleDisabled}>Edit</button> */}
            <button className='block px-2 py-1 bg-red-400' onClick={handleRemove} type="button">Remove</button>
            {/* <button onClick={handleUp} type="button" className='px-2 py-1 bg-blue-400 '>Up</button>
            <button onClick={handleDown} type="button" className='px-2 py-1 bg-blue-400 '>Down</button> */}
        </div>
    )
}