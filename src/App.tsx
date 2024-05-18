
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Blog from './pages/Blog'
import { InstallingWSL } from './pages/blogs/InstallingWSL'


function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blogs/InstallingWSL" element={<InstallingWSL />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}



export default App
