import React, { useState } from 'react'
import ButtonGroup from './ButtonGroup';
import EntryTextArea from './EntryTextArea';

export default function Activity(props){

    const [textValue, setTextValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    function handleSubmit(event){
        event.preventDefault()
    }

    const toggleDisabled = () => {
        setIsDisabled((prevIsDisabled) => !prevIsDisabled);
    };
    
    const autoResize = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    };

    React.useState( ()=>{
        for (let i = 0; i < props.entries.length; i++){
            if (props.myId === props.entries[i].id ){
                const myIndex = i;
                break;
            }
        }
    },[])

    const findMyIndex = (currentId) => {
        const myIndex = props.entries.findIndex( (obj) => obj.id === currentId)
        return myIndex
    }

    const handleChange = (e) =>{
        props.setEntries( (allEntries) =>{
            const currentEntries = [...allEntries]
            const myIndex = currentEntries.findIndex( (obj) => obj.id === props.myId)
            currentEntries[myIndex].activity = e.target.value
            return ([...currentEntries])
        })
    }

    return (
        <form onSubmit={handleSubmit} className='grid grid-cols-12 py-1 gap-y-1 gap-x-1'>
            <label className='col-span-12'>Activity Entry [{props.myId}]</label>
            <label className='flex flex-col gap-y-1'>
                <span>Time:</span>
                {/* <input className="w-full" type="time" disabled={isDisabled} /> */}

                <input className='w-full number-input disabled:bg-primary disabled:bb' type="time"
                    value={props.entries[findMyIndex(props.myId)]['time']}
                    onChange={ (e)=>{
                        props.setEntries( (allEntries) =>{
                            const currentEntries = [...allEntries]
                            currentEntries[findMyIndex(props.myId)]['time'] = e.target.value
                            return ([...currentEntries])
                        })
                    }}
                    disabled={isDisabled} 
                />
            </label>
            <div className='flex flex-col col-span-3 gap-y-1'>  
                <label className='grid gap-y-1'>
                    <span>Activity:</span>
                    <EntryTextArea 
                        myId={props.myId}
                        inputType={'activity'}
                        entries={props.entries}
                        setEntries={props.setEntries}
                        disabled={isDisabled} 
                    />
                </label>
                <label className='grid gap-y-1'>
                    <span>Notes:</span>
                    <EntryTextArea 
                        myId={props.myId}
                        inputType={'notes1'}
                        entries={props.entries}
                        setEntries={props.setEntries}
                        disabled={isDisabled} 
                    />
                </label>
            </div>

            <label className='grid content-start w-full col-span-2 gap-y-1'>
                <span>Exclusions:</span>
                <EntryTextArea 
                    myId={props.myId}
                    inputType={'exclusions'}
                    entries={props.entries}
                    setEntries={props.setEntries}
                    disabled={isDisabled} 
                />
            </label>                
            
            
            <label className='grid content-start gap-y-1'>
                <span>Price Per Head</span>
                <input className='w-full number-input disabled:bg-primary disabled:bb' type="number"
                    value={props.entries[findMyIndex(props.myId)]['perHead']}
                    onChange={ (e)=>{
                        props.setEntries( (allEntries) =>{
                            const currentEntries = [...allEntries]
                            currentEntries[findMyIndex(props.myId)]['perHead'] = e.target.value
                            return ([...currentEntries])
                        })
                    }}
                    disabled={isDisabled}
                />

            </label>
            <label className='grid content-start gap-y-1'>
                <span>Costing</span>
                <input className='w-full number-input disabled:bg-primary disabled:bb' type="number"
                    value={props.entries[findMyIndex(props.myId)]['costing']}
                    onChange={ (e)=>{
                        props.setEntries( (allEntries) =>{
                            const currentEntries = [...allEntries]
                            currentEntries[findMyIndex(props.myId)]['costing'] = e.target.value
                            return ([...currentEntries])
                        })
                    }}
                    disabled={isDisabled}
                />
            </label>

            <label className='grid content-start col-span-3 gap-y-1'>
                <span>Notes:</span>
                <EntryTextArea 
                    myId={props.myId}
                    inputType={'notes2'}
                    entries={props.entries}
                    setEntries={props.setEntries}
                    disabled={isDisabled} 
                />
            </label>
            
            {/* <div className='flex flex-col gap-1'>
                <button type="button" className='block px-2 py-2 bg-green-500' onClick={toggleDisabled}>Edit</button>
                <button className='block px-2 py-2 bg-green-500' onClick={handleRemove} type="button">Remove</button>
                <button type="button" className='block px-2 py-2 bg-green-500'>Up</button>
                
                <button type="button" className='block px-2 py-2 bg-green-500'>Down</button>
            </div> */}
            
            <ButtonGroup 
                toggleDisabled={toggleDisabled}
                entries={props.entries}
                setEntries={props.setEntries}
                myId={props.myId}
            />
        
            
            
        </form>
    )
}