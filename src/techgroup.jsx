import React from 'react';
import {Route,Routes} from "react-router-dom";
import Technology from './technology';
import tech1 from "./images/tech1.jpg";
import tech2 from "./images/tech2.jpg";
import tech3 from "./images/tech3.jpg";
function Techgroup(){
return(<>
<Routes>
<Route exact  path="/technology"  element={<Technology 
  imagename={tech1}
  title="LAUNCH VEHICLE"
  detail="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"/>}/>
<Route   path="/technology2"  element={<Technology 
  imagename={tech2}
  title="SPACEPORT"
  detail="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."/>}/>
  <Route   path="/technology3"  element={<Technology 
    imagename={tech3}
    title="SPACE CAPSULE"
    detail="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."/>}/>



</Routes>
</>)

}
export default Techgroup;