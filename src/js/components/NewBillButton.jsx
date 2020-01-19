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
				<button onClick={showModal}>New Bill</button>
				<NewBillModal />
			</>
		);
	} else {
		return <button onClick={showModal}>New Bill</button>;
	}
};

export default NewBillButton;
