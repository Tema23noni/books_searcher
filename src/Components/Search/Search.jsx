import React from 'react'

import { useEffect, useContext } from 'react';
import { useState } from 'react'
import { Context } from '../../App';
const Search = () => {
  const [valueUser, setValueUser] = useState('');
  const {setSearch} = useContext(Context);
  
  return (
    <div className='search'>

    <input
      className="search-input"
      type="text"
      onChange={(e) => setValueUser(e.target.value)}
      value={valueUser}
     />
    <button onClick={() => {setSearch(valueUser); setValueUser('')}} className="search-btn">find</button>
  
  </div>
  )
}

export default Search
