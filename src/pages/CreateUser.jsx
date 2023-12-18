import React from 'react'
import { useUserContext } from '../context/userContext'
import { FormControler } from '../components/FormControler';
import { InputComponent } from '../components/InputComponent';
import '../styles/FormSyles.css'

export function CreateUser() {
    const user = useUserContext();
  return (
    <div className='form-modal'>
        <div className='form-modal_container'>
            <h2>LOGO</h2>
            <h1>Crea una cuenta</h1>
            <p>porfavor rellene el formulario</p>
        {user === null ? (
            <FormControler>
                <InputComponent type='text' label='Username' name='username'/>
                <InputComponent type='email' label='Email' name='email'/>
                <InputComponent type='text' label='Nombre' name='first_name'/>
                <InputComponent type='text' label='Apellidos' name='last_name'/>
                <InputComponent type='text' label='Telefono' name='phone'/>
                <InputComponent type='password' label='Contrasena' name='password'/>
            </FormControler>
        ):(
            <h1>Ya estas registrado</h1>
        )}
        </div>
    </div>
  )
}
