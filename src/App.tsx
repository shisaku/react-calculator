import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const onClickButton = (value: string) => {
    setResult(result + value);
  };
  return (
    <table>
      <tr>
        <td colSpan={3}>
          <input type="text" value={result} id="resultScreen" readOnly />
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => onClickButton("7")}>7</Button>
        </td>
        <td>
          <Button onClick={() => onClickButton("8")}>8</Button>
        </td>
        <td>
          <Button onClick={() => onClickButton("9")}>9</Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => onClickButton("4")}>4</Button>
        </td>
        <td>
          <Button onClick={() => onClickButton("5")}>5</Button>
        </td>
        <td>
          <Button onClick={() => onClickButton("6")}>6</Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => onClickButton("1")}>1</Button>
        </td>
        <td>
          <Button onClick={() => onClickButton("2")}>2</Button>
        </td>
        <td>
          <Button onClick={() => onClickButton("3")}>3</Button>
        </td>
      </tr>
    </table>
  );
}

export default App;
