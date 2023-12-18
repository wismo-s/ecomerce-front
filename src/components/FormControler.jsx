import { useState } from 'react'
import { postCreateUser } from '../api/list.api';
import { useNavigate } from 'react-router-dom';
import '../styles/FormControler.css'

export function FormControler({children}) {
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
    <div className='form-controler_container'>
        <form onSubmitCapture={handleSubmit} className='form-controler_form'>
            {children}
            <button>ENVIAR</button>
            {err && <p>upps al parecer algo esta mal</p>}
        </form>
    </div>
  )
}
