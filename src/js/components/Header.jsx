import React, { useState, useEffect } from 'react';


const headerStyle = {
	backgroundColor: '#EEAA7B',
	borderRadius: '10px',
	gridTemplateColumns: 'auto 10%'
};

const titleStyle = {
	fontFamily: 'Courier New',
	paddingLeft: '1em'
};

const Header = (props) => {
	return (
		<div className='grid' style={headerStyle}>
			<h1 style={titleStyle}>Bills Manager.</h1>
		</div>
	);
};

export default Header;
