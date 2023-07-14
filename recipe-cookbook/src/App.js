import "./App.css";
import Coverpage from "./Pages/Coverpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import Bank from "./Pages/Bank";
import NavigationBar from "./Components/NavigationBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Coverpage />} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/bank"
            element={
              <PrivateRoute>
                <NavigationBar />
                <Bank />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
