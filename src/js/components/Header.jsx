import React, { useState, useEffect } from 'react';

import NewBillButton from './NewBillButton';

const headerStyle = {
    backgroundColor : '#EEAA7B',
    height: '4em',
    display: 'grid',
    gridTemplateColumns: 'auto 20%'
}

const Header = (props) => {

	return (
		<div style={headerStyle}>
            <div />
			<NewBillButton />
		</div>
	);
};

export default Header;