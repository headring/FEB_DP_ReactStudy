import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styling = styled.div`
  display: block;
`

export default function Sidebar() {
  return (
    <Styling> 
      <div>
        <Link to="/" > Main </Link>
      </div>
      <div>
        <Link to="/MultiTable"> 1.1-MultiTable </Link>
      </div>
      <div>
        <Link to="/WordChain"> 1.2-WordChain </Link>
      </div>
      <div>
        <Link to="/NumBase"> 2.NumBase </Link>
      </div>
      <div>
        <Link to="/RockPaperScissors"> 3.1-RockPaperScissors </Link>
      </div>
      <div>
        <Link to="/Lottery"> 3.2-Lottery </Link>
      </div>
      <div>
      <Link to="/TicTacToe"> 4.TicTacToe </Link>
      </div>
    </Styling>
  )
}