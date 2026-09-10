import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RBXTools from "./pages/RBXTools/RBXTools";
import Characters from "./pages/Characters/Characters";
import Disclaimer from "./components/Disclaimer";
function App(){
  return(
      <BrowserRouter>
      <main className="min-h-screen bg-black text-white">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/rbx-tools" element={<RBXTools />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/disclaimer" element={<Disclaimer /> } />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App