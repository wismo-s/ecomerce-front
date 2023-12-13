import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from './layouts/Header'
import { Footer } from './layouts/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
