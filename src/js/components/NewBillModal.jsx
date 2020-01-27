import React, { useState, useEffect, useContext } from 'react';
import Modal from './Modal/Modal';
import Input from './Input';
import { AppContext } from '../App';

const NewBillModal = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState(0);
	const context = useContext(AppContext);

	const handleTitleChange = (title) => {
		console.log('t: ', title);
		setTitle(title);
	};

	const handleAmountChange = (amount) => {
		console.log('a: ', amount);
		setAmount(amount);
	};

	const onSubmit = () => {
		let newBill = {
			title: title,
			amount: amount
		};

		context.update(newBill);
	};

	const renderBody = () => {
		return (
			<div key='modalbody'>
				<Input
					key={'title1'}
					handleChange={handleTitleChange}
					idVal='title'
					label='Title of new bill: '
					value={title}
				/>
				<Input
					key={'amount1'}
					handleChange={handleAmountChange}
					idVal='amount'
					label='Amount owed: '
					value={amount}
				/>
			</div>
		);
	};

	const renderTitle = () => {
		return <h1>New Bill:</h1>;
	};

	return (
		<Modal
			key={'modal'}
			isVisible={props.isVisible}
			showModal={props.showModal}
			title={renderTitle()}
			body={renderBody()}
			onSubmit={onSubmit}
		/>
	);
};

export default NewBillModal;
