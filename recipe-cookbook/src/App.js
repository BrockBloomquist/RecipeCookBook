import "./App.css";
import Coverpage from "./Pages/Coverpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import PrivateRouteLS from "./Components/PrivateRouteLS";
import Bank from "./Pages/Bank";
import NavigationBar from "./Components/NavigationBar";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Coverpage />} />
            <Route
              path="/login"
              element={
                <PrivateRouteLS>
                  <Login />
                </PrivateRouteLS>
              }
            />
            <Route
              path="/signup"
              element={
                <PrivateRouteLS>
                  <Signup />
                </PrivateRouteLS>
              }
            />
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
      </AuthProvider>
    </div>
  );
}

export default App;
