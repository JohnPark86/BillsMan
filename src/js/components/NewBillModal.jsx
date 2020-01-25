import React, { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import Input from './Input';

const NewBillModal = (props) => {
	const renderBody = () => {
		return (
			<div>
				<Input idVal='title' label='Title of new bill: ' />
				<Input idVal='amount' label='Amount owed: ' />
			</div>
		);
	};

	const renderTitle = () => {
		return <h1>New Bill:</h1>;
	};

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
