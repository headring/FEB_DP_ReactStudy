import { useState, useRef } from "react";

export default function MultiTable() {
  // 영상에서 나온대로 변경되어야 할 state는 총 4개: 숫자1 & 숫자2 & 입력값 & 정답확인
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("아직 미정");
  const input = useRef();
  /*
  setState는 비동기인다???
  setState((prevState) => {
    return {
      value: ''
      first: Math.ceil(Math.random() * 9)
      등등
    };
  });
  */
  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value, 10) === first * second) {
      setValue("");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult(value + " 정답입니다!!");
      input.current.focus();
    } else setResult("다시 입력하세요");
  };

  return (
    <div className="App">
      <span>{`${first} 곱하기 ${second}는?`}</span>
      <form onSubmit={onSubmit}>
        <input
          ref={input}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력!</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
