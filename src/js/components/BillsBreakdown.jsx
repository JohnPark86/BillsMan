import React, { useState, useEffect } from 'react';

const BreakdownStyle = {
	borderRadius: '25px',
	backgroundColor: 'rgba(7, 136, 156, 0.7)',
	padding: '1em',
	width: '70%',
	display: 'grid',
	gridTemplateColumns: '60% auto',
    gridColumnGap: '2em',
    justifySelf: 'center',
    fontFamily: 'helvetica'
};

const BreakdownText = {
    fontSize: '22px',
    alignSelf: 'center'
}

const BreakdownTotal = {
    fontSize: '26px',
    alignSelf: 'center'
}

const BillsBreakdown = (props) => {
	const [totalBills, setTotalBills] = useState(0);

	useEffect(() => {
		let total = 0;
		props.bills.forEach((bill) => {
			total += bill.amount;
		});
		setTotalBills(total);
	}, [props.bills]);

	return (
		<div style={BreakdownStyle}>
			<p style={BreakdownText}>Total bills{props.outputText}this month </p>
			<p style={BreakdownTotal}>{totalBills}</p>
		</div>
	);
};

export default BillsBreakdown;
