import React from 'react';
import WhyBuild from './homeSections/WhyBuild';
import Section1 from './Section1/Section1';
import TechSection from './techSection/TechSection';
import Procees from './proceesSection/Procees';
import OptinSection from './optinSection/OptinSection';

const HomePage = () => {
	return (
		<>
			<Section1 />
			<WhyBuild />
			<TechSection/>
			<Procees/>
			<OptinSection/>
		</>
	);
};
export default HomePage;
