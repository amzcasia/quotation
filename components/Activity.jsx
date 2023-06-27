import React, { useState } from 'react'
import { getMyIndex } from '../helpers/globalFunctions';
import ButtonGroup from './ButtonGroup';
import EntryTextArea from './EntryTextArea';

export default function Activity( {dayIndex, entryIndex, entryId, time, activity, notes1, exclusions, perHead, costing, notes2, days, setDays}){

    const [isDisabled, setIsDisabled] = useState(false);

    function handleSubmit(event){
        event.preventDefault()
    }

    const toggleDisabled = () => {
        setIsDisabled((prevIsDisabled) => !prevIsDisabled);
    };

    return (
        <form onSubmit={handleSubmit} className='grid grid-cols-12 py-1 gap-y-1 gap-x-1 print:grid-cols-6'>
            <label className='hidden col-span-12'>Activity Entry [{entryId}]</label>
            
            <label className='flex flex-col gap-y-1'>
                <span className='h-[24px] print:hidden'></span>
                <input className='w-full px-1 number-input disabled:bg-primary disabled:bb' type="time"
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
                <label className='grid gap-y-1'>
                    <span className='h-[24px] print:hidden'></span>
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
                
                <label className='grid hidden gap-y-1'>
                    {/* <span>Note:</span> */}
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
                </label>
            </div>



            <label className='grid content-start hidden w-full col-span-2 gap-y-1'>
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
            </label>                
            
            <div className='grid grid-cols-6 col-span-6 gap-x-1 print:hidden'>
                <label className='flex flex-col gap-y-1'>
                    <span>Per Head:</span>
                    <input className='w-full px-1 text-right number-input disabled:bg-primary disabled:bb' type="number"
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
                    <span>Costing:</span>
                    <input className='w-full px-1 text-right number-input disabled:bg-primary disabled:bb' type="number"
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
                    <span>Notes:</span>
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

                
                
                <ButtonGroup 
                    toggleDisabled={toggleDisabled}
                    days={days}
                    setDays={setDays}
                    dayIndex={dayIndex}
                    entryIndex={entryIndex}
                />
            </div>
        
            
            
        </form>
    )
}