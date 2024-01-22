import React from 'react'
import  './Input.module.scss'

const Input = ({name,styles}) => {
  return <input className={name} type="text" placeholder={styles} />
}

export default Input