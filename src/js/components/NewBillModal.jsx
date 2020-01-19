import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

const modalBorder = {
	border: '3px solid black',
	width: '40%',
	margin: 'auto',
	borderRadius: '25px',
	top: '10em',
	padding: '2em'
};

const modalBackdrop = {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    opacity: '60%'
}

const NewBillModal = () => {
	return (
		<div>
			<div style={modalBorder}>
				<p>Hello Modal</p>
				<Input />
			</div>
		</div>
	);
};

export default NewBillModal;
