import React, { useContext, useRef } from 'react';
import Modal from './Modal/Modal';
import Input from './Input';
import { AppContext } from '../App';

const NewBillModal = (props) => {
	const titleRef = useRef(null);
	const amountRef = useRef(null);
	const context = useContext(AppContext);

	const onSubmit = () => {
		let newTitle = titleRef.current.value;
		let newID = newTitle + '_' + Math.floor(Math.random() * Math.floor(100));

		let newBill = {
			id: newID,
			title: newTitle,
			amount: parseInt(amountRef.current.value)
		};

		context.addBill(newBill);
		props.toggleModal();
	};

	const renderBody = function() {
		return (
			<div>
				<Input
					idVal='title'
					label='Title of new bill: '
					ref={titleRef}
					placeholder={'Enter a name for the new bill'}
				/>
				<Input
					idVal='amount'
					label='Amount owed: '
					ref={amountRef}
					placeholder={'0'}
				/>
			</div>
		);
	};

	const renderTitle = () => {
		return <h2>New Bill:</h2>;
	};

	return (
		<Modal
			key={'modal'}
			isVisible={props.isVisible}
			toggleModal={props.toggleModal}
			title={renderTitle()}
			body={renderBody()}
			onSubmit={onSubmit}
		/>
	);
};

export default NewBillModal;
