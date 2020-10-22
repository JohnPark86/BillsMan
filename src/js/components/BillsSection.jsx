import React, { useState, useEffect } from 'react';
import BillsTable from './BillsTable';
import BillsBreakdown from './BillsBreakdown';

const BreakdownContainer = {
	width: '90%',
	margin: '0 auto',
	lineHeight: '1'	
}

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
