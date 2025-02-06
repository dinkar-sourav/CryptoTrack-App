import { Routes,Route } from "react-router-dom";
import Home from "../../pages/home";
import CoinDetails from "../../pages/coinDetails";
import Layout from "../../pages/layout";
function Routing(){
    return (
       <>
         <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/details/:coinId" element={<CoinDetails/>} />
            </Route>
         </Routes>
       </>
    )
}

export default Routing;