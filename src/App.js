import { Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart/Cart";
import { Checkout } from "./Pages/Checkout/Checkout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
