import React  from 'react';
import Navbar from './Navbar';
import explore_logo from './images/explore_logo.png';
import background_src from "./images/Bitmap.jpg";
import "./Home.css";
function Home(){
    return(
    <>
    <div className='container' style={{backgroundImage:`url(${background_src})`,backgroundSize:"cover",height:" 100vh"}}>
   <Navbar/>
   <div className='explorelogo'>
    <img src={explore_logo} alt="explorelogo" className='ExploreLogo' />
    </div>
   <div className='textContainer'>
   <div className='homeTitle'>SO, YOU WANT TO TRAVEL TO</div>
   <div className='destinationTitle postionSpace'>SPACE</div>
   <div className="homedetail" >Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
   </div >
    </div>
    
    </>)


}
export default Home;