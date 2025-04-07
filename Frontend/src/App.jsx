import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Orders from "./pages/Orders"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer position="bottom-right" />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;