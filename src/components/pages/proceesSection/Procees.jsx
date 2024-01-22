import React from 'react';
import scss from './Procees.module.scss';
import Arrow from '../../../assets/icons/arrow-right.svg';
import Liner from '../../../assets/wavy-line.png';
import SmallArrow from '../../../assets/icons/arrow-small-right.svg';

const Procees = () => {
	return (
		<div className={scss.proceesLayout}>
			<div className={scss.proceesTop}>
				<div className={scss.proceesTopLeft}>
					<h3>HOW WE BUILD</h3>
					<div>
						<h4>WITH HYDRA VR?</h4>
						<img src={Arrow} alt="arrow" />
					</div>
				</div>
				<div className={scss.proceesTopRight}>
					<p>
						Vitae sapien pellentesque habitant morbi tristique senectus et netus
						et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
						amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
						aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
						in. Lectus magna fringilla urna porttitor rhoncus vitae.
					</p>
				</div>
			</div>
			<div className={scss.liner}>
				<img src={Liner} alt="liner" />
			</div>
			<div className={scss.proceesBottom}>
				<div className={scss.numbers}>
					<div className={scss.blackBack}>
						<div className={scss.purBack}>
							<h1>01</h1>
						</div>
					</div>
					<div className={scss.blackBack}>
						<div className={scss.purBack}>
							<h1>02</h1>
						</div>
					</div>
					<div className={scss.blackBack}>
						<div className={scss.purBack}>
							<h1>03</h1>
						</div>
					</div>
					<div className={scss.blackBack}>
						<div className={scss.purBack}>
							<h1>04</h1>
						</div>
					</div>
				</div>
				<div className={scss.proceesFooter}>
					<div>
						<img src={SmallArrow} alt="smallarrow" />
						<h4>3D Conception & Design</h4>
					</div>
					<div>
						<img src={SmallArrow} alt="smallarrow" />
						<h4>Interaction Design</h4>
					</div>
					<div>
						<img src={SmallArrow} alt="smallarrow" />
						<h4>VR World User Testing</h4>
					</div>
					<div>
						<img src={SmallArrow} alt="smallarrow" />
						<h4>Hydra VR Deploy</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Procees;
