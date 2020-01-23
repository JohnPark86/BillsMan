import React, { useState, useEffect } from 'react';
import Modal from './Modal/Modal';

const NewBillModal = (props) => {
	
	const renderBody = () => {
		return <p> Information about new bill will go here</p>;
	};

	const renderTitle = () => {
		return(<h4>New Bill:</h4>)
	}

	return (
		<Modal
			isVisible={props.isVisible}
			showModal={props.showModal}
			title={renderTitle()}
			body={renderBody()}
		/>
	);
};

export default NewBillModal;
