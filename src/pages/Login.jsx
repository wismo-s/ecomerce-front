import { useState } from 'react'
import { FormControler } from '../components/FormControler'
import { InputComponent } from '../components/InputComponent'
import { useUserContext } from '../context/userContext'
import { postLogin } from '../api/list.api'
import { useNavigate } from 'react-router-dom'
import Cookies from 'cookies-js'
import '../styles/FormSyles.css'
export function Login() {
    const user = useUserContext();
    const [err, seterr] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const arrdata = Array.from(new FormData(e.target))
        const data = Object.fromEntries(arrdata)
        postLogin(data)
        .then((res) => {
            const token = res.data.token
            Cookies.set('sessiontoken', token)
            navigate('/')
            window.location.reload()
        }).catch((error) => {
            seterr(true)
    })}
  return (
    <div className='form-modal'>
    <div className='form-modal_container'>
        <h2>LOGO</h2>
        <h1>Crea una cuenta</h1>
        <p>porfavor rellene el formulario</p>
    {user === null ? (
        <FormControler onsubmitfun={handleSubmit} err={err}>
            <InputComponent type='text' label='Username' name='username'/>
            <InputComponent type='password' label='Contrasena' name='password'/>
        </FormControler>
    ):(
        <h1>Ya estas registrado</h1>
    )}
    </div>
</div>
  )
}
