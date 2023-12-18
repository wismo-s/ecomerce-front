import '../styles/InputComponent.css';

export  function InputComponent({type, label, name}) {
    return (
    <div className='input-container'>
        <input className='input_form' type={type} name={name} placeholder=' ' />
        <label className='input_label'>{label}</label>
    </div>
  )
}
