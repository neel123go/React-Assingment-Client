import { Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart/Cart";
import { Checkout } from "./Pages/Checkout/Checkout";
import { ThankYouPage } from "./Pages/ThankYouPage/ThankYouPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankYou" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
