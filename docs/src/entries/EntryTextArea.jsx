export default function TextArea({myId,inputType,entries,setEntries,disabled}){
    const autoResize = (event) => {
        event.target.style.height = 'auto'
        event.target.style.height = event.target.scrollHeight + 'px'
    }

    const findMyIndex = (currentId) => {
        const myIndex = entries.findIndex( (obj) => obj.id === currentId)
        return myIndex
    } 

    const handleChange = (e) =>{
        setEntries( (allEntries) =>{
            const currentEntries = [...allEntries]
            currentEntries[findMyIndex(myId)][inputType] = e.target.value
            return ([...currentEntries])
        })
    }
    
    return (
        <textarea 
            className='overflow-auto resize-none disabled:bg-primary disabled:bb' 
            value={entries[findMyIndex(myId)][inputType]} 
            onChange={handleChange} 
            disabled={disabled} 
            onInput={autoResize} 
            rows={3}>
        </textarea>
    )
}