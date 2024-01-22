import React from 'react'
import scss from './HeaderFooter.module.scss'
import LocationImg from '../../../../assets/icons/location.svg'
import Assets from '../../../../assets/smooth-line-top.png'
import Call from '../../../../assets/icons/phone-call.svg'
import Mail from '../../../../assets/icons/mail.svg'

const HeaderFooter = () => {
  return (
    <div className={scss.headerFooterLayout}>
      <div className={scss.loc}>
        <img src={LocationImg} alt="location"/>
        <div>
          <h3>Pay Us a Visit</h3>
          <p>Union St, Seattle, WA 98101, United States</p>
        </div>
      </div>
      <img src={Assets} alt="line" />
      <div className={scss.loc}>
          <img className={scss.locimg} src={Call} alt="call" />
          <div>
            <h3>Give Us a Cal</h3>
            <p>(110) 1111-1010</p>
          </div>
      </div>
      <img src={Assets} alt="line" />
      <div className={scss.loc}>
        <img src={Mail} alt="mail" />
        <div>
          <h3>Send Us a Message</h3>
          <p>Contact@HydraVTech.com</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderFooter