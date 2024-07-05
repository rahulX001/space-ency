import React from 'react';
import Navbar from './Navbar';

import "./Alignment.css"
import {NavLink}from 'react-router-dom'

function Destination(prop){
   
return(<>

<div className='HomeBackground'>
<Navbar/>
<img className='photoAlign' src={prop.imagename} alt="moon" />
<div className='Destination'>
    <span className='Number'> 01</span>
    <span className='mainheading'> PICK YOUR DESTINATION</span>
    
</div>

<div className='planetname'>
<div className='DesinationNav'>
    <span> <NavLink to="/destination_moon" className='link'>MOON</NavLink> </span>
    <span> <NavLink to="/destination_mars" className='link'> MARS</NavLink> </span>
    <span> <NavLink to="/destination_europa" className='link'> EUROPA</NavLink></span>
    <span> <NavLink to="/destination_titan" className='link'> TITAN</NavLink></span>
</div>
<div className='destinationTitle'>{prop.title}</div>
<div className='detinationdetail'>{prop.detail}</div>
<hr className='desLine' />
<table >
<tr className='desTrhead'>
    <td>AVG. DISTANCE</td>
    <td>EST. TRAVEL TIME</td>
</tr>
<tr className=' desTrdetail'>
    <td>{prop.distance}</td>
    <td>{prop.time}</td>
</tr>
</table>
</div>


</div>



</>



)
}
export default Destination;