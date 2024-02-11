import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import StateWise from "./pages/StateWise";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app mx-auto h-fit px-4">
        <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/stateWise" element={<StateWise/>}/>
      </Routes>
    </div>
  );
}

export default App;
