import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { useState } from "react";

const symbols = ["+", "-", "×", "÷", "."];
function App() {
  const [result, setResult] = useState<string[]>([]);

  //クリックしたボタンを画面に表示する処理
  const displayButtonValue = (value: string) => {
    const isSymbol = symbols.includes(value);
    const isFirstChar = result.length === 0;
    const lastChar = result.at(-1) ?? "";
    const hasSymbolLastChar = symbols.includes(lastChar);

    // 一文字目が記号の時、表示しないようにする処理
    if (isFirstChar && isSymbol) {
      setResult([]);
      return;
    }
    // 記号が2つ続いたとき、最後の記号を新しい記号に置き換える処理
    if (isSymbol && hasSymbolLastChar) {
      const replaceResult = [...result];
      replaceResult[replaceResult.length - 1] = value;
      setResult(replaceResult);
      return;
    }
    // 計算結果を出力
    const newArray = [...result, value];
    setResult(newArray);
    return;
  };
  //画面を初期化する処理
  const resetResult = () => {
    setResult([]);
  };

  //画面に表示されている計算式を計算する処理
  const calcrateDisplay = () => {};
  return (
    <table>
      <tr>
        <td colSpan={4}>
          <input
            type="text"
            value={result.join("")}
            id="resultScreen"
            readOnly
          />
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
