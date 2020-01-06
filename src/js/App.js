import React, { useState , useEffect} from 'react';
import Input from './components/Input';
import NewBillButton from './components/NewBillButton'

const App = () => {
    return (
        <>
            <Input />
            <NewBillButton />
        </>
    );
}

export default App;