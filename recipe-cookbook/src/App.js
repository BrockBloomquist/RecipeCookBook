import "./App.css";
import Coverpage from "./Pages/Coverpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Coverpage} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
