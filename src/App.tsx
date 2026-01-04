import { Route, Routes } from "react-router-dom";
import { Home, Oformel,  Aftoraziya,  Profile, Politka } from "./pages";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/oformel" element={<Oformel />} />
        <Route path="/aftoraziya" element={<Aftoraziya />} />
        <Route path="/politka" element={<Politka />} />
      </Routes>
    </div>
  )
}
