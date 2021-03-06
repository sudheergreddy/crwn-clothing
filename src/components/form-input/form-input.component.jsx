import React from 'react';
import './form-input.styles.scss';

function FormInput({handleChange,name, label, type, value, required}) {
    return (
        <div className="group">                   
            <input className="form-input" name={name} type={type} value={value} onChange={handleChange} required/>
            {label ? <label className={`${value.length? 'shrink': ''} form-input-label`}>{label}</label>:null}     
        </div>
    )
}

export default FormInput;