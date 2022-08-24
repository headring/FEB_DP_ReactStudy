import React from "react";
import Tr from "./Tr"

const Table = ({ onClick, tableData, dispatch }) => {
  return (
    <table >
      {/* table data의 첫 레벨 길이(3)만큼 Tr로 만듧 */}
      {Array(tableData.length).fill().map((tr, i) => (<Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />))}
    </table>
  )
};

export default Table