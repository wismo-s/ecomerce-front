import { useState } from 'react'
import { useUserContext } from '../context/userContext'
import { EditableInput } from '../components/EditableInput'
import { EditableCarts } from '../components/EditableCarts';
import '../styles/EditableCards.css'

export function UserDetail() {
    const user = useUserContext();
    const [isEditing, setIsEditing] = useState(false)
    const [ err, seterr ] = useState(false)
    const handleEdit = () => setIsEditing(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        const arrdata = Array.from(new FormData(e.target))
        const data = Object.fromEntries(arrdata)
        console.log(data);
    }
  return (
    <div>
        { user === null ? (
            <h1>no estas logeado</h1>
        ) : (    
        <div className='editable-cards-container'>
            <EditableCarts editinOn={isEditing} err={err} onsubmitfun={handleSubmit}>
                <EditableInput type="text" name="username" label='Username' value={user.username} onEditin={handleEdit}/>
                <EditableInput type="text" name="first_name" label='Nombre' value={user.first_name} onEditin={handleEdit}/>
                <EditableInput type="text" name="last_name" label='Apellido' value={user.last_name} onEditin={handleEdit}/>
                <EditableInput type="email" name="email" label='Correo' value={user.email} onEditin={handleEdit}/>
            </EditableCarts>
        </div>
        ) }
    </div>
  )
}
