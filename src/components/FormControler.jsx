import '../styles/FormControler.css'

export function FormControler({children, onsubmitfun, err, className}) {
  return (
    <div className={`form-controler_container ${className}`}>
        <form onSubmitCapture={onsubmitfun} className='form-controler_form'>
            {children}
            <button>ENVIAR</button>
            {err && <p>upps al parecer algo esta mal</p>}
        </form>
    </div>
  )
}
