import { useState, useRef, useEffect } from "react";


export default function RPC() {
  const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
  }
  const scores = {
    가위: 1,
    바위: 0,
    보: -1
  }
  const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find((v) => v[1] === imgCoord)[0];
  };
  /*hooks는 lifecylce이 없지만 흉내낼 수 있음

  */
  //필요한 state
  // 결과
  const [result, setResult] = useState('');
  // 점수표
  const [score, setScore] = useState(0);
  //이미지좌표??
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  //useRef null값??
  const interval = useRef(null);

  //useEffect
  // useEffect(() => { //didMount, didUpdate 역할(1대 1 대응 아님)
  //   interval.current = setInterval(changeHand, 100);
  //   return () => {
  //     clearInterval(interval.current);
  //   }
  // },[imgCoord]);

  //동작함수
  const changeHand = () => {
    if (imgCoord === rspCoords.바위){
      setImgCoord(rspCoords.바위);
    }else if (imgCoord === rspCoords.가위){
      setImgCoord(rspCoords.가위);
    }else if (imgCoord === rspCoords.보){
      setImgCoord(rspCoords.보);
    }
  };  

  const onClickBtn = (choice) => {
    clearInterval(interval.current);
    const myScore = scores[choice]; // 내가 클릭한 것의 값을 저장함 예) 바위를 누르면 바위의 값을 저장
    const cpuScore = scores[computerChoice(imgCoord)] // 컴퓨터가 클릭한 것을 가져옴 
    const diff = myScore - cpuScore;
    if(diff === 0){
      setResult('비겼습니다');
    }else if([-1, 2].includes(diff)){
      setResult('이겼습니다');
      setScore((prevScore) => prevScore + 1);
    }else{
      setResult('졌습니다');
      setScore((prevScore) => prevScore - 1);
    }
    setTimeout(() => {
      interval.current = setInterval
    })
  };

  // 렌더링 구간
  return (
    <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}>
      <button id="scissor" className="btn" onClick={onClickBtn('가위')} >가위</button>
      <button id="rock" className="btn" onClick={onClickBtn('바위')} >바위</button>
      <button id="paper" className="btn" onClick={onClickBtn('보')} >보</button>
      <div className="result_area">
        <div className="current_result">결과: {result}</div>
        <div className="current_score">현재 점수는: {score}</div>
      </div>
    </div>
  );
}