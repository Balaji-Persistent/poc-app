import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './SideNavBar.css';
const menujson:any = [
  {
    "label": "Home",
    "icon": "icon",
    "link": "/"
  },
  {
    "label": "Customer Search",
    "icon": "icon",
    "link": "customersearch",
    
  }
]
 interface Props{
  link : string;
  label: string
 }
export default function SideNavBar (){
  const links = menujson.map(({link,label}:Props) => {
      return <li><span><Link to={link} key={label}> {label} </Link></span></li>
  })
        return (
          <div className='sidebarWrap'>
            <div className='hamburgerMenu'></div>
            <ul className='sidebar'>
              
                {links}
             
              
            </ul>
          </div>
        )
      
}

