import React from 'react';
import scss from './Footer.module.scss';
import Logo from '../../../assets/logo.png';
import Line from '../../../assets/smooth-line-top.png';
import ButtonBG from '../../ui/buttons/ButtonBG';
import FaceBook from '../../../assets/icons/facebook.svg';
import Twitter from '../../../assets/icons/twitter.svg';
import LinkedIn from '../../../assets/icons/linkedin.svg';
import YouTube from '../../../assets/icons/youtube.svg';
import InstaGramm from '../../../assets/icons/instagram.svg';
import Pinterest from '../../../assets/icons/pinterest.svg';
import LongLine from '../../../assets/longLine.svg'
const Footer = () => {
	return (
		<footer className={scss.footer}>
			<div className={scss.footerNav}>
				<img className={scss.logo} src={Logo} alt="logo" />
				<img src={Line} alt="line" />
				<div className={scss.footerDiv1}>
					<p>ABOUT</p> <p>SERVICES</p> <p>TECHNOLOGIES</p>
					<p> HOW TO</p> <p>JOIN HYDRA</p>
				</div>
				<img src={Line} alt="line" />
				<div className={scss.footerDiv2}>
					<p>F.A.Q </p>
					<p>SITEMAP</p> <p>CONDITIONS</p> <p>LICENSES</p>
				</div>
				<img src={Line} alt="line" />
				<div className={scss.footerLastSec}>
					<h4>SOCIALIZE WITH HYDRA</h4>
					<div className={scss.footerIcons}>
						<img src={FaceBook} alt="facebook" />
						<img src={Twitter} alt="twitter" />
						<img src={LinkedIn} alt="linkedIn" />
						<img src={YouTube} alt="youtube" />
						<img src={InstaGramm} alt="insta" />
						<img src={Pinterest} alt="pinterest" />
					</div>
					<ButtonBG>BUILD YOUR WORLD</ButtonBG>
				</div>
			</div>
      <img src={LongLine} alt="longline" />
			<h3>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </h3>
		</footer>
	);
};
export default Footer;
