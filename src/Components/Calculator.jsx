import React from "react";

function Calculator() {
  // the list will be an array of numbers and operators, ex. [10, "+", 5]
  const [list, setList] = React.useState([]);
  // when append is set to true, a new element is pushed to the list,
  // when it's set to false it means that it must change the last number
  const [append, setAppend] = React.useState(true);
  // the result at the last "=" button click
  const [result, setResult] = React.useState();
  // for the "AC" click
  const reset = () => {
    setList([]);
    setAppend(true);
  };

  // every number and operator click must invoke this callback
  const appendItem = item => {
    // the original list isn't mutated
    let newList = [...list];
    // if the user clicked a number button...
    if (typeof item === "number") {
      let number = item;
      if (append) {
        // the number is appended to the list
        newList.push(item);
        setAppend(false);
      } else {
        // the last aded number must be updated
        number = newList[newList.length - 1];
        number = number * 10 + item;
        newList[newList.length - 1] = number;
      }
      setList(newList);
    } else {
      // the operator must be appended...
      setList([...list, item]);
      // ... and the next number too
      setAppend(true);
    }
  };
  const calculateResult = () => {
    const result = list.reduce((acc, item, i, array) => {
      if (typeof item === "number") {
        if (i === 0) {
          return item;
        } else {
          const operator = array[i - 1];
          switch (operator) {
            case "+":
              return acc + item;
            default:
              return acc;
          }
        }
      }
      return acc;
    }, 0);
    setResult(result);
  };

  return (
    <div>
      <div>
        <input value={list.join("")} readOnly />
        <input value={result} readOnly />
      </div>
      <div>
        <button onClick={reset} label="AC" value="clear">
          AC
        </button>
      </div>
      <div>
        <button onClick={() => appendItem(7)} value="7">
          7
        </button>
        <button onClick={() => appendItem(8)} value="8">
          8
        </button>
        <button onClick={() => appendItem(9)} value="9">
          9
        </button>
      </div>
      <div>
        <button onClick={() => appendItem(6)} value="6">
          6
        </button>
        <button onClick={() => appendItem(5)} value="5">
          5
        </button>
        <button onClick={() => appendItem(4)} value="4">
          4
        </button>
      </div>
      <div>
        <button onClick={() => appendItem(3)} value="3">
          3
        </button>
        <button onClick={() => appendItem(2)} value="2">
          2
        </button>
        <button onClick={() => appendItem(1)} value="1">
          1
        </button>
        <button onClick={() => appendItem("+")} value="addition">
          +
        </button>
      </div>
      <div>
        <button onClick={() => appendItem(0)} label="0" value="0">
          0
        </button>
        <button onClick={() => calculateResult()} label="=" value="equal">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;