import '../styles/FormControler.css'

export function FormControler({children, onsubmitfun, err}) {
  return (
    <div className='form-controler_container'>
        <form onSubmitCapture={onsubmitfun} className='form-controler_form'>
            {children}
            <button>ENVIAR</button>
            {err && <p>upps al parecer algo esta mal</p>}
        </form>
    </div>
  )
}
