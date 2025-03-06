import { Routes,Route } from "react-router-dom";
import Layout from "../../pages/layout";
import {lazy,Suspense} from 'react'
import MyLoader from "../PageLoader/PageLoader";
import Errorboundary from "../ErrorBoundary/ErrorBoundary";
const Home=lazy(()=>import("../../pages/home"))
const CoinDetails=lazy(()=>import("../../pages/coinDetails"))
function Routing(){
    return (
       <Errorboundary>
         <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={
                    <Suspense fallback={<MyLoader/>}>
                         <Home/>
                    </Suspense>
                   
                    
                    
                    }/>
                <Route path="/details/:coinId" element={
                    <Suspense fallback={<MyLoader/>}>
                        <CoinDetails/>
                    </Suspense>
                    
                    } />
                
            </Route>
         </Routes>
       </Errorboundary>
    )
}

export default Routing;