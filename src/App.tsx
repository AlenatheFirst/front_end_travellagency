import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourDestinations";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage";
import DestinationPage from "./pages/DestinationPage";
import AuthPage from "./pages/AuthPage";
import LogInPage from "./pages/LogInPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
 /* const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);*/

  return (
    <div className="app bg-gray-20">
    <Routes>
      <Route path={'/'} element={<MainPage/>}/>
      <Route path={'/auth'} element={<AuthPage/>}/>
      <Route path={'/login'} element={<LogInPage/>}/>
      <Route path={'/destination/:id'} element={<DestinationPage/>}/>
      <Route path={'/user/:id'} element={<ProfilePage/>}/>
    </Routes>
    </div>
  );
}


export default App;
