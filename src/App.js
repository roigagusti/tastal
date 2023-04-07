import { Routes, Route, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';
import Login from "./pages/login"
import Discover from "./pages/discover"
import Favourites from "./pages/favourites"
import Profile from "./pages/profile"
import Prova from "./pages/prova"

function App() {
  const location = useLocation();
  useEffect(() => {
    const body = document.body;
    if(location.pathname === '/login'){
      body.classList.add('access');
    }else{
      body.classList.remove('access');
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="login" element={ <Login/> } />
      <Route path="discover" element={ <Discover/> } />
      <Route path="favourites" element={ <Favourites/> } />
      <Route path="profile" element={ <Profile/> } />
      <Route path="prova" element={ <Prova /> } />
    </Routes>
  )
}

export default App