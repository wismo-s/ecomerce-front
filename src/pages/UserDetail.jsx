import { useState } from 'react'
import { useUserContext } from '../context/userContext'
import { EditableInput } from '../components/EditableInput'
import { EditableCarts } from '../components/EditableCarts';
import { putUserEdit, putUserEditDetails } from '../api/list.api';
import { PersonCircle } from 'react-bootstrap-icons';
import { DecorationFrame } from '../components/DecorationFrame';
import { motion } from 'framer-motion'
import '../styles/EditableCards.css'

export function UserDetail() {
    const user = useUserContext();
    const [isEditingUser, setIsEditingUser] = useState(false)
    const [isEditingMoreData, setIsEditingMoreData] = useState(false)
    const handleEdituser = () => setIsEditingUser(true)
    const handleEditMoreData = () => setIsEditingMoreData(true);
  return (
    <div className='userDetail-container'>
        { user === null ? (
            <h1>no estas logeado</h1>
        ) : (    
        <motion.section className='editable-cards-container' animate={{opacity: [0, 1], x: [-300, 0]}}>
            <EditableCarts onsubmitfun={()=>{}} buttonOn={isEditingUser} ruteTo={putUserEdit}>
                <PersonCircle className='perfil-circle' color="#FFFFFF" size={80}></PersonCircle>
                <EditableInput type="text" name="username" label='Username' value={user.username} onEditin={handleEdituser} isEditable={false}/>
                <EditableInput type="email" name="email" label='Correo' value={user.email} onEditin={handleEdituser}/>
                <EditableInput type="text" name="first_name" label='Nombre' value={user.first_name} onEditin={handleEdituser}/>
                <EditableInput type="text" name="last_name" label='Apellido' value={user.last_name} onEditin={handleEdituser}/>
            </EditableCarts>
            <EditableCarts onsubmitfun={()=>{}} buttonOn={isEditingMoreData} ruteTo={putUserEditDetails}>
                <EditableInput type="text" name="department" label='Departamento' value={user.department} onEditin={handleEditMoreData}/>
                <EditableInput type="text" name="distric" label='Distrito' value={user.distric} onEditin={handleEditMoreData}/>
                <EditableInput type="text" name="direction" label='Direccion' value={user.direction} onEditin={handleEditMoreData}/>
                <EditableInput type="text" name="reference" label='Referencia' value={user.reference} onEditin={handleEditMoreData}/>
                <EditableInput type="text" name="phone" label='Telefono' value={user.phone} onEditin={handleEditMoreData}/>
                <EditableInput type="text" name="postal_code" label='Codigo postal' value={user.postal_code} onEditin={handleEditMoreData}/>
            </EditableCarts>
        </motion.section>
        ) }
        <div className='decoration-frame-container'>
         <DecorationFrame></DecorationFrame>
        </div>
    </div>
  )
}
