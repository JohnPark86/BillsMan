import React, { useState } from 'react';
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

	const toggleModal = () => {
		setIsVisibile(!isVisible);
	};

	return (
		<>
			<button
				style={billButton}
				className='roundedButton'
				onClick={toggleModal}
			>
				<span>+</span>
			</button>
			{isVisible ? (
				<NewBillModal key='newBillModal' isVisible={isVisible} toggleModal={toggleModal} />
			) : null}
		</>
	);
};

export default NewBillButton;
