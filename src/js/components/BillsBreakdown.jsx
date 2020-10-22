import React, { useState, useEffect } from 'react';

const BreakdownStyle = {
	width: '90%',
	display: 'flex',
	justifyContent: 'space-between',
	wordBreak: 'break-word'
};

const BreakdownText = {
	fontFamily: 'Courier New',
    fontSize: '22px',
	alignSelf: 'center',
	justifySelf: 'start'
}

const BreakdownTotal = {
	fontFamily: 'Monaco',
    fontSize: '24px',
	alignSelf: 'center',
	justifySelf: 'end'
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
			<h2 style={BreakdownText}><u>Total bills{props.outputText} : </u></h2>
			<p style={BreakdownTotal}> ... {new Intl.NumberFormat().format(totalBills)}</p>
		</div>
	);
};

export default BillsBreakdown;
