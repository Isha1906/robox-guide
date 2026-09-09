import { BrowserRouter } from "react-router-dom";

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