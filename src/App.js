import React, { useState } from "react";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [user, setUser] = useState(true);
  const [auth, setAuthanticate] = useState(true);

  return <>{user ? <DashBoard /> : auth ? <Login /> : <Register />}</>;
};

export default App;
