import React, { useState, useEffect } from 'react';

const BreakdownStyle = {
	borderRadius: '40px',
	backgroundColor: 'rgba(7, 136, 156, 0.7)',
	padding: '1em',
	width: '70%',
	height: '60%',
	display: 'grid',
	gridTemplateRows: '40% auto',
    gridColumnGap: '1em',
    justifySelf: 'center',
	fontFamily: 'helvetica',
	wordBreak: 'break-word'
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
			<p style={BreakdownText}>Total bills{props.outputText}</p>
			<hr />
			<p style={BreakdownTotal}>{new Intl.NumberFormat().format(totalBills)}</p>
		</div>
	);
};

export default BillsBreakdown;
