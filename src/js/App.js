import React, { useState } from 'react';
import Header from './components/Header';
import BillsTable from './components/BillsTable';
import '../scss/app.scss';

const AppContext = React.createContext();

const App = () => {
	const [bills, setBills] = useState([]);

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
				{bills.length > 0 ? <BillsTable bills={bills} /> : null}
			</div>
		</AppContext.Provider>
	);
};

export { App, AppContext };
