import React, { useState, useEffect } from 'react';
import NewBillModal from './NewBillModal';

const billButton = {
	width: '60px',
	height: '60px',
	margin: '10px',
	backgroundColor: '#66b9bf',
	border: '3px solid #e37222',
	justifySelf: 'end'
};

const NewBillButton = () => {
	const [isVisible, setIsVisibile] = useState(false);

	const showModal = () => {
		setIsVisibile(!isVisible);
	};

	return (
		<div key='button'>
			<button
				style={billButton}
				className='roundedButton'
				onClick={showModal}
			>
				<span>+</span>
			</button>
			{isVisible ? (
				<NewBillModal key='newBillModal' isVisible={isVisible} showModal={showModal} />
			) : null}
		</div>
	);
};

export default NewBillButton;
