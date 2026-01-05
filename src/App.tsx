import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Favorites from "./pages/favorites/Favorites";
import Cart from "./pages/cart/Cart";
import AllComponenets from "./allComponents/AllComponenets";


export default function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<AllComponenets />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}
