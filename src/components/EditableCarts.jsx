import { FormControler } from './FormControler'
import '../styles/EditableCards.css'

export function EditableCarts({children, onsubmitfun, err, editinOn}) {
  return (
    <div className='editable-component-container'>
        { editinOn ? (
        <FormControler className="FormControler-container" onsubmitfun={onsubmitfun} err={err}>
            {children}
        </FormControler>
        ) : (
            <div className='childrens-container'>
                {children}
            </div>
        ) }
    </div>
  )
}
