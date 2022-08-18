import NumBody from "./2-NumBase/NumBody";
import {Routes, Route, Link } from 'react-router-dom'
import RPCBody from "./3.2-RockPaperScissors/RPCBody";
import LotBody from "./3.1-Lottery/LotBody";
import MultBody from "./1.1-MultiTable/MultBody";
import WordBody from "./1.2-WordChain/WordBody";

export default function App() {
  return (
    <>
      <div> 
        <div>
          <Link to="/" > Main </Link>
          <Link to="/MultiTable" element={<MultBody />}> 1.1-MultiTable </Link>
          <Link to="/WordChain" element={<WordBody />}> 1.2-WordChain </Link>
          <Link to="/NumBase" element={<NumBody />}> 2.NumBase </Link>
          <Link to="/RockPaperScissors" element={<RPCBody />}> 3.1-RockPaperScissors </Link>
          <Link to="/Lottery" element={<LotBody />}> 3.2-Lottery </Link>
        </div>
      </div>
    
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/MultiTable" element={<MultBody />}/>
        <Route path="/WordChain" element={<WordBody />}/>
        <Route path="/NumBase" element={<NumBody />}/>
        <Route path="/RockPaperScissors" element={<RPCBody />} />
        <Route path="/Lottery" element={<LotBody />} />
      </Routes>
    </>
    
    
  );
}

