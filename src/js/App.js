import React, { useState } from 'react';
import Input from './components/Input';
import Header from './components/Header';
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
				{bills.length > 0
					? bills.map((bill, idx) => {
							return (
								<h2 key={`bill_${idx}`}>
									{bill.title} : {bill.amount}{' '}
								</h2>
							);
					})
					: null}
			</div>
		</AppContext.Provider>
	);
};

export { App, AppContext };
