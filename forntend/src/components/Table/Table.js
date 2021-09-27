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
        applyColumnState(params)


        setRowData([
            { 
                "Symbol": "transaction.date", 
                "Name": 'gold 1', 
                "Quantity": 'silver 1', 
                "Price": 'bronze 1',
                "Adjusted Buy Price": 'bronze 1',
                "Current Value": 'bronze 1',
                "Profit": 'bronze 1',
                "Profit %": 'bronze 1',
                "Portfolio %": 'bronze 1',
                "Day Change": 'bronze 1',
                "Day Lo": 'bronze 1',
                "Day Hi": 'bronze 1',
                "52 Week Lo": 'bronze 1',
                "52 Week Hi": 'bronze 1',
                "Volume": 'bronze 1',
                "Volume Average 10 days": 'bronze 1',
                "Volume Average 3M": 'bronze 1',
                "MktCap": 'bronze 1',
                "EPS": 'bronze 1',
                "P/E": 'bronze 1',
                "P/B": 'bronze 1',
                "EV/EBITDA": 'bronze 1',
                "Dividend Yield": 'bronze 1',
                "D/E": 'bronze 1',
                "ROA": 'bronze 1',
                "Revenues": 'bronze 1',
                "EBITDA": 'bronze 1',
                "Sector": 'bronze 1',
                "Industry": 'bronze 1',
                "Website": 'bronze 1',
                "symbol": 'bronze 1',
                
            },
            { 
                "Symbol": "transaction.date", 
                "Name": 'gold 1', 
                "Quantity": 'silver 1', 
                "Price": 'bronze 1',
                "Adjusted Buy Price": 'bronze 1',
                "Current Value": 'bronze 1',
                "Profit": 'bronze 1',
                "Profit %": 'bronze 1',
                "Portfolio %": 'bronze 1',
                "Day Change": 'bronze 1',
                "Day Lo": 'bronze 1',
                "Day Hi": 'bronze 1',
                "52 Week Lo": 'bronze 1',
                "52 Week Hi": 'bronze 1',
                "Volume": 'bronze 1',
                "Volume Average 10 days": 'bronze 1',
                "Volume Average 3M": 'bronze 1',
                "MktCap": 'bronze 1',
                "EPS": 'bronze 1',
                "P/E": 'bronze 1',
                "P/B": 'bronze 1',
                "EV/EBITDA": 'bronze 1',
                "Dividend Yield": 'bronze 1',
                "D/E": 'bronze 1',
                "ROA": 'bronze 1',
                "Revenues": 'bronze 1',
                "EBITDA": 'bronze 1',
                "Sector": 'bronze 1',
                "Industry": 'bronze 1',
                "Website": 'bronze 1',
                "symbol": 'bronze 1',
                
            },
             
        ]); 
        
    };

    const onFirstDataRendered = (params) => {
        applyColumnState(params)
        params.api.sizeColumnsToFit();

    };
    const onGridSizeChanged = (params) => {
        params.api.sizeColumnsToFit();

    };


    const saveColumnState = e => {
        localStorage.setItem('columnState', JSON.stringify(gridColumnApi.getColumnState()));
        console.log('column state saved');
    }
    const applyColumnState = params => {
        params.columnApi.applyColumnState({
            state: JSON.parse(localStorage.getItem('columnState')),
            applyOrder: true,
        });
    }
    const onQuickFilterChanged = () => {
        gridApi.setQuickFilter(document.getElementById('quickFilter').value);
      };
      return (
        <div style={{ width: '100%', height: '90vh' }}>
            <div id="grid-wrapper" style={{ width: '100%', height: '100%' }}>
                <div>
                    <input
                    type="text"
                    onInput={() => onQuickFilterChanged()}
                    id="quickFilter"
                    placeholder="quick filter..."/>
                </div>
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
                            floatingFilter: true,

                        }}
                        localeText={{
                            searchOoo: 'Search values...',
                            noMatches: 'No matches could be found.',
                        }}

                        autoGroupColumnDef={{ minWidth: 150 }}
                        animateRows={true}
                        onGridReady={onGridReady}
                        rowData={rowData}
                        onColumnMoved={saveColumnState}
                        onColumnResized={saveColumnState}
                        onColumnPinned={saveColumnState}
                        onExpandOrCollapseAll={saveColumnState}
                        onColumnVisible={saveColumnState}
                        
                        onFirstDataRendered={onFirstDataRendered}
                        onGridSizeChanged={onGridSizeChanged}
                        rowSelection={'multiple'}

                        groupDisplayType={'singleColumn'}


                        
                    >
                        <AgGridColumn field="Symbol" rowGroup={true} hide={true}  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Name" filter="agTextColumnFilter"   />
                        <AgGridColumn field="Quantity"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Price"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Adjusted Buy Price"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Current Value"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Profit"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Profit %"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Portfolio %"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Day Change"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Day Change %"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Day Lo"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Day Hi"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="52 Week Lo"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="52 Week Hi"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Volume"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Volume Average 10 days"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Volume Average 3M"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="MktCap"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="EPS"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="P/E"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="P/B"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="EV/EBITDA"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Dividend Yield"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="D/E"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="ROE"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="ROA"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Revenues"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="EBITDA"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Sector"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="Website"  filter="agTextColumnFilter"   />
                        <AgGridColumn field="symbol"  filter="agTextColumnFilter"   />
                    </AgGridReact>
                </div>
            </div>
        </div>
    );
}
