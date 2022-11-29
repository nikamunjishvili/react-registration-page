import React, { useState } from 'react'
import '../styles/Form.css';

function Form(props) {
    const [focused,setFocused] = useState(false);
    const { label, errorMesage, onChange, id,...inputProps } = props;
    const handleFocus = () =>{
        setFocused(true);
    } 
  return (
    <div className="formInput">
        <label>{label}</label>
        <input {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        onFocus={() => 
        inputProps.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
        />
        <span> {errorMesage} </span>
    </div>
  )
}

export default Form