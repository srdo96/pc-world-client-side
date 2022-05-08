import "./App.css";
import Header from "./Page/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Page/Shared/NotFound/NotFound";
import { Footer } from "./Page/Shared/Footer/Footer";
import Home from "./Page/Home/Home/Home";
import SignUp from "./Page/Auth/SignUp/SignUp";
import SignIn from "./Page/Auth/SignIn/SignIn";
import ResetPass from "./Page/Auth/ResetPass/ResetPass";
import Inventory from "./Page/Home/Inventory/Inventory";
import RequireAuth from "./Page/Auth/RequireAuth/RequireAuth";
import Blogs from "./Page/Blogs/Blogs";
import { Toaster } from "react-hot-toast";
import ManageInventories from "./Page/ManageInventories/ManageInventories/ManageInventories";
import AddNewItem from "./Page/ManageInventories/AddNewItem/AddNewItem";
import MyItems from "./Page/MyItems/MyItems";

function App() {
  return (
    <div className="App">
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/manageInventories"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/addNewItem"
          element={
            <RequireAuth>
              <AddNewItem />
            </RequireAuth>
          }
        />
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        {/* Not Found Route */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
