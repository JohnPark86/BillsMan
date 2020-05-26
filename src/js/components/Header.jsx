import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const HEADER_STYLE = {
	backgroundColor: '#EEAA7B',
	borderRadius: '10px',
};

const TITLE_CONTAINER = {
	padding: '0em 2em'
}

const TITLE_STYLE = {
	fontFamily: 'Courier New',
	marginBottom: '10px',
};

const DATE_STYLE = {
	fontFamily: 'Monaco',
	fontSize: '18px',
	letterSpacing: '0.3em',
	lineHeight: '1',
};

const Header = (props) => {
	let today = format(new Date(), "EEEE 'the' do 'of' MMMM");

	return (
		<div style={HEADER_STYLE}>
			<div style={TITLE_CONTAINER}>
				<h1 style={TITLE_STYLE}>Bills Manager.</h1>
				<div>
					<span style={DATE_STYLE}>{today}</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
