import React, { useState, useRef } from "react";

export default function MultiTable() {
  // hook의 type을 지정
  // https://velog.io/@jjburi/TypeScript-useState%EC%97%90%EC%84%9C-type-%EC%A7%80%EC%A0%95
  // 타입추론
  /*
  변수마다 알려주는 것 :number
  변수에 타입을 쓰지는 않지만 뒤에 할당된 것이 문자 또는 숫자로 지정되어 있기에 알아서 추론하여 값을 지정

  특정케이스:뒤에 할당을 안할 때 지정헤줘야 함
  */
  // 영상에서 나온대로 변경되어야 할 state는 총 4개: 숫자1 & 숫자2 & 입력값 & 정답확인
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("아직 미정");
  const input = useRef<any>();
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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { // 이벤트가 어느 것을 지징하는지 
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
