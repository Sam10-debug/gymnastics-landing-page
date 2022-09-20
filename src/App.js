import MainPage from "./components/MainPage";
import { useState } from "react";
import {LoginContext} from './components/Context/Context'

function App() {
  const [showMobileNav,setShowMobileNav]=useState(false)
  
  return (
      <div>
        <LoginContext.Provider value={{setShowMobileNav,showMobileNav}}>

        <MainPage />
        </LoginContext.Provider>
      </div>
  );
}

export default App;



