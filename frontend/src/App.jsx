import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="max-w-[1400px] p-5 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
