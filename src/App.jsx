import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RBXTools from "./pages/RBXTools/RBXTools";
import Characters from "./pages/Characters/Characters";
function App(){
  return(
      <BrowserRouter>
      <main className="min-h-screen bg-black text-white">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/rbx-tools" element={<RBXTools />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App