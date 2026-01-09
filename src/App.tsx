import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AllComponenets from "./components/allCompanents/AllCompanents";


export default function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<AllComponenets />} />
      </Routes>
    </div>
  )
}