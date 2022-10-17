import React, { useContext } from 'react'
import { Context } from '../../App';
import cl from "./Modal.module.css"
const Modal = () => {
  const {active, setActive, modalData} =useContext(Context)

 
  let actMod = [cl.modal];
  if(active){
    actMod.push(cl.active)
  }
  if(Object.keys(modalData).length == 0){
    return
  }
  console.log(modalData)
  return (
    <div className={actMod.join(' ')} onClick={() => setActive(false)}>
        <div className={cl.modal__context} onClick={(e) => e.stopPropagation()}>
          <div onClick={() => setActive(false)} className={cl.close}>X</div>
          <div className={cl.title}>
            <p className={cl.name}>{modalData.volumeInfo.title}</p>
          </div>
          <div className={cl.c}> 
            <div className={cl.cat}>
            <div>
              <img className={cl.img} src={modalData.volumeInfo.imageLinks === undefined? '':modalData.volumeInfo.imageLinks.thumbnail}   />
            </div>
            <div className={cl.catigor}>
              <p>Автор : {!modalData.volumeInfo.authors? 'Неизвестно' : modalData.volumeInfo.authors[0] }</p>
              <p>Количество страниц: {!modalData.volumeInfo.pageCount ? 'Неизвестно' : modalData.volumeInfo.pageCount}</p>
              <p>Язык: {!modalData.volumeInfo.language? 'Неизвестно':modalData.volumeInfo.language}</p>
              <p>Категория: {!modalData.volumeInfo.categories? 'Неизвестно': modalData.volumeInfo.categories}</p>
            </div>
            </div>

            <div className={cl.about}>
              <div className={cl.about__text}>
                <p>{!modalData.volumeInfo.description? 'Неизвестно': modalData.volumeInfo.description}</p>
              </div>
              {
              !modalData.saleInfo.buyLink
                ? ''
                :<div className={cl.buy}>
                  <p>
                    Купить за {!modalData.saleInfo.listPrice? 'Неизвестно':`${modalData.saleInfo.listPrice.amount} ${modalData.saleInfo.listPrice.currencyCode}`}              
                  </p>
                  <a href={modalData.saleInfo.buyLink}>Купить</a>
                </div>
            }
            </div>

          </div>
        </div>
 
    </div>
  )
}

export default Modal

