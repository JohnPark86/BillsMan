import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Header from './components/Header';
import '../scss/app.scss';

const AppContext = React.createContext();

const App = () => {
	const update = (value) => {
		console.log('update: ', value);
	};

	return (
		<AppContext.Provider value={{update : update }}>
			<div>
				<Header />
			</div>
		</AppContext.Provider>
	);
};

export { App, AppContext };
