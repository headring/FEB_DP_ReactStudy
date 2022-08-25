import React, { useCallback } from "react";
import styled from "styled-components";
import { CLICK_CELL, CHANGE_TURN } from "./TicTacToe";


const TableCell = styled.td`
  border: 1px solid black;  
`
const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  // 지금 dipatch를 TicTacToe에서 여러번 걸쳐서 받아오는 불편함이 있기에 나중에 context API로 이를 해결
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    // cell을 클릭하면 이게 몇번재 칸인지 알려주는 action
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: CHANGE_TURN });
  }, [cellData]);

  return (
    <TableCell onClick={onClickTd}>{cellData}</TableCell>
  )

};

export default Td;