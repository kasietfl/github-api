import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import Users from "./pages/Users";
import Login from "./pages/Login";

import "./app.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);


  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={user ? <Home user={user}/> : <Welcome/>} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/repositories"
            element={user && <Repos user={user}/>}
          />
          <Route
            path="/users"
            element={<Users/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
