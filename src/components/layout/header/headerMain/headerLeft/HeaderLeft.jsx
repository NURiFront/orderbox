import React from 'react';
import scss from './HeaderLeft.module.scss';
import ButtonBG from '../../../../ui/buttons/ButtonBG';
import RightArrow from '../../../../../assets/icons/arrow-small-right.svg'

const HeaderLeft = () => {
	return (
		<div className={scss.mainLeft}>
			<div>
				<h2>
					<span>Dive</span> Into The Depths
				</h2>
				<h2>
					Of <span>Virtual Reality</span>
				</h2>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris
				eros in vitae .
			</p>
      <div className={scss.leftLastSec}>
        <ButtonBG>BUILD YOUR WORLD</ButtonBG>
        <img src={RightArrow} alt="rightArrow" />
      </div>
		</div>
	);
};

export default HeaderLeft;
