import { postCreateUser } from '../api/list.api';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext'
import { FormControler } from '../components/FormControler';
import { InputComponent } from '../components/InputComponent';
import { motion } from 'framer-motion';
import { DecorationFrame } from '../components/DecorationFrame';
import '../styles/FormSyles.css'

export function CreateUser() {
    const user = useUserContext();
    const navigate = useNavigate();

    const onsubmit = (res) => {
        navigate('/login')
    }

  return (
    <div className='form-modal'>
        <DecorationFrame />
        <motion.div className='form-modal_container' 
        animate={{
            x: [500, 0],
        }}>
            <motion.div className='form-modal_img' whileHover={{scale:1.05}} whileTap={{scale:0.9}}>
                <img src="src/assets/img/daroma-logo.webp" alt="daroma-logo" />
            </motion.div>
            <h1>Crea una cuenta</h1>
            <p>porfavor rellene el formulario</p>
            {user === null ? (
                <FormControler onsubmitfun={onsubmit} ruteTo={postCreateUser}>
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
        </motion.div>
    </div>
  )
}
