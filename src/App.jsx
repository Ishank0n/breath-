    import { useState } from 'react'
    import heroImg from './assets/hero.png'
    import reactLogo from './assets/react.svg'
    import viteLogo from './assets/vite.svg'
    import './App.css'
    import Home from './Home'
    import Plants from './Plants'
    import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    useNavigate,
    } from "react-router-dom";

    function AppContent(){
        const navigate = useNavigate();
        
        return(
            <button onClick={()=> navigate("/home")}>
                Start
            </button>
        );
    }

    function App() {

        return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppContent />}></Route>
                <Route path='/home' element={<Home />}></Route> 
                <Route path='/plants' element={<Plants />}></Route>
            </Routes>
        </BrowserRouter>
        );
    }

    export default App
