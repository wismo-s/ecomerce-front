import '../styles/FormControler.css'
import { useState } from 'react'

export function FormControler({children, onsubmitfun, className, ruteTo, buttonOn = true }) {
  const [err, seterr] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const arrdata = Array.from(new FormData(e.target))
    const data = Object.fromEntries(arrdata)

    console.log(data);

    ruteTo(data)
    .then((res) => {
        onsubmitfun(res)
    }).catch((error) => {
        console.log(error.response);
        seterr(error.response.data[0])
})}

  return (
    <div className={`form-controler_container ${className}`}>
        <form onSubmitCapture={handleSubmit} className='form-controler_form' >
            {children}
            {buttonOn && <button>ENVIAR</button>}
            {err && <p>{err}</p>}
        </form>
    </div>
  )
}
