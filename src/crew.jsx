import React from 'react';
import Navbar from './Navbar';
import "./crew.css";
import {NavLink} from 'react-router-dom';



function Crew(props){
   return(<>
   <div className='HomeBackground'>
   <Navbar/>
   <div className='CrewHead'>
    <span className='Number'> 02</span>
    <span className='mainheading'> MEET YOUR CREW</span>
    
   </div>
   <div className='textcontainer'>
    <div className='crewDetail'>{props.heading}</div>
    <div className='crewTitle'>{props.title}</div>
    <div className='detinationdetail'>{props.detail}</div>
    </div>
  
   <div className='CirclepotitioN'>
      <NavLink to="/crew"><span className='circle' ></span></NavLink>
      <NavLink to="/crew2"><span className='circle' ></span></NavLink>
      <NavLink to="/crew3"><span className='circle' ></span></NavLink>
      <NavLink to="/crew4"><span className='circle' ></span></NavLink>
      
   
    </div>

   <div className='crew'><img src={props.imagename} alt="explorelogo" style={{width:"100%"}}/></div>


   </div>
   
   </>)
}
export default Crew;