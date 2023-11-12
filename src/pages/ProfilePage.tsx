
import Footer from "@/scenes/footer";
import Logo from "@/assets/LogoTrip.png";
import { NavLink } from "react-router-dom";

export function ProfilePage() {
    return (
    <>
    <div className= "bg-gray-20">
    <div className= "bg-gray-20 drop-shadow fixed top-0 z-30 w-full py-6` flex items-center justify-center">
        
        <NavLink to={'/'}><img alt="logo" src={Logo} /></NavLink>
    </div>
        <div className ="z-10 mt-32 md:basis-3/5 flex items-center justify-center">
            Here comes info about UserCabinet
        </div>
        </div>

        <div>   
        <Footer/>
        </div>
        </>
    )
}
export default ProfilePage;
