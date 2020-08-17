import React, { useState } from 'react';
import NewBillModal from './NewBillModal';

const billButton = {
	width: '60px',
	height: '60px',
	margin: '0 4.5em',
	backgroundColor: '#EEAA7B',
	border: '1px solid #e37222',
	justifySelf: 'end',
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
			<NewBillModal
				key='newBillModal'
				isVisible={isVisible}
				toggleModal={toggleModal}
			/>
		</>
	);
};

export default NewBillButton;
