import { useState } from 'react'
import { postCreateUser } from '../api/list.api';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext'
import { FormControler } from '../components/FormControler';
import { InputComponent } from '../components/InputComponent';
import '../styles/FormSyles.css'

export function CreateUser() {
    const user = useUserContext();
    const [err, seterr] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const arrdata = Array.from(new FormData(e.target))
        const data = Object.fromEntries(arrdata)
        postCreateUser(data)
        .then((res) => {
            navigate('/login')
        }).catch((error) => {
            console.log(error);
            seterr(true)
        })
    }
  return (
    <div className='form-modal'>
        <div className='form-modal_container'>
            <h2>LOGO</h2>
            <h1>Crea una cuenta</h1>
            <p>porfavor rellene el formulario</p>
        {user === null ? (
            <FormControler onsubmitfun={handleSubmit} err={err}>
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
