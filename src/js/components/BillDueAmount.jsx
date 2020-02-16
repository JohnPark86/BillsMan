import React, { useState, useEffect } from 'react';

const BillsDueAmount = (props) => {
    const [totalBillsDue, setTotalBillsDue] = useState(0);

	useEffect(() => {
        let totalDue = 0;
        props.billsDue.forEach((bill)=>{
            total+= bill.amount
        })
        setTotalBillsDue(totalDue)
    }, [props.billsDue]);

return(<p>Your total bills still due this month : {totalBillsDue}</p>)
};

export default BillsDueAmount;