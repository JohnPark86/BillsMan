import React, { useState, useEffect } from 'react';
import BillsTable from './BillsTable';
import BillsBreakdown from './BillsBreakdown';

const BreakdownContainer = {
	display: 'grid',
	gridTemplateColumns: '30% 30% 30%',
	width: '90%',
	margin: '2em auto 1em',
	gridGap: '3em'
};

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
			<div style={BreakdownContainer}>
				<BillsBreakdown
					bills={bills.billsPaid}
					outputText={' paid'}
				/>
				<BillsBreakdown
					bills={bills.billsDue}
					outputText={' due'}
				/>
				<BillsBreakdown bills={bills.totalBills} outputText={' '} />
			</div>
			<BillsTable bills={props.bills} />
		</>
	);
};

export default BillsSection;
