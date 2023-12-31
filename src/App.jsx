import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from './layouts/Header'
import { Footer } from './layouts/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Product } from './pages/Product'
import { Category } from './pages/Category'
import { UserProvider } from './context/userContext'
import { CreateUser } from './pages/CreateUser'
import { Login } from './pages/Login'
import { UserDetail } from './pages/UserDetail'
import { Cart } from './pages/Cart'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/productos/:slug" element={<Product />}/>
          <Route path="/categoria/:slug" element={<Category />}/>
          <Route path="/create-user" element={<CreateUser />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/perfil" element={<UserDetail />}/>
          <Route path="/carrito" element={<Cart />}/>
          <Route element={<NotFound />}/>
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
