import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Footer from "./Component/Shared/Footer";
import Navbar from "./Component/Shared/Navbar";
import FilterPanel from "./Component/FilterPanel/FilterPanel";
import './App.css';

function App() {
  return (
    <>
        <Navbar></Navbar>
      
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/filterPanel' element={<FilterPanel></FilterPanel>}></Route>
        </Routes>
        <Footer></Footer>
        
    </>
  );
}

export default App;
