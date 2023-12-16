import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from './layouts/Header'
import { Footer } from './layouts/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Product } from './pages/Product'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/productos/:slug" element={<Product />}/>
        <Route element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
