import React, { useState, useEffect } from 'react';

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
}

const Input = (props) => {
	const [value, setValue] = useState('');

	const handleChange = (event) => {
		console.log(event.target.value);
		setValue(event.target.value);
	};

	return (
		<div className='grid' style={rowStyle}>
			<label style={labelStyle} htmlFor={props.idVal}>{props.label}</label>
			<input
				style={inputStyle}
				id={props.idVal}
				value={value}
				onChange={handleChange}
				type='text'
			/>
		</div>
	);
};

export default Input;
