import React from "react";
import Td from "./Td"
import styled from "styled-components";



const Tr = ({ rowData }) => {
  return (
    <tr>
      {/* tableData의 레벨2의 배열길이만큼 만들어내는 것 */}
      {Array(rowData.length).fill().map((td) => (<Td>{''}</Td>) )}
    </tr>
  )
};

export default Tr;