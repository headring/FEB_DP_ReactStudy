import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Main = styled.main`
  color: navy;
  padding: 96;
  border: 1px solid lightgray;
`

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Main>
        <h1>{pageTitle}</h1>
        {children}
      </Main>
    </div>
  )
}

export default Layout