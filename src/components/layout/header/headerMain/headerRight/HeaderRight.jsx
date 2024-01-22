import React from 'react'
import scss from './HeaderRight.module.scss'
import GirlImg from '../../../../../assets/images/girl-photo.png'

const HeaderRight = () => {
  return (
    <div>
      <img className={scss.girlimg} src={GirlImg} alt="girl" />
    </div>
  )
}

export default HeaderRight