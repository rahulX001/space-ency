import React from 'react';
import Navbar from './Navbar';
import "./technology.css";
import {NavLink} from 'react-router-dom'





function Technology(props){
   
   return(<>
   <div className='HomeBackground'>
   <Navbar/>
   <div className='Title'>
    <span className='Number'> 03 </span>
    <span className='mainheading'>SPACE LAUNCH 101</span>
    </div>
   <div className='TexContainer'>
    <div className='techHeading'>THE TERMINOLOGY…</div>
    <div className='techTitle'> {props.title}</div>
    <div className='techDetail'> {props.detail}</div>
   
   </div>
   <div className='CirclePotition'>
      {/* <NavLink to="/technology"  className= "link" {...({ isActive }) => (isActive ? `${setcolor("white")}` : `${setcolor("#0B0D17")}`)}> */}
      <NavLink to="/technology"  className= "link" activeClassName="Active" >
         <div  className='Circle' ><h6>1</h6></div></NavLink>
       <NavLink to="/technology2" className="link" activeClassName="Active"><div className='Circle'><h6 >2</h6></div></NavLink> 
       <NavLink to="/technology3" className="link"><div className='Circle'><h6>3</h6></div></NavLink>  
        
    </div>

   <div className='Techphoto'>
      <img className='imgtech' src={props.imagename} alt="explorelogo"/>
      </div>


   </div>
   
   </>)
}
export default Technology;