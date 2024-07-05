import React from 'react';
import {Route,Routes} from "react-router-dom";
import Crew from './crew';
import crew1 from './images/crew1.webp'
import crew2 from './images/crew2.webp'
import crew3 from './images/crew3.webp'
import crew4 from './images/crew4.webp'

function CrewGroup(){
    return(<>
    <Routes>
    <Route path="/crew" exact element={<Crew 
   imagename={crew1} 
   heading ="COMMANDER "
   title="DOUGLAS HURLEY"
   detail="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."/>}/> 
   
   <Route path="/crew2" exact element={<Crew 
   imagename={crew2} 
    heading ="MISSION SPECIALIST"
   title="MARK SHUTTLEWORTH"
   detail="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."/>}/>

   <Route path="/crew3" exact element={<Crew 
   imagename={crew3} 
   heading ="PILOT"
   title="VICTOR GLOVER"
   detail="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "/>}/>
    <Route path="/crew4" exact element={<Crew 
   imagename={crew4} 
    heading ="FLIGHT ENGINEER"
   title="ANOUSHEH ANSARI"
   detail="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."/>}/>
   
   
   
    </Routes>
    
    </>);
}
export default CrewGroup;