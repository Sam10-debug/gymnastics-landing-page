import MainPage from "./components/MainPage";
import { useState } from "react";
import {LoginContext} from './components/Context/Context'
import About from "./components/About";

function App() {
  const [showMobileNav,setShowMobileNav]=useState(false)
  
  return (
      <div>
        <LoginContext.Provider value={{setShowMobileNav,showMobileNav}}>

        {/* <MainPage /> */}
        <About />
        </LoginContext.Provider>
      </div>
  );
}

export default App;



