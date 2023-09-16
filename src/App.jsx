import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import { ThemeProvider} from "./Components/utils/global.context"
function App() {
  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/favs" element={<Favs/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
