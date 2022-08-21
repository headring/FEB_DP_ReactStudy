import React from 'react';
import logo from './logo.svg';
import './App.css';
import MultiTable from './1.1-Multitable/MultiTable';
import WordChain from './1.2-WordChain/WordChain';

// mvp css 자동적으로 최소한의 스타일을 정해줌

// styled component
/*
변수 = styled.<htmltag>`
  style 작성
`;
*/

function App() {
  return (
    <div className="App">
      <MultiTable />
      <div>
        <WordChain />
      </div>
    </div>
  );
}

export default App;
