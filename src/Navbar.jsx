import React  from 'react';
import "./Home.css";
import logosrc from "./images/logo.png"
import {NavLink} from 'react-router-dom'


function Navbar(){

    return(
    <>
    <div className='Nav-container' >
        <div ><img src={logosrc} alt="logo" style={{paddingTop:"29%"}}/></div>
       <hr className='line' />
       <div style={{padding:"2%"}} className="Nav-container-child">               
       <span><NavLink to="/" className="link"> 00 HOME </NavLink></span>
        <span><NavLink to="/destination_moon" className="link" > 01 DESTINATION </NavLink></span>
        <span><NavLink to="/crew" className="link"> 02 CREW </NavLink></span>
        <span><NavLink to="/technology" className="link"> 03 TECHNOLOGY </NavLink></span>
   </div>
    </div>
   
    
    </>);


}
export default Navbar;