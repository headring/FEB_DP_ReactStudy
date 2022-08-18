import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Ball from "./Ball";

// 로또 당첨 숫자(셔플????)
function getWinNumbers() {
  console.log('getWinNumbers'); // 지금 이게 전체를 re-rendering해서 이것이 콘솔창에 계속 찍힘
  // 왜 45개?
  const candidate = Array(99).fill().map((v, i) => i + 1);
  const shuffle = [];
  while(candidate.length > 0){
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

export default function LotBody() {
  //필요한 state
  
  //0. useMemo 복잡한 함수 결과값을 기억
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  //1. winNumbers 
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  //2. WinBalls
  const [winBalls, setWinBalls] = useState([]);
  //3. bonus
  const [bonus, setBonus] = useState(null);
  //4. redo
  const [redo, setRedo] = useState(false);
  //5. useRef -> 일반 값을 기억
  const timeouts = useRef([]);

  //useEffect
  useEffect(() => {
    console.log('useEffect')
    for(let i = 0; i < winNumbers.length - 1; i++){
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      })
    }
  }, [timeouts.current]) 
  
  //필요한 함수
  // useCallBack 적용: 자식한테 props로 함수를 넘길 때 꼭 사용필요
  const onClickRedo = useCallback(() => {
    console.log('onClickRedo');
    console.log(winNumbers)
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  });

  return(
    <div>
      <div>당첨 숫자</div>
      <div id="result area">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스</div>
      {bonus && <Ball number={bonus} />}
      <button onClick={onClickRedo} >한번 더?</button>
    </div>
  )
}