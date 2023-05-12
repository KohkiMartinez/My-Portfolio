import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./pages/user/register";
import Login from "./pages/user/login";
import ReadAll from "./pages/item/readAll";
import ReadSingleItem from "./pages/item/readSingle";
import Create from "./pages/item/create";
import Update from "./pages/item/update";
import Delete from "./pages/item/delete";

import "./App.css";

const App = () => {
  return(
    <BrowserRouter>
      <div className="container">
      <Header />
      <Routes>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/" element={<ReadAll />} />
        <Route path="/item/:id" element={<ReadSingleItem />} />
        <Route path="/item/create" element={<Create />} />
        <Route path="/item/update/:id" element={<Update />} />
        <Route path="/item/delete/:id" element={<Delete />} />
      </Routes>
      <Footer />
      </div>

    </BrowserRouter>
  );
};

export default App;
