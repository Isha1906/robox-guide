import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RBXTools from "./pages/RBXTools/RBXTools";
import Characters from "./pages/Characters/Characters";
import Disclaimer from "./components/Disclaimer";
import FreeRBX from "./pages/FreeRBX/FreeRBX";
import Maps from "./pages/Maps/Maps";
function App(){
  return(
      <BrowserRouter>
      <main className="min-h-screen bg-black text-white">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/rbx-tools" element={<RBXTools />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/disclaimer" element={<Disclaimer /> } />
          <Route path="/free-rbx" element={<FreeRBX />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App