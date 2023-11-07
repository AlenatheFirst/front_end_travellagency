
import Footer from "@/scenes/footer";
import Logo from "@/assets/LogoTrip.png";
import { NavLink } from "react-router-dom";

export function DestinationPage() {
    return (
    <>
       <div className= "bg-gray-20 drop-shadow fixed top-0 z-30 w-full py-6` flex items-center justify-center">
        
        <NavLink to={'/'}><img alt="logo" src={Logo} /></NavLink>
        </div>
        <div className =" z-40">
            Here comes info about Destination
        </div>
        <div>
        <Footer/>
        </div>
        </>
    )
}
export default DestinationPage;