import NumBody from "./NumBase/NumBody";
import {Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div> 
        <div>
          <Link to="/" >Home Sweet Home</Link>
        </div>
        <Link to="/NumBase" element={<NumBody />}>NumBase</Link>
      </div>
    
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/NumBase" element={<NumBody />}/>
      </Routes>
    </>
    
    
  );
}

