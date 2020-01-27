import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const inputStyle = {
	borderRadius: '5px',
	height: '3em'
};

const rowStyle = {
	gridTemplateColumns: '25% auto',
	gridGap: '1em',
	marginTop: '1em',
	marginBottom: '2em'
};

const labelStyle = {
	fontSize: '22px'
};

const Input = (props) => {

	const handleChange = (event) => {
		props.handleChange(event.target.value);
	};

	return (
		<div tabIndex="-1" className='grid' style={rowStyle}>
			<label style={labelStyle} htmlFor={props.idVal}>
				{props.label}
			</label>
			<input
				tabIndex="0"
				style={inputStyle}
				id={props.idVal}
				value={props.value}
				onChange={handleChange}
				type='text'
			/>
		</div>
	);
};

Input.propTypes = {
	idVal: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default Input;
