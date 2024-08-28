import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserForm from "./UserForm";
import Map from "./Map";
import OrderStatus from "./OrderStatus";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <UserForm />
      <Map />
      <OrderStatus />
    </div>
  );
}

export default App;
