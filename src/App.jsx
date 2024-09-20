import { Routes, Route } from "react-router-dom";
import {Home, About, Services, Contact} from "./Pages";
function App() {
return (
    <>
     <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
    </div>
    </>
  )
}

export default App
