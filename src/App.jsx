import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from './components/navbar/Navbar'
import Contacts from './pages/coontacts/Contacts'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}


