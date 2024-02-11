import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import StateWise from "./pages/StateWise";

function App() {
  return (
    <>
      <div className="mx-auto h-fit px-4">
        <Header />
        <Home />
        <StateWise/>

      </div>
    </>
  );
}

export default App;
