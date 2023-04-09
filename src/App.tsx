import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import UserLayout from "./components/layout/user"
import HomePage from "./pages/home"
import DetailPage from "./pages/deatil"
import Signup from "./pages/signup"
import Signin from "./pages/signin"
import AdminLayout from "./components/layout/admin"
import AdminHome from "./pages/admin/home"
import ProductUpdate from "./pages/product-update"
// import Dashboard from "./pages/dashboard"


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/" element={<UserLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="product/:id" element={<DetailPage/>}/>
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<AdminHome/>}/>
        <Route path="product/:id" element={<ProductUpdate/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
