import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(5);

  //let counter = 5

  const addValue = () => {
    if (counter >= 20) {
      return;
    }
    //counter = counter + 1;
    setcounter((prevcounter)=>prevcounter+1)  //we use here a callback
    // setcounter((prevcounter)=>prevcounter+1)
    // setcounter((prevcounter)=>prevcounter+1)
    // setcounter((prevcounter)=>prevcounter+1)
    //console.log(`value added ${counter}`)
  };

  const removeValue = () => {
    if (counter <= 0) {
      return;
    }
    counter -= 1;
    setcounter(counter);
    //console.log(`removed ${counter}`)
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
