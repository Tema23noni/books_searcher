import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'

import Modal from '../Modal/Modal'

const BooksItem = ({data}) => {
  const {setModalData, setActive} = useContext(Context)
  const openModal = () =>{
    setActive(true)
    setModalData(data);
  }
    if(data === undefined)return;
  return (
    <>
    <div className='BooksItem'>

        <div className='imgCenter'>
            <img className='imgBook' src={data.volumeInfo.imageLinks === undefined? 'https://img.icons8.com/material-rounded/96/000000/hide.png':data.volumeInfo.imageLinks.thumbnail}   />
        </div>
        <div className='namesAut'>
           <div className='nameBook'><strong>Название :</strong> {data.volumeInfo.title}</div>

            <div className='authorBook'><strong>Автор :</strong> {!data.volumeInfo.authors? 'Неизвестно' : data.volumeInfo.authors[0] }</div>
        </div>
        <button onClick={openModal}  className='about'>Краткий обзор</button>
    </div>
     
    </>
  )
}

export default BooksItem
