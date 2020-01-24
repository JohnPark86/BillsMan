import React, { useState, useEffect } from 'react';

import NewBillButton from './NewBillButton';

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
			<NewBillButton />
		</div>
	);
};

export default Header;
