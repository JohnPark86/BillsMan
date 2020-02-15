import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BillsSection from './components/BillsSection'
import '../scss/app.scss';

const AppContext = React.createContext();

const App = () => {
	const [bills, setBills] = useState([
		{
			title: 'test1',
			amount: 500
		},
		{
			title: 'test2',
			amount: 250
		},
		{
			title: 'test3',
			amount: 300
		}
	]);

	useEffect(() => {
		console.log(bills);
	}, [bills]);

	const isValidBill = (bill) => {
		return bill.title !== '' && bill.amount !== '';
	};

	const update = (value) => {
		if (isValidBill(value)) {
			let billsList = [...bills];
			billsList.push(value);
			setBills(billsList);
		}
	};

	return (
		<AppContext.Provider value={{ update: update }}>
			<div>
				<Header />
				{bills.length > 0 ? <BillsSection bills={bills} /> : null}
			</div>
		</AppContext.Provider>
	);
};

export { App, AppContext };
