import { useState, useRef } from "react";

export default function WordBody() {
  // 필요한 hooks 1) 시작단어 2)입력값 3)결과

  const generateWord = () => {
    let arr = [
      "가",
      "나",
      "다",
      "라",
      "마",
      "바",
      "사",
      "아",
      "자",
      "차",
      "카",
      "타",
      "파",
      "하"
    ];
    let ranNum = Math.floor(Math.random() * arr.length);
    return arr[ranNum];
  };

  const [input, setInput] = useState("");
  const [givenWord, setGivenWord] = useState(generateWord());
  const [result, setResult] = useState("답안 기다리는 중...");
  const refe = useRef("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (givenWord === input[0]) {
      setGivenWord(input[input.length - 1]);
      setResult("정답입니다. 다음은...");
      setInput("");
      refe.current.focus();
    } else {
      setResult("다시 입력");
      refe.current.focus();
    }
  };

  return (
    <div className="App">
      <span>주어진 단어는: "{givenWord}"</span>
      <form onSubmit={onSubmit}>
        <input
          ref={refe}
          type="string"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>제출</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
