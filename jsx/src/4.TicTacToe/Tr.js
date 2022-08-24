import React from "react";
import Td from "./Td"
import styled from "styled-components";

const TableRow = styled.tr`
  border: 1px solid black;
`

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <TableRow>
      {/* tableData의 레벨2의 배열길이만큼 만들어내는 것 */}
      {Array(rowData.length).fill().map((td, i) => (<Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}  >{''}</Td>) )}
    </TableRow>
  )
};

export default Tr;