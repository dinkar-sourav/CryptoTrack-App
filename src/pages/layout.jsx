import NavBar from "../Components/CoinTable/NavBar/NavBar"
import { Outlet } from "react-router-dom"
function Layout(){
    return(
        <>
            {/* this is the shared component we want to acess across pages */}
            <NavBar />

            {/* the actual page which will be rendered along with the navbar */}
            <Outlet/>
        </>
        
    )
}
export default Layout;