import React from "react";
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import HaCouncil from "./pages/haCouncil/HaCouncil";
import AlumiAffaris from "./pages/alumi-affairs/AlumiAffaris";
import Ir from "./pages/international-relation/Ir";
import Hospital from "./pages/hospital/Hospital";
import Hostels from "./pages/hostels/Hostels";
import Security from "./pages/security/Security";
import GuestAccomadationBooking from "./pages/guest-accomadation-booking/GuestAccomadationBooking";
import Hygiene from "./pages/hygiene/Hygiene";
import Tenders from "./pages/tenders/Tenders";
import HallManager from "./pages/hall-manager/HallManager";
import Gulmohar from "./pages/gulmohar/Gulmohar";


function App() {
  return (
    <BrowserRouter basename="/hostels"> 
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/alumi" element={<AlumiAffaris/>}/>
        <Route path="/ha-council" element={<HaCouncil/>}/>
        <Route path="/ir" element={<Ir/>}/>
        <Route path="/hospital" element={<Hospital/>}/>
        <Route path="/hostels" element={<Hostels/>}/>
        <Route path="/security" element={<Security/>}/>
        <Route path="/tenders" element={<Tenders/>}/>
        <Route path="/food-outlet-rating" element={<Home/>}/>
        <Route path="/hall-manager-duties" element={<HallManager/>}/>
        <Route path="/guest-accomadation-booking" element={<GuestAccomadationBooking/>}/>
        <Route path="/gulmohar" element={<Gulmohar/>}/>
        <Route path="/hygiene-committee" element={<Hygiene/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;