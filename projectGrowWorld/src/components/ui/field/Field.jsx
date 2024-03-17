import React from 'react';
import './field.css';
import './FieldMediaStyle.css';

 export default function Field(props){
    let { type = 'text', id = null, name, placeholder = null, value = null, setValue = null, className, field = 'field' } = props;
     return (
        <>
         <input className={`field ${className}`} id={id} type={type} value={value} name={name} onChange={(e) => setValue((prevState) => {
            const newValue = {...prevState};
             newValue[field] = e.target.value;
             return newValue;
         })}/>
        </>
     )
 }