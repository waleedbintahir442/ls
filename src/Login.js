import React from 'react'
import LoginForm from './LoginForm';
import PropTypes from 'prop-types'


export default function Login(props) {
  return (
    <div>
    <LoginForm mode={props.mode} showalert={props.showalert}/>
</div>
  )
}
