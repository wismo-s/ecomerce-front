import '../styles/FormControler.css'
import { useState } from 'react'
import { MotionButton } from './MotionButton'

export function FormControler({children, onsubmitfun, className, ruteTo, buttonOn = true, scaleHover = 1.1 }) {
  const [err, seterr] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const arrdata = Array.from(new FormData(e.target))
    const data = Object.fromEntries(arrdata)

    ruteTo(data)
    .then((res) => {
        onsubmitfun(res)
        alert('datos actualizados!!!')
    }).catch((error) => {
        alert('upps, algo salio mal')
        seterr(error.response.data[0])
    })}

  return (
    <div className={`form-controler_container ${className}`}>
        <form onSubmitCapture={handleSubmit} className='form-controler_form' >
            {children}
            {buttonOn && <MotionButton scaleHover={scaleHover}>ENVIAR</MotionButton>}
            {err && <p>{err}</p>}
        </form>
    </div>
  )
}
