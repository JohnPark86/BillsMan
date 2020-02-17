import React, { useState, useEffect } from 'react';
import BillsTable from './BillsTable';
import BillsBreakdown from './BillsBreakdown';

const BillsSection = (props) => {
	const [bills, setBills] = useState({
		totalBills: props.bills,
		billsDue: [],
		billsPaid: []
	});

	useEffect(() => {
		let paid = props.bills.filter((bill, idx) => {
			return bill.paid;
		});

		let due = props.bills.filter((bill, idx) => {
			return !bill.paid;
		});

		setBills((state) => ({
			totalBills: props.bills,
			billsDue: due,
			billsPaid: paid
		}));
	}, [props.bills]);

	return (
		<>
			<div>
				<BillsBreakdown
					bills={bills.billsPaid}
					outputText={' paid so far '}
				/>
				<BillsBreakdown
					bills={bills.billsDue}
					outputText={' still due '}
				/>
				<BillsBreakdown bills={bills.totalBills} outputText={' '} />
			</div>
			<BillsTable bills={props.bills} />
		</>
	);
};

export default BillsSection;
