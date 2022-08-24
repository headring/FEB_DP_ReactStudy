import { useCallback, useReducer} from 'react';
import Table from './Table';

const initalState = {
  winner: '',
  turn: 'O',
  tableData: [['', '', ''], ['', '', ''], ['', '', '']],

};

// action을 따로 상수로 빼놓는 것이 좋다???? 커뮤니티 규칙
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const SET_TURN = 'SET_TURN';

// 이 reducer안에서 state를 어떻게 바꿀지 적어줌
const reducer = (state, action) => {
  switch (action.type) {

    case SET_WINNER: // action을 구별하고
      return { // 기존 inital state를 바꾸지 않고 새로운 객체를 만들어서 바뀐 값을 업데이트
        // state.winner = action.winner 이러면 안 됨
        ...state,
        winner: action.winner,
      };

    case CLICK_CELL: 
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; //immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
      };

    case SET_TURN:
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
  }
}

export default function TicTacToe() {
  // useReduce로 state 관리, 하나의 setState로 넘기기
  const [state, dispatch] = useReducer(reducer, initalState);


  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState(0);
  // const [tableData, setTableDate] = useState( [['', '', ''], ['', '', ''], ['', '', '']] );

  // 컴포넌트에 넣는 모든 함수는 useCallback
  const onClickTable = useCallback(() => {
    //클릭히면 O이 들어가는 것
    // 액션 -> dispatch
    dispatch({ type: SET_WINNER, winner: 'O' }) // 액션 객체를 실행(dispatch)한다 -> 이 액션을 파악하고 state를 바꿔주는 것이 reducer
  }, []);

  return(
    <>
      <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>

  )
}