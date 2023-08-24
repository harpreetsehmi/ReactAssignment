import React from "react";
import About from "./About";
import Addpets from "./Addpets";
import Contact from "./Contact";
import Header from "./Header";
import Herobanner from "./Herobanner";
import Services from "./Services";
function Home(){
   
    
    return(
        <div>
        <Header/>
        <Herobanner/>
        <About/>
        <Services/>
        <Addpets/>
        <Contact/>
      
           
        </div>
    );
}
export default Home;