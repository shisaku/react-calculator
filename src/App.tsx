import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { useState } from 'react';

const symbols = ['+', '-', '×', '÷', '.'];
function calc(fNum: string, sNum: string, operator: string) {
    const firstNum = Number(fNum);
    const secondNum = Number(sNum);
    if (operator === '+') {
        return firstNum + secondNum;
    } else if (operator === '-') {
        return firstNum - secondNum;
    } else if (operator === '×') {
        return firstNum * secondNum;
    } else if (operator === '÷') {
        return firstNum / secondNum;
    }
}
function getOperatorPriorityRank(operator: string) {
    switch (operator) {
        case '×':
        case '÷':
            return 2; // 乗除は優先順位が高い
        case '+':
        case '-':
            return 1; // 加減は優先順位が低い
        default:
            return 0;
    }
}
function App() {
    const [result, setResult] = useState<string[]>([]);

    //クリックしたボタンを画面に表示する処理
    const displayButtonValue = (value: string) => {
        const isSymbol = symbols.includes(value);
        const isFirstChar = result.length === 0;
        const lastChar = result.at(-1) ?? '';
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
        const addInputToResult = [...result, value];
        setResult(addInputToResult);
        return;
    };
    //画面を初期化する処理
    const resetResult = () => {
        setResult([]);
    };

    //画面に表示されている計算式を計算する処理
    const calcrateDisplay = () => {
        //画面に表示されている数式を逆ポーランド記法に変換
        //1.数字だったらequation[]に格納
        //2.演算子だったらope[]に格納→スタックトップの演算子の優先順位が高ければ、equation[]に格納
        const equation = [];
        const opes: string[] = [];
        for (const item of result) {
            //演算子のとき
            if (symbols.includes(item)) {
                let stackTopElement = opes.at(-1)! ?? '';
                if (stackTopElement === '' || getOperatorPriorityRank(item) === getOperatorPriorityRank(stackTopElement)) {
                    opes.unshift(item);
                } else if (getOperatorPriorityRank(item) > getOperatorPriorityRank(stackTopElement)) {
                    opes.unshift(item);
                } else if (getOperatorPriorityRank(item) < getOperatorPriorityRank(stackTopElement)) {
                    opes.unshift(item);
                    equation.push(stackTopElement);
                    opes.pop();
                }
                //数字のとき
            } else {
                equation.push(item);
            }
        }
        for (const ope of opes) {
            equation.push(ope);
        }
        //逆ポーランド記法での計算
        const ans: string[] = [];
        for (const ele of equation) {
            if (symbols.includes(ele)) {
                const num2 = ans.pop()!;
                const num1 = ans.pop()!;
                const result = calc(num1, num2, ele)!.toString();
                ans.push(result);
            } else {
                ans.push(ele);
            }
        }
        setResult([ans[0]]);
    };
    return (
        <table>
            <tr>
                <td colSpan={4}>
                    <input type="text" value={result.join('')} id="resultScreen" readOnly />
                </td>
            </tr>
            <tr>
                <td>
                    <Button onClick={() => displayButtonValue('7')}>7</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('8')}>8</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('9')}>9</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('÷')}>÷</Button>
                </td>
            </tr>
            <tr>
                <td>
                    <Button onClick={() => displayButtonValue('4')}>4</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('5')}>5</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('6')}>6</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('×')}>×</Button>
                </td>
            </tr>
            <tr>
                <td>
                    <Button onClick={() => displayButtonValue('1')}>1</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('2')}>2</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('3')}>3</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('-')}>-</Button>
                </td>
            </tr>
            <tr>
                <td>
                    <Button onClick={() => displayButtonValue('0')}>0</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('.')}>.</Button>
                </td>
                <td>
                    <Button onClick={() => calcrateDisplay()}>=</Button>
                </td>
                <td>
                    <Button onClick={() => displayButtonValue('+')}>+</Button>
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
