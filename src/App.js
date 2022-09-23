import MainPage from "./components/MainPage";
import { useState } from "react";
import {LoginContext} from './components/Context/Context'
import About from "./components/About"; 
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav";

function App() {
  const [showMobileNav,setShowMobileNav]=useState(false)
  
  return (
      <div className="App">
        <LoginContext.Provider value={{setShowMobileNav,showMobileNav}}>

        <Router>
          <NavBar />
          {showMobileNav&&<MobileNav />}
          <Switch>
            <Route exact path="/">
            <MainPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
          </Switch>
        </Router>
        </LoginContext.Provider>
      </div>
  );
}

export default App;



