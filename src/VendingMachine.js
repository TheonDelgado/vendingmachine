import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Chips from "./Chips";
import Candy from "./Candy";
import Home from "./Home";
import Soda from "./Soda";
import ForTabitha from "./ForTabitha";

export default function VendingMachine() {
    return (
       <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="chips" element={<Chips/>}/>
            <Route path="candy" element={<Candy/>}/>
            <Route path="soda" element={<Soda/>}/> 
            <Route path="tab" element={<ForTabitha/>}/> 
        </Routes>
       </BrowserRouter>
    );
}