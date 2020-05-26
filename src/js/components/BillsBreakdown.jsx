import React, { useState, useEffect } from 'react';

const BreakdownStyle = {
	borderRadius: '40px',
	backgroundColor: 'rgba(7, 136, 156, 0.7)',
	padding: '1em',
	width: '75%',
	height: '55%',
	display: 'grid',
	gridTemplateRows: '40% auto',
	wordBreak: 'break-word'
};

const BreakdownText = {
	fontFamily: 'Courier New',
    fontSize: '22px',
	alignSelf: 'center',
	justifySelf: 'end'
}

const BreakdownTotal = {
	fontFamily: 'Monaco',
    fontSize: '24px',
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
			<h2 style={BreakdownText}><u>Total bills{props.outputText}</u></h2>
			<p style={BreakdownTotal}>{new Intl.NumberFormat().format(totalBills)}</p>
		</div>
	);
};

export default BillsBreakdown;
