// import {Routes, Route } from 'react-router-dom'
// import MultiTable from './1.1-MultiTable/MultiTable';
// import WordChain from './1.2-WordChain/WordChain';
// import NumBase from './2-NumBase/NumBase';
// import Lottery from './3.1-Lottery/Lottery';
// import RPC from './3.2-RPC/RPC';
// import Sidebar from './Sidebar';
// import styled from 'styled-components';
// import TicTacToe from './4.TicTacToe/TicTacToe';
// import MarkPage from './5.MarkPage/MarkPage';

// const Global = styled.div`
//   display: flex;
//   font-size: 18px;
//   font-family: sans-serif;
//   text-align: center;
// `
// const Selector = styled.div`
//   width: 20vw;
//   padding: 100px 0;
// `

// const Gamepages = styled.div`
//   width: 80vw;
// `

// export default function App() {
//   return (
//     <Global>
//       <Selector>
//         <Sidebar />
//       </Selector>
//       <Gamepages>
//         <Routes>
//           {/* <Route path="/" /> */}
//           <Route path="/MultiTable" element={<MultiTable />}/>
//           <Route path="/WordChain" element={<WordChain />}/>
//           <Route path="/NumBase" element={<NumBase />}/>
//           <Route path="/RockPaperScissors" element={<RPC />} />
//           <Route path="/Lottery" element={<Lottery />} />
//           <Route path="/TicTacToe" element={<TicTacToe />} />
//           <Route path="/MarkPage" element={<MarkPage />} />
//         </Routes>
//       </Gamepages>
//     </Global>
//   );
// }

import React from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";
import styled from 'styled-components';

const mkdStr = `
# Markdown Editor

[Source](https://www.npmjs.com/package/@uiw/react-md-editor)
hi
---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

const Wrapper = styled.div`
  width: 1784px;
`

function App() {
  const [value, setValue] = React.useState(mkdStr);
  return (
    <Wrapper>
      <div data-color-mode="light">
        <h3>Light</h3>
        <MDEditor height={972} value={value} onChange={setValue} />
      </div>
      <h3>Auto MDEditor.Markdown</h3>
      <MDEditor.Markdown
        style={{ padding: 15 }}
        source={value}
        linkTarget="_blank"
        // previewOptions={{
        //   linkTarget: "_blank"
        // }}
      />
    </Wrapper>
  );
}

export default App;
