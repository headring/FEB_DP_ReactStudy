import { useCallback, useReducer, useEffect} from 'react';
import Table from './Table';

const initalState = {
  winner: '',
  turn: 'O',
  tableData: [['', '', ''], ['', '', ''], ['', '', '']],
  recentCell: [-1, -1],
};

// action을 따로 상수로 빼놓는 것이 좋다???? 커뮤니티 규칙
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

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
        tableData,
        recentCell: [action.row, action.cell], // 최근에 클릭한 cell을 기억
      };

    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };

      case RESET_GAME: { 
        return {
          ...state,
          turn: 'O',
          tableData: [['', '', ''], ['', '', ''], ['', '', '']],
          recentCell: [-1, -1],    
        };
      };
      default:
        return state;
  };
};

export default function TicTacToe() {
  // useReduce로 state 관리, 하나의 setState로 넘기기
  const [state, dispatch] = useReducer(reducer, initalState);
  const { tableData, turn, winner, recentCell } = state; // state를 구조분해할당

  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState(0);
  // const [tableData, setTableDate] = useState( [['', '', ''], ['', '', ''], ['', '', '']] );

  // 컴포넌트에 넣는 모든 함수는 useCallback
  const onClickTable = useCallback(() => {
    //클릭히면 O이 들어가는 것
    // 액션 -> dispatch
    dispatch({ type: SET_WINNER, winner: 'O' }) // 액션 객체를 실행(dispatch)한다 -> 이 액션을 파악하고 state를 바꿔주는 것이 reducer
  }, []);

  //useEffect -> click한 cell이 바뀔 때마다
  useEffect(() => {
    // recentCell을 구조분해 해서 row와 cell로 나눔
    const [row, cell] = recentCell; 
    if(row < 0){
      return;
    };
    let win = false;
    //이제 3칸이 채워졌는지 표시. 단, recentCell이 변동될 시에만
    //가로 줄
    if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn){
      win = true;
    };
    //세로 줄
    if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn){
      win = true;
    };
    // 대각선
    if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn){
      win = true;
    };
    if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn){
      win = true;
    };

    // 이제 승리 판별
    if (win) { // 승리 시
      dispatch({ type: SET_WINNER, winner: turn });
      dispatch({ type: RESET_GAME })
    }else{ // 무승부 -> 비동기???(4/5 영상)
      let all = true; // 칸이 다채워져 있다는 가정하에 지정. 밑에서 이를 만족하지 않으면 뒤엎을 것을 작성
      // 이제 여기서 위 변수가 맞는지 체크하는 함수
      tableData.forEach((row) => {
        row.forEach((cell) => {
          if(!cell){
            all = false;
          }
        });
      }); 
      dispatch({ type: CHANGE_TURN });
    }

  }, [recentCell]);

  return(
    <>
      <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>

  )
}