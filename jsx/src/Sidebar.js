import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <section className='sidebar'> 
      <ul>
        <Link to="/" > Main </Link>
        <Link to="/MultiTable"> 1.1-MultiTable </Link>
        <Link to="/WordChain"> 1.2-WordChain </Link>
        <Link to="/NumBase"> 2.NumBase </Link>
        <Link to="/RockPaperScissors"> 3.1-RockPaperScissors </Link>
        <Link to="/Lottery"> 3.2-Lottery </Link>
      </ul>
    </section>
  )
}