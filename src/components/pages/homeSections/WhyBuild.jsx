import React from 'react';
import scss from '../Style.module.scss';
import { data } from '../../../data/whyBuildData';
import ButtonBG from '../../ui/buttons/ButtonBG';
import Arrow from '../../../assets/icons/arrow-right.svg';
import Line from '../../../assets/icons/line.svg'

const WhyBuild = () => {
	return (
		<section className={scss.why_build}>
			<div className={scss.whyBuildTop}>
				<div className={scss.WhyBuildTopLeft}>
					<h3>WHY BUILD</h3>
					<div>
						<h4>WITH HYDRA?</h4>
						<img src={Arrow} alt="arrow" />
					</div>
				</div>
				<div className={scss.whyBuildTopRight}>
					<p>
						Vitae sapien pellentesque habitant morbi tristique senectus et netus
						et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
						amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
						aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
						in. Lectus magna fringilla urna porttitor rhoncus vitae.
					</p>
				</div>
			</div>
			<div className={scss.cards}>
				{data.map((item, index) => (
					<div key={index} className={scss.card}>
						<img src={item.img} alt={item.title} className={scss.img1}/>
						<h1>{item.title}</h1>
            <img src={Line} alt="line" className={scss.img2}/>
						<p>{item.text}</p>
						<ButtonBG>TRY IT NOW</ButtonBG>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyBuild;
