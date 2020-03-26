import React, { useState, useEffect } from 'react';
import NewBillButton from './NewBillButton';

const NewBillStyle = {
	margin: '5em auto'
};

const NewButtonStyle = {
	justifySelf: 'center'
};

const NewButtonStyleText = {
    justifySelf: 'center',
    margin: '2em 0'
};

const NewBillSection = (props) => {
	return (
		<div className='grid' style={NewBillStyle}>
			<div style={NewButtonStyle}>
				<NewBillButton />
			</div>
			<div style={NewButtonStyleText}>
				<span>Please add a new bill</span>
			</div>
		</div>
	);
};

export default NewBillSection;
