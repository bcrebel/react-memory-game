import React from 'react'

const Bullseye = (props) => {
	return (
		<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
			<circle fill='#1d8ba5' cx='50' cy='50' r='50'/>
			<circle fill='#fa5d59' cx='50' cy='50' r='30'/>
		</svg>
	);
}

export default Bullseye