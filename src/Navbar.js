import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link> 
            
          
        </li>
        
      </ul>
      <form className="d-flex mx-1 ">
     <Link to="/login" style={{marginRight:"10px"}}> <button className="btn btn-outline-success " type="submit" >LOGIN</button></Link>
       <Link to="/signup" style={{marginRight:"10px"}}><button className="btn btn-outline-success "  type="submit">SIGNUP</button></Link> 
      </form>
      <div className={`form-check form-switch  text-${props.clr} `}>
      <input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.b}</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
