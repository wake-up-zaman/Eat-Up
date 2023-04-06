import { Route, Routes } from "react-router-dom";
import FoodList from "./Component/FoodList/FoodList";
import Home from "./Component/Home/Home";
import Footer from "./Component/Shared/Footer/Footer";
import Navbar from "./Component/Shared/Navbar/Navbar";

function App() {
  return (
    <>
        <Navbar></Navbar>
      
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/foodList' element={<FoodList></FoodList>}></Route>
        </Routes>
        <Footer></Footer>
        
    </>
  );
}

export default App;
