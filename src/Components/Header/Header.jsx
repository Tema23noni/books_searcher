import React from 'react'
import Search from '../Search/Search'

const Header = ({getInput}) => {
  return (
    <header>
        <div className="logos">
          <a href="#" ><div className='logo'></div></a>
          <p className="logo-text">Book library</p>
        </div>
       <Search getInput={getInput}/>   
    </header>
  )
}

export default Header
