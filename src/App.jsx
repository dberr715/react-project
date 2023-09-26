import { useState } from "react";
import { MyForm } from "./components/MyForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyForm />
    </>
  );
}

export default App;
