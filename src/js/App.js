import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BillsSection from './components/BillsSection';
import '../scss/app.scss';

const AppContext = React.createContext();

const App = () => {
	const [bills, setBills] = useState([
		{
			title: 'test1',
			amount: 500,
			paid: true
		},
		{
			title: 'test2',
			amount: 250,
			paid: false
		},
		{
			title: 'test3',
			amount: 300,
			paid: false
		}
	]);

	useEffect(() => {
		console.log(bills);
	}, [bills]);

	const isValidBill = (bill) => {
		return bill.title !== '' && bill.amount !== '';
	};

	const addBill = (value) => {
		if (isValidBill(value)) {
			let billsList = [...bills];
			billsList.push(value);
			setBills(billsList);
		}
	};

	const update = (value, isPaid) => {
		console.log(value);
		console.log(isPaid);
	};

	return (
		<AppContext.Provider value={{ addBill: addBill, update: update }}>
			<div>
				<Header />
				{bills.length > 0 ? <BillsSection bills={bills} /> : null}
			</div>
		</AppContext.Provider>
	);
};

export { App, AppContext };
