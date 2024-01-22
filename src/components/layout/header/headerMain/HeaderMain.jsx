import React from 'react'
import scss from './HeaderMain.module.scss'
import HeaderRight from './headerRight/HeaderRight'
import HeaderLeft from './headerLeft/HeaderLeft'

const HeaderMain = () => {
  return (
    <div className={scss.section1}>
      <HeaderLeft/>
      <HeaderRight/>
    </div>
  )
}

export default HeaderMain