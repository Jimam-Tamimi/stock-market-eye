import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export default function Table() {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        params.columnApi.applyColumnState({
            state: JSON.parse(localStorage.getItem('columnState')),
            applyOrder: true,
        });

        setRowData([
            { "country": "Bangladesh", "gold": 'gold 1', "silver": 'silver 1', "bronze": 'bronze 1' },
            { "country": "Bangladesh", "gold": 'gold 2', "silver": 'silver 2', "bronze": 'bronze 2' },
            { "country": "Bangladesh", "gold": 'gold 3', "silver": 'silver 3', "bronze": 'bronze 3' },
            { "country": "India", "gold": 'gold 4', "silver": 'silver 4', "bronze": 'bronze 4' },
            { "country": "India", "gold": 'gold 5', "silver": 'silver 5', "bronze": 'bronze 5' },
            { "country": "afgan", "gold": 'gold 6', "silver": 'silver 6', "bronze": 'bronze 6' },
        ]); 
    };

    const saveColumnState = e => {
        localStorage.setItem('columnState', JSON.stringify(gridColumnApi.getColumnState()));
        console.log('column state saved');
    }

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <div
                id="myGrid"
                style={{
                    height: '100%',
                    width: '100%',
                }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    defaultColDef={{
                        flex: 1,
                        minWidth: 100,
                        sortable: true,
                        resizable: true,
                    }}
                    autoGroupColumnDef={{ minWidth: 200 }}
                    animateRows={true}
                    onGridReady={onGridReady}
                    rowData={rowData}
                    onColumnMoved={saveColumnState}
                    onColumnPinned={saveColumnState}
                    onColumnResized={saveColumnState}
                    onColumnPinned={saveColumnState}
                    onExpandOrCollapseAll={saveColumnState}
                >
                    <AgGridColumn field="country" rowGroup={true} hide={true} />
                    <AgGridColumn field="gold" />
                    <AgGridColumn field="silver" />
                    <AgGridColumn field="bronze" />
                </AgGridReact>
            </div>
        </div>
    );
}
