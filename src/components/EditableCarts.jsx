import { FormControler } from './FormControler'
import '../styles/EditableCards.css'

export function EditableCarts({children, onsubmitfun, buttonOn, ruteTo}) {
  return (
    <div className='editable-component-container'>
        <FormControler className="FormControler-container" ruteTo={ruteTo} onsubmitfun={onsubmitfun} buttonOn={buttonOn} scaleHover={1.02}>
            {children}
        </FormControler>
    </div>
  )
}
