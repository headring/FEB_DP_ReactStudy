import React, { useState, useRef } from "react";
import Try from "./Try";

export default function NumBase() {
  function getNumbers() {
    // 숫자 4개를 겹치지 않는 함수 생성
    let result = "";
    while (result.length < 4) {
      let numCreate = String(Math.floor(Math.random() * 8 + 1));
      if (!result.includes(numCreate)) {
        result += numCreate;
      }
    }
    return result;
  }

  //필요한 state
  // 1. 초기 설명 혹은 볼과 스트라이크 홈런 알려주는 곳
  const [title, setTitle] = useState("숫자야구에 오신 것을 환영합니다");
  // 2.입력된 값
  const [value, setValue] = useState("");
  // 3.정답 숫자 4개
  const [answer, setAnswer] = useState(getNumbers); // 함수 정의 시에만 lazy init getNumbers()를 쓰면 재랜더링 될 때마다 재호출되기에 함수의 리턴값만 초기 할당
  // 4.몇번 시도 했는지
  const [tries, setTries] = useState([]);
  // focus유지
  const refe = useRef<any>('') // 과연 이것 type은 뭘까???

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tries.length < 9){
      // 홈런일 경우
      if (value === answer) {
        setTitle(`홈런 정답은 ${answer} , 그리고 다시 시작`);
        setTries([]);
        setAnswer(getNumbers); // 원래는 getNumbers() 호출에서 넣는 것
        setValue('')
        refe.current.focus();
      } else { 
        //볼과 strike 카운트
        let strike = 0;
        let ball = 0;
        // let out = 0;
        for (let i = 0; i < value.length; i++) {
          if (value[i] === answer[i]) {
            strike++;
          } else if (answer.includes(value[i])) {
            ball++;
          }
        }
        setTries([...tries, [`제출한 답안:${value}, ball은 ${ball}, strike는 ${strike}`]]);
        setValue('')
        refe.current.focus();
      }
    }else{
      // 기회 10번을 넘어서 다시 시작
      setTitle(`다시 시작 이전 답은 ${answer}`)
      setTries([]);
      setAnswer(getNumbers);
      setValue('')
      refe.current.focus();
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>정답: {answer}</h2>
      <form onSubmit={onSubmitForm}>
        <input ref={refe} maxLength={4} value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((el, i) => {
          return <Try key={el + i} el={el} i={i} />;
        })}
      </ul>
    </div>
  );
}