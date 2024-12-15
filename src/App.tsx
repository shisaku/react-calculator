import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const displayButtonValue = (value: string) => {
    setResult(result + value);
  };

  const resetResult = () => {
    setResult("");
  };
  return (
    <table>
      <tr>
        <td colSpan={4}>
          <input type="text" value={result} id="resultScreen" readOnly />
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => displayButtonValue("7")}>7</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("8")}>8</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("9")}>9</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("÷")}>÷</Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => displayButtonValue("4")}>4</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("5")}>5</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("6")}>6</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("×")}>×</Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => displayButtonValue("1")}>1</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("2")}>2</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("3")}>3</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("-")}>-</Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => displayButtonValue("0")}>0</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue(".")}>.</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("=")}>=</Button>
        </td>
        <td>
          <Button onClick={() => displayButtonValue("+")}>+</Button>
        </td>
      </tr>
      <tr>
        <td colSpan={4}>
          <Button onClick={() => resetResult()}>AC</Button>
        </td>
      </tr>
    </table>
  );
}

export default App;
