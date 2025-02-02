import Home from "./pages/home";
import { useState } from "react";
import { currencyContext } from "./context/currencyContext";
function App(){
  // const [curr,setCurr]=useState('usd');
  return(
    
    // <currencyContext.Provider value={{curr,setCurr}}>
    <Home/>
    // </currencyContext.Provider>
  )
}
export default App;