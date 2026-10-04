
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Products from "./components/pages/Products";
import DefaultLayout from "./components/Default-Layout/DefaultLayout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}