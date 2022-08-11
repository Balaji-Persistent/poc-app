import React from "react";
import logo from './images/logo.png'
import './Header.css'

interface Props {
    sname: string
    name: string
}

function Header({sname, name}: Props) {
  return (
    <div className="d-flex menu-bank">
      <div className="logo-width text-center"> <img className="logo-img" src={logo} /></div>
      <div className="content-width text-menu mobile-h"> Branch operations portal </div>
      <div className="btn-logout text-right ">  <span className="log-out-1"> {sname}</span> {name} <button>logout</button></div>

    </div>
  );

}
export default Header;