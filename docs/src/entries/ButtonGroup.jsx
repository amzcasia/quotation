export default function ButtonGroup({toggleDisabled, handleRemove, entries, setEntries, myId }){
    function handleRemove(){
        setEntries( allEntries =>{
            const currentEntries = [...allEntries]
            for (let i = 0; i < currentEntries.length; i++){
                if(currentEntries[i].id === myId){
                  currentEntries.splice(i,1)
                }
            }
            return(
                [...currentEntries]
            )
        })
    }
    return(
        <div className='flex flex-col gap-1'>
            <button type="button" className='block px-2 py-2 bg-orange-400' onClick={toggleDisabled}>Edit</button>
            <button className='block px-2 py-2 bg-red-400' onClick={handleRemove} type="button">Remove</button>
            <button type="button" className='block px-2 py-2 border border-black cursor-default'>Up</button>
            
            <button type="button" className='block px-2 py-2 border border-black cursor-default'>Down</button>
        </div>
    )
}