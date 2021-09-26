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
            { 
                "country": "transaction.date", 
                "gold": 'gold 1', 
                "silver": 'silver 1', 
                "bronze": 'bronze 1',
            },
             
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
                    <AgGridColumn field="Symbol" rowGroup={true} hide={true} />
                    <AgGridColumn field="Name" />
                    <AgGridColumn field="Quantity" />
                    <AgGridColumn field="Price" />
                    <AgGridColumn field="Adjusted Buy Price" />
                    <AgGridColumn field="Current Value" />
                    <AgGridColumn field="Profit" />
                    <AgGridColumn field="Profit %" />
                    <AgGridColumn field="Portfolio %" />
                    <AgGridColumn field="Day Change" />
                    <AgGridColumn field="Day Change %" />
                    <AgGridColumn field="Day Lo" />
                    <AgGridColumn field="Day Hi" />
                    <AgGridColumn field="52 Week Lo" />
                    <AgGridColumn field="52 Week Hi" />
                    <AgGridColumn field="Volume" />
                    <AgGridColumn field="Volume Average 10 days" />
                    <AgGridColumn field="Volume Average 3M" />
                    <AgGridColumn field="MktCap" />
                    <AgGridColumn field="EPS" />
                    <AgGridColumn field="P/E" />
                    <AgGridColumn field="P/B" />
                    <AgGridColumn field="EV/EBITDA" />
                    <AgGridColumn field="Dividend Yield" />
                    <AgGridColumn field="D/E" />
                    <AgGridColumn field="ROE" />
                    <AgGridColumn field="ROA" />
                    <AgGridColumn field="Revenues" />
                    <AgGridColumn field="EBITDA" />
                    <AgGridColumn field="Sector" />
                    <AgGridColumn field="Website" />
                    <AgGridColumn field="symbol" />
                </AgGridReact>
            </div>
        </div>
    );
}
