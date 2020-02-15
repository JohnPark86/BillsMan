import React, { useState, useEffect } from 'react';

const BillsSection = (props) => {
    const [totalBills, setTotalBills] = useState(0);

	useEffect(() => {
        let total = 0;
        props.bills.forEach((bill)=>{
            total+= bill.amount
        })
        setTotalBills(total)
    }, [props.bills]);

return(<p>Your total bills this month : {totalBills}</p>)
};

export default BillsSection;