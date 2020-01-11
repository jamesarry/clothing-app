import React from 'react';
import './form-input.styles.scss';

/**
 * 
 * If values are coming from the input, show shrink else show nothing
 */
const FormInput = ({ handleChange, label, ...otherProps }) => (
     <div className="group">
       <input className="form-input" onChange={handleChange} {...otherProps}/>
       {
         label ?
         (<label class={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
         </label>)
         : null
       }
     </div>
 );

 export default FormInput;