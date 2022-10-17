import Modal from '../Modal/Modal'
import React, { useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../../App'
import BooksItem from '../BooksItem/BooksItem'
const BooksLib = () => {
    const [data, setData] = useState()
    const {fetchArray} = useContext(Context);

    useEffect(() =>{
        if(fetchArray === undefined || fetchArray.totalItems === 0) return
       
        setData(fetchArray)
    }, [fetchArray])
    

    return (
    <>
    {
        data === undefined? <p className='nodata'>Пока тут ничего нет</p>
        : <>
            <div className="BooksArray">
                {data.items.map((e,i) => {
                
                    if(i === 11)return;
                    return <BooksItem  key={i} data={e}/>
                })}
            </div>

        </>
    }

    
    </>
  )
}

export default BooksLib
