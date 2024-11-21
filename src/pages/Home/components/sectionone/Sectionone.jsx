import React from 'react'
import style from './Sectionone.module.scss'
import { BsPhoneVibrateFill } from "react-icons/bs";
const Sectionone = () => {
  return (
    <>
    <div className={style.container}>
            <div className={style.yazi}>
                <p>Enhancing your
                inner beauty</p>
                <button>Shop Now</button>
            </div>
           
    </div>
     <div className={style.bottom}>
              <div className={style.phone}>
              <i><BsPhoneVibrateFill /></i><p>Flat-rate Delivery</p>
              </div>
              <div className={style.phone}>
              <i><BsPhoneVibrateFill /></i><p>Support 24/7</p>
              </div>
              <div className={style.phone}>
              <i><BsPhoneVibrateFill /></i><p>Secure Payment</p>
              </div>
              <div className={style.phon}>
              <i><BsPhoneVibrateFill /></i><p>Free Return</p>
              </div>
            </div>
    </>
  )
}

export default Sectionone