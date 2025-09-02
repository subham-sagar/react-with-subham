import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./contexapi/UserContextProvider";
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>react karooo subham app ko</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
