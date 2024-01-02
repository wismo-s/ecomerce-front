import { FormControler } from '../components/FormControler'
import { InputComponent } from '../components/InputComponent'
import { useUserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import Cookies from 'cookies-js'
import '../styles/FormSyles.css'
import { postLogin } from '../api/list.api'
import { motion } from 'framer-motion'
import { DecorationFrame } from '../components/DecorationFrame'
export function Login() {
    const user = useUserContext();
    const navigate = useNavigate();

    const onsubmit = (res) => {
            const token = res.data.token
            Cookies.set('sessiontoken', token)
            navigate('/')
            window.location.reload()
       }
       
  return (
    <div className='form-modal'>
        <DecorationFrame />
        <motion.div className='form-modal_container' 
        animate={{
            x: [500, 0],
        }}>
            <motion.div className='form-modal_img' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
                <img src="src/assets/img/daroma-logo.webp" alt="daroma-logo" />
            </motion.div>
            <h1>Crea una cuenta</h1>
            <p>porfavor rellene el formulario</p>
            {user === null ? (
                <FormControler onsubmitfun={onsubmit} ruteTo={postLogin}>
                    <InputComponent type='text' label='Username' name='username'/>
                    <InputComponent type='password' label='Contrasena' name='password'/>
                </FormControler>
            ):(
                <h1>Ya estas registrado</h1>
            )}
        </motion.div>
    </div>
  )
}
