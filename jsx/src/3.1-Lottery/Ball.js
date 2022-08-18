import React from 'react';
import { memo } from 'react';

// memo는 어떻게 적용하는 거지? 이거 memo 적용 안했는데 왜 되지?????
export default function Ball ({ number }) {
  let background;
  if (number <= 10){
    background = 'red';
  }else if (number <= 20){
    background = 'orange';
  }else if (number <= 30){
    background = 'yellow';
  }else if (number <= 40){
    background = 'green';
  }else if (number <= 50){
    background = 'blue';
  }else if (number <= 60){
    background = 'white'; //남색????
  }else{
    background = 'violet'
  }
  return(
    <div className="ball" style={{ background }}>{number}</div>
  )
};