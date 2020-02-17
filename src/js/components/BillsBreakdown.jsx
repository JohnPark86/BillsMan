import React, { useState, useEffect } from 'react';

const BillsBreakdown = (props) => {
    const [totalBills, setTotalBills] = useState(0);

	useEffect(() => {
        let total = 0;
        props.bills.forEach((bill)=>{
            total+= bill.amount
        })
        setTotalBills(total)
    }, [props.bills]);

return(<p>Your total bills{props.outputText}this month : {totalBills}</p>)
};

export default BillsBreakdown;