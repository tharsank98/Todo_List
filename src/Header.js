import React from 'react'

function Header(props) {
  return (
    <header>
      <h1>{props.tittle}</h1>
      </header>
  )
}

Header.defaultProps = {
  tittle :"To do List"
}

export default Header