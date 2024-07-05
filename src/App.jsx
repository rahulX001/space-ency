import React from 'react'
import Home from "./Home";
import Destination from "./desination";
import moon_img from "./images/moon.webp";
import mars_img from "./images/mars.webp";
import titan_img from "./images/titan.webp";
import europa_img from "./images/europa.webp";
import {Route,Routes} from "react-router-dom";
import Crew from './crewgrop';
import Technology from './techgroup';



function App(){
return(
    <> <Technology/>
    <Crew/>
   <Routes>
   <Route path="/" exact element={<Home/>}/>
   
   
   
    <Route   path="/destination_moon"  element={<Destination
      imagename={moon_img}
      title="MOON"
      detail="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
      distance="384,400 KM"
      time="3 DAYS"
    />}/>
    <Route path="/destination_mars" element={ <Destination
      imagename={mars_img}
      title="MARS"
      detail="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
      distance="225 MIL. KM"
      time="9 MONTHS"
    /> }/>
    <Route path="/destination_europa"  element={ <Destination
      imagename={europa_img}
      title="EUROPA"
      detail="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
      distance="628 MIL. KM"
      time="3 YEARS"
    /> }/>
    <Route path="/destination_titan" element={<Destination
      imagename={titan_img}
      title="TITAN"
      detail="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
      distance="1.6 BIL. KM"
      time="7 YEARS"
    />
    }/>
   </Routes>
    

    
    
    
    
    
    
    
    </>
)

}
export default App;