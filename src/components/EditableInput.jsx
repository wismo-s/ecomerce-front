import { useState } from 'react'
import '../styles/EditableInputs.css'
export function EditableInput({value, type, label, name, onEditin, isEditable = true}) {
    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState(value)
    const handleChange = (e) => setInputValue(e.target.value)
    const HandleClick = () => {
        setIsEditing(!isEditing)
        onEditin()
    };

  return (
    <div className='editableinput-container'>
        <span>{label}</span>
        { isEditing ? (
            <input className='editableInput_input' type={type} name={name} value={inputValue} onChange={handleChange}/>
        ) : (
                <span>{value}</span>
        )}
        {isEditable &&  <span className='editableInput_edit' onClick={HandleClick}>/</span>}
    </div>
  )
}
