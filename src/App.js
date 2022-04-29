import logo from "./logo.svg";
import "./App.css";
import Header from "./Page/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
