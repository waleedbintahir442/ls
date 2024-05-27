import React from 'react'
import PropTypes from 'prop-types'


export default function Alert(props) {
    const capital=(word)=>{
        const l=word.toLowerCase();
        return l.charAt(0).toUpperCase()+ l.slice(1); 
    };
  return (
   props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capital(props.alert.type)}</strong>: {props.alert.message}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
