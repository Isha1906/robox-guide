import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RBXTools from "./pages/RBXTools/RBXTools";
function App(){
  return(
      <BrowserRouter>
      <main className="min-h-screen bg-black text-white">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/rbx-tools" element={<RBXTools />} />

        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App