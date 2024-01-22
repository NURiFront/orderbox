import React from 'react';
import scss from './Section1.module.scss';
import Arrow from '../../../assets/icons/arrow-right.svg';
import BoyImg from '../../../assets/images/man-photo.png';
import ButtonBG from '../../ui/buttons/ButtonBG'

const Section1 = () => {
	return (
		<div className={scss.layout}>
			<div className={scss.aboutTop}>
				<div className={scss.aboutTopLeft}>
					<h3>INTRODUCTION</h3>
					<div>
						<h4>TO HYDRA VR</h4>
						<img src={Arrow} alt="arrow" />
					</div>
				</div>
				<div className={scss.aboutTopRight}>
					<p>
						Vitae sapien pellentesque habitant morbi tristique senectus et netus
						et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
						amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
						aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
						in. Lectus magna fringilla urna porttitor rhoncus vitae.
					</p>
				</div>
			</div>
			<div className={scss.aboutBottom}>
				<div className={scss.aboutBottomLeft}>
					<img src={BoyImg} alt="boyImg" />
				</div>
				<div className={scss.aboutBottomRight}>
					<div>
						<h3>ABOUT</h3>
						<h4>HYDRA VR</h4>
					</div>
					<p>
						Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
						mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
						dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
						tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
						purus in massa. Est placerat in egestas erat imperdiet sed.
						Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
						etiam erat velit scelerisque in dictum non consectetur a. Laoreet
						sit amet cursus sit amet. Vel eros donec ac odio tempor orci
						dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
						bibendum. Leo a diam sollicitudi n tempor.
					</p>
          <ButtonBG>LET’S GET IN TOUCH</ButtonBG>
				</div>
			</div>
		</div>
	);
};

export default Section1;
