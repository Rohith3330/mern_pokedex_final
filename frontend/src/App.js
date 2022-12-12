// import logo from './logo.svg';
import React from 'react'
import './App.css';
import './bootstrap.min.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landingpage from './screens/landingpage/Landingpage';
import Loginpage from './screens/LoginPage/Loginpage';
import Registerpage from './screens/Registerpage/Registerpage';
import Info from './screens/details/Info.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Edit from "./screens/edit/Edit"
import Home from './screens/home/home';
import Explore from './screens/explore/Explore';
import Upload from './screens/upload/Upload';
const App=()=> (
    <BrowserRouter>
        <Header/>
        <main style={{minHeight:"93vh"}}>
            {/* <Registerpage/> */}
            <Routes>
                <Route  path="/" element={<Landingpage/>} />
                <Route  path="/login" element={<Loginpage/>} />
                <Route  path="/register" element={<Registerpage/>} />
                <Route  path="/home" element={<Home/>} />
                <Route  path="/view/:id" element={<Info/>} />
                <Route  path="/edit/:id" element={<Edit/>} />
                <Route path="/explore" element={<Explore/>}/>
                <Route path="/upload" element={<Upload/>}/>
            </Routes>
           
        </main>
        

    </BrowserRouter>
)
export default App;
