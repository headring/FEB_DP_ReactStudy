import {Routes, Route } from 'react-router-dom'
import MultiTable from './1.1-MultiTable/MultiTable';
import WordChain from './1.2-WordChain/WordChain';
import NumBase from './2-NumBase/NumBase';
import Lottery from './3.1-Lottery/Lottery';
import RPC from './3.2-RPC/RPC';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Global = styled.div`
  display: flex;
`


export default function App() {
  return (
    <Global>
      <Sidebar />
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/MultiTable" element={<MultiTable />}/>
        <Route path="/WordChain" element={<WordChain />}/>
        <Route path="/NumBase" element={<NumBase />}/>
        <Route path="/RockPaperScissors" element={<RPC />} />
        <Route path="/Lottery" element={<Lottery />} />
      </Routes>
    </Global>
  );
}

