import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RBXTools from "./pages/RBXTools/RBXTools";
import Characters from "./pages/Characters/Characters";
import Disclaimer from "./components/Disclaimer";
import FreeRBX from "./pages/FreeRBX/FreeRBX";
import Maps from "./pages/Maps/Maps";
import Clothing from "./pages/RBXTools/Clothing";
import Heads from "./pages/RBXTools/Heads";
import Accessories from "./pages/RBXTools/Accessories";
import Animation from "./pages/RBXTools/Animation";
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
          <Route path="/rbx-tools/clothing" element={<Clothing />} />
          <Route path="/rbx-tools/heads" element={<Heads />} />
          <Route path="/rbx-tools/accessories" element={<Accessories />} />
          <Route path="/rbx-tools/animations" element={<Animation />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App