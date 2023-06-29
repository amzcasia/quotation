import React, { useContext, useState } from 'react'
import { getMyIndex } from '../helpers/globalFunctions';
import ButtonGroup from './ButtonGroup';
import EntryTextArea from './EntryTextArea';
import {EntryFocusContext} from '../pages/Quotation'

export default function Activity( {dayIndex, entryIndex, entryId, time, activity, notes1, exclusions, perHead, costing, notes2, days, setDays}){

    const [isDisabled, setIsDisabled] = useState(false);
    const {focusedEntry,setFocusedEntry,handleChangeFocus} = useContext(EntryFocusContext)

    function handleSubmit(event){
        event.preventDefault()
    }

    const toggleDisabled = () => {
        setIsDisabled((prevIsDisabled) => !prevIsDisabled);
    };

    return (
        <form className='grid grid-cols-11 py-[2px] pl-2 ml-[0.5%] mr-[1%] gap-y-1 gap-x-1 print:grid-cols-6 relative'
        onSubmit={handleSubmit}
        onClick={(event)=>{
            handleChangeFocus(entryId,event, dayIndex, entryIndex)}}
        >
            {focusedEntry[entryId] && <div className='absolute top-0 w-1 h-full bg-accent print:hidden'></div>}
            {/* <label className='col-span-12'>Activity Entry [{entryId}]</label> */}
            {/* {focusedEntry[entryId] && <div className='h-5 col-span-12'></div>} */}
            <label className='flex flex-col gap-y-1'>
                {/* <span className='h-[24px] print:hidden'></span> */}
                <input className='w-full px-1 border border-gray-400 rounded-md print:border-none number-input disabled:bg-primary disabled:bb' type="time"
                    value={days[dayIndex].dayEntries[entryIndex]['time']}
                    onChange={ (e)=>{
                        setDays( (allDays)=>{
                            const currentDays =  [...allDays]
                            currentDays[dayIndex].dayEntries[entryIndex]['time'] = e.target.value
                            return [...currentDays]
                        })
                    }}
                    disabled={isDisabled} 
                />
            </label>
            
            <div className='flex flex-col col-span-5 gap-y-1'>  
                <label className='grid'>
                    <EntryTextArea 
                        entryId={entryId}
                        dayIndex={dayIndex}
                        entryIndex={entryIndex}
                        inputType={'activity'}
                        days={days}
                        setDays={setDays}
                        disabled={isDisabled} 
                    />
                </label>
                
                {/* <label className='gap-y-1 '>
                    <span>Note:</span>
                    <EntryTextArea 
                        entryId={entryId}
                        dayIndex={dayIndex}
                        entryIndex={entryIndex}
                        inputType={'notes1'}
                        days={days}
                        setDays={setDays}
                        disabled={isDisabled} 
                        placeHolder={''}
                    />
                </label> */}
            </div>



            {/* <label className='grid content-start w-full col-span-2 gap-y-1'>
                <span>Exclusions:</span>
                <EntryTextArea 
                    entryId={entryId}
                    dayIndex={dayIndex}
                    entryIndex={entryIndex}
                    inputType={'exclusions'}
                    days={days}
                    setDays={setDays}
                    disabled={isDisabled} 
                />
            </label>                 */}
            
            <div className='grid grid-cols-5 col-span-5 gap-x-1 print:hidden'>
                <label className='flex flex-col gap-y-1'>
                    {/* <span>Per Head:</span> */}
                    <input className='w-full px-1 text-right border border-gray-400 rounded-md number-input disabled:bg-primary disabled:bb' type="number"
                        //value={props.entries[findMyIndex(props.myId)]['time']}
                        value={days[dayIndex].dayEntries[entryIndex]['perHead']}
                        onChange={ (e)=>{
                            setDays( (allDays)=>{
                                const currentDays =  [...allDays]
                                currentDays[dayIndex].dayEntries[entryIndex]['perHead'] = e.target.value
                                return [...currentDays]
                            })
                        }}
                        disabled={isDisabled} 
                    />
                </label>

                <label className='flex flex-col gap-y-1'>
                    {/* <span>Costing:</span> */}
                    <input className='w-full px-1 text-right border border-gray-400 rounded-md number-input disabled:bg-primary disabled:bb' type="number"
                        //value={props.entries[findMyIndex(props.myId)]['time']}
                        value={days[dayIndex].dayEntries[entryIndex]['costing']}
                        onChange={ (e)=>{
                            setDays( (allDays)=>{
                                const currentDays =  [...allDays]
                                currentDays[dayIndex].dayEntries[entryIndex]['costing'] = e.target.value
                                return [...currentDays]
                            })
                        }}
                        disabled={isDisabled} 
                    />
                </label>

                <label className='grid content-start col-span-3 gap-y-1'>
                    {/* <span>Notes:</span> */}
                    <EntryTextArea 
                        entryId={entryId}
                        dayIndex={dayIndex}
                        entryIndex={entryIndex}
                        inputType={'notes2'}
                        days={days}
                        setDays={setDays}
                        disabled={isDisabled} 
                    />
                </label>

                {/* {focusedEntry[entryId] && <ButtonGroup 
                    toggleDisabled={toggleDisabled}
                    days={days}
                    setDays={setDays}
                    dayIndex={dayIndex}
                    entryIndex={entryIndex}
                />} */}
            </div>
        
            
            
        </form>
    )
}