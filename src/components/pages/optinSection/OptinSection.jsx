import React from 'react'
import scss from './OptinSection.module.scss'
import Ass from '../../../assets/asss.svg'
import Input from '../../ui/inputes/Input'
import ButtonBG from '../../ui/buttons/ButtonBG'

const OptinSection = () => {
  return (
    <div className={scss.optinSectionLayout}>
      <div className={scss.optinTitle}>
        <h2>JOIN HYDRA </h2>
        <img src={Ass} alt="ass" />
        <h3>Let’s Build Your VR Experience</h3>
      </div>
      <div className={scss.optinInputs}>
        <div>
        <Input styles="First Name" name={scss.input1}/>
        <Input styles="Last Name" name={scss.input1}/>
        </div>
        <div>
        <Input styles="Email" name={scss.input1}/>
        <Input styles="Phone Number" name={scss.input1}/>
        </div>
        <Input styles="Subject" name={scss.input2}/>
        <Input styles="Tell Us Something..." name={scss.input3}/>
      </div>
      <ButtonBG>SEND TO HYDRA</ButtonBG>
    </div>
  )
}

export default OptinSection