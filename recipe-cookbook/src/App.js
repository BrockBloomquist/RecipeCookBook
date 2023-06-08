import "./App.css";
import Coverpage from "./Pages/Coverpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import PrivateRouteLS from "./Components/PrivateRouteLS";
import Bank from "./Pages/Bank";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path="/" Component={Coverpage} />
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
                <PrivateRoute L={true}>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/bank"
              element={
                <PrivateRoute>
                  <Bank />
                </PrivateRoute>
              }
              L={true}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
