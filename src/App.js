import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Category" element={ <Category /> } />
      <Route path="/Checkout" element={ <Checkout /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
