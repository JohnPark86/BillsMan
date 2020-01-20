import React, { useState, useEffect } from 'react';
import NewBillModal from './NewBillModal';

const NewBillButton = () => {
	const [isVisible, setIsVisibile] = useState(false);

	const showModal = () => {
		setIsVisibile(!isVisible);
	};

	if (isVisible) {
		return (
			<>
				<button className='roundedButton' onClick={showModal}>
					<span>+</span>
				</button>
				<NewBillModal isVisible={isVisible} showModal={showModal} />
			</>
		);
	} else {
		return (
			<button className='roundedButton' onClick={showModal}>
				<span>+</span>
			</button>
		);
	}
};

export default NewBillButton;
