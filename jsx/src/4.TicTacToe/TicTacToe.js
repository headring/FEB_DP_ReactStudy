import { useReducer, userState } from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 0,
  tableData: [['', '', ''], ['', '', ''], ['', '', '']]
};

const reducer = (state, action) => {

} ;

export default TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // 필요 state
  // const [winner, setWinner] = userState('');
  // const [turn, setTurn] = userState(0);
  // const [tableData, setTableData] = userState([['', '', ''], ['', '', ''], ['', '', '']])



  return(
    <>
      <Table />
      {winner & <div>{winner}님의 숭리</div>}
    
    </>
  )
}