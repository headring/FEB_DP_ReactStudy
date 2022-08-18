import NumBody from "./NumBase/NumBody";
import {Routes, Route, Link } from 'react-router-dom'
import RPCBody from "./RockPaperScissors/RPCBody";
import LotBody from "./Lottery/LotBody";

export default function App() {
  return (
    <>
      <div> 
        <div>
          <Link to="/" > Main </Link>
          <Link to="/NumBase" element={<NumBody />}> NumBase </Link>
          <Link to="/RockPaperScissors" element={<RPCBody />}> RockPaperScissors </Link>
          <Link to="/Lottery" element={<LotBody />}> Lottery </Link>
        </div>
      </div>
    
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/NumBase" element={<NumBody />}/>
        <Route path="/RockPaperScissors" element={<RPCBody />} />
        <Route path="/Lottery" element={<LotBody />} />
      </Routes>
    </>
    
    
  );
}

