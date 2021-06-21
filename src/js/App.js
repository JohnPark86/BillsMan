import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BillsSection from './components/BillsSection';
import NewBillSection from './components/NewBillSection';
import bills from '../data/bills.json';
import '../scss/app.scss';

const AppContext = React.createContext();

const App = () => {
	const [bills, setBills] = useState(bills);

	useEffect(() => {
		console.log('use effect: ', bills);
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
		let updatedBills = bills.map((bill) => {
			if (bill.id === value.id) {
				bill['paid'] = isPaid;
			}
			return bill;
		});
		setBills(updatedBills)
	};
	
	return (
		<AppContext.Provider value={{ addBill: addBill, update: update }}>
			<div>
				<Header />
				{bills.length > 0 ? (
					<BillsSection bills={bills} />
				) : (
					<NewBillSection />
				)}
			</div>
		</AppContext.Provider>
	);
};

export { App, AppContext };
