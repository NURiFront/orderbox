import React from 'react'
import scss from './TechSection.module.scss'
import TechImg from '../../../assets/images/last-photo.png'
import PosF1 from '../../../assets/images/hydra-tech-1.png'
import PosF2 from '../../../assets/images/hydra-tech-2.png'
import PosF3 from '../../../assets/images/hydra-tech-3.png'
import PosF4 from '../../../assets/images/hydra-tech-4.png'
import AssetDown from '../../../assets/icons/chevron-small-down.svg'


const TechSection = () => {
  return (
    <div className={scss.techSectionLayout}>
      <div className={scss.techSectionTop}>
        <img src={TechImg} alt="techImg" />
      </div>
      <div className={scss.positionImages}>
        <img src={PosF1} alt="pos1" />
        <img src={PosF2} alt="pos1" />
        <img src={PosF3} alt="pos1" />
        <img src={PosF4} alt="pos1" />
      </div>
      <div className={scss.posFixed}>
          <h2>TECHNOLOGIES & HARDWARE</h2>
          <h3>USED BY HYDRA VR.</h3>
          <div className={scss.assetsBack}>
            <div className={scss.assets}>
            <img src={AssetDown} alt="asset" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default TechSection