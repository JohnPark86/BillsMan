import React from 'react';
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

const Input = React.forwardRef((props, ref) => {

	return (
		<div className='grid' style={rowStyle}>
			<label style={labelStyle} htmlFor={props.idVal}>
				{props.label}
			</label>
			<input
				style={inputStyle}
				id={props.idVal}
				type='text'
				ref={ref}
				placeholder={props.placeholder}
			/>
		</div>
	);
});

Input.propTypes = {
	idVal: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	forwardedRef: PropTypes.oneOfType([
		PropTypes.func, 
		PropTypes.shape({ current: PropTypes.instanceOf(Element) })
	])
};

export default Input;
