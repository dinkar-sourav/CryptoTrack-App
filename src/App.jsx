import Home from "./pages/home";
import { useState } from "react";
import { currencyContext } from "./context/currencyContext";
import Routing from "./Components/Routing/routing";
import NavBar from "./Components/CoinTable/NavBar/NavBar";
function App(){
  // const [curr,setCurr]=useState('usd');
  return(
    <>  

      <Routing/>

    </>
    
    // <currencyContext.Provider value={{curr,setCurr}}>
    

    // </currencyContext.Provider>
  )
}
export default App;