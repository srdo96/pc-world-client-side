import "./App.css";
import Header from "./Page/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Page/Shared/NotFound/NotFound";
import { Footer } from "./Page/Shared/Footer/Footer";
import Home from "./Page/Home/Home/Home";
import SignUp from "./Page/Auth/SignUp/SignUp";
import SignIn from "./Page/Auth/SignIn/SignIn";
import ResetPass from "./Page/Auth/ResetPass/ResetPass";
import Items from "./Page/Home/Items/Items";
import Inventory from "./Page/Home/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home#items" element={<Items />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/inventory/:id" element={<Inventory />} />
        {/* Not Found Route */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
