import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const gridStyle = {
	width: '90%',
	margin: '5em auto auto',
	fontSize: '16px',
	border: '5px solid #E37222',
	borderRadius: '5px'
};

const BillsTable = (props) => {
	const columnDefs = [
		{
			headerName: 'Bill',
			field: 'title',
			resizable: true,
			checkboxSelection: true
		},
		{
			headerName: 'Amount',
			field: 'amount',
			resizable: true,
		}
	];

	const onGridReady = (params) => {
		let gridApi = params.api;
		gridApi.sizeColumnsToFit();
		window.onresize = () => {
			gridApi.sizeColumnsToFit();
		};
	};

	const rowSelected = (event) => {
		console.log(event);
		console.log(event.node.selected);
		console.log(event.rowIndex);
	}

	return (
		<div className='ag-theme-material' style={gridStyle}>
			<AgGridReact
				columnDefs={columnDefs}
				rowData={props.bills}
				onGridReady={onGridReady}
				onRowSelected={rowSelected}
				domLayout='autoHeight'
				suppressCellSelection='true'
				rowSelection='multiple'
			/>
		</div>
	);
};

export default BillsTable;
