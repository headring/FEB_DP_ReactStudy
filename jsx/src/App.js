import {Routes, Route, Link } from 'react-router-dom'
import MultiTable from './1.1-MultiTable/MultiTable';
import WordChain from './1.2-WordChain/WordChain';
import NumBase from './2-NumBase/NumBase';
import Lottery from './3.1-Lottery/Lottery';
import RPC from './3.2-RPC/RPC';


export default function App() {
  return (
    <>
      <div> 
        <div>
          <Link to="/" > Main </Link>
          <Link to="/MultiTable" element={<MultiTable />}> 1.1-MultiTable </Link>
          <Link to="/WordChain" element={<WordChain />}> 1.2-WordChain </Link>
          <Link to="/NumBase" element={<NumBase />}> 2.NumBase </Link>
          <Link to="/RockPaperScissors" element={<RPC />}> 3.1-RockPaperScissors </Link>
          <Link to="/Lottery" element={<Lottery />}> 3.2-Lottery </Link>
        </div>
      </div>
    
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/MultiTable" element={<MultiTable />}/>
        <Route path="/WordChain" element={<WordChain />}/>
        <Route path="/NumBase" element={<NumBase />}/>
        <Route path="/RockPaperScissors" element={<RPC />} />
        <Route path="/Lottery" element={<Lottery />} />
      </Routes>
    </>
  );
}

