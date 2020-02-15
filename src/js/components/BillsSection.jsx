import React, { useState, useEffect } from 'react';
import BillsTable from './BillsTable';
import BillTotals from './BillTotals';

const BillsSection = (props) => {
	useEffect(() => {}, []);

	return (
		<>
			<BillTotals bills={props.bills} />
			<BillsTable bills={props.bills} />
		</>
	);
};

export default BillsSection;
