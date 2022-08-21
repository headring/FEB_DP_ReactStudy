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
          <ul>
            <li><Link to="/" > Main </Link></li>
            <li><Link to="/MultiTable" element={<MultiTable />}> 1.1-MultiTable </Link></li>
            <li><Link to="/WordChain" element={<WordChain />}> 1.2-WordChain </Link></li>
            <li><Link to="/NumBase" element={<NumBase />}> 2.NumBase </Link></li>
            <li><Link to="/RockPaperScissors" element={<RPC />}> 3.1-RockPaperScissors </Link></li>
            <li><Link to="/Lottery" element={<Lottery />}> 3.2-Lottery </Link></li>
          </ul>
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

