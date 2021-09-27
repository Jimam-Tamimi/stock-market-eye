import React, {useRef, useEffect} from 'react'
import 'datatables.net-dt/css/jquery.dataTables.css'

import 'datatables.net-colreorder-dt/css/colReorder.dataTables.css'
import 'datatables.net-colreorder-dt/js/colReorder.dataTables.js'

import 'datatables.net-responsive-dt/js/responsive.dataTables.min.js'
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css'

import 'datatables.net-select-dt/js/select.dataTables.min.js'
import 'datatables.net-select-dt/css/select.dataTables.min.css'

import 'datatables.net-rowgroup-dt/js/rowGroup.dataTables.min.js'
import 'datatables.net-rowgroup-dt/css/rowGroup.dataTables.min.css'

import 'datatables.net-buttons-dt/js/buttons.dataTables.min.js'
import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css'

const $ = require('jquery');
$.DataTable = require('datatables.net');

export default function Table() {
    const tableRef = useRef(null)
    let collapsedGroups = {}
    useEffect(() => { 
        $('#tableRef').DataTable({
            // bAutoWidth: false,
        responsive: true,
        colReorder: true,
        stateSave:  true,
        // paging: true,
        autoWidth: true,
        processing: true,

        // serverSide: true,

        
        });
    }, [])
    return (
        <>
            <table id="tableRef" className="table table-striped table-bordered dataTable display"  cellspacing="0" width="100%">
                <thead>
                    <tr>

                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Adjusted Buy Price</th>
                        <th>Current Value</th>
                        <th>Profit</th>
                        <th>Profit %</th>
                        <th>Portfolio %</th>
                        <th>Day Change</th>
                        <th>Day Change %</th>
                        <th>Day Lo</th>
                        <th>Day Hi</th>
                        <th>52 Week Lo</th>
                        <th>52 Week Hi</th>
                        <th>Volume</th>
                        <th>Volume Average 10 days</th>
                        <th>Volume Average 3M</th>
                        <th>MktCap</th>
                        <th>EPS</th>
                        <th>P/E</th>
                        <th>P/B</th>
                        <th>EV/EBITDA</th>
                        <th>Dividend Yield</th>
                        <th>D/E</th>
                        <th>ROE</th>
                        <th>ROA</th>
                        <th>Revenues</th>
                        <th>EBITDA</th>
                        <th>Sector</th>
                        <th>Industry</th>
                        <th>Website</th>
                        <th>symbol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td> transaction.date </td>
                        <td> s.longName </td>
                        <td> transaction.quantity </td>
                        <td> s.regularMarketPrice </td>


                        <td> transaction.cost </td>
                        <td class="tx-danger"> transaction.current_value </td>



                        <td class="tx-danger"> transaction.profit </td>


                        <td class="tx-success"> transaction.profit_percentage </td>



                        <td class="tx-success"> transaction.portfolio_percentage </td>



                        <td> s.regularMarketChange </td>
                        <td> s.regularMarketChangePercent </td>
                        <td> s.regularMarketDayLow </td>
                        <td> s.regularMarketDayHigh </td>
                        <td> s.fiftyTwoWeekLow </td>
                        <td> s.fiftyTwoWeekHigh </td>
                        <td> s.regularMarketVolume </td>
                        <td> s.averageDailyVolume10Day </td>

                            {/*                         
                        <td> s.averageDailyVolume3Month </td>
                        <td> s.marketCap </td>
                        <td> s.epsTrailingTwelveMonths </td>
                        <td> s.trailingPE </td>
                        <td> s.priceToBook </td>
                        <td> s.enterpriseToEbitda </td>
                        <td> s.trailingAnnualDividendYield </td>
                        <td> s.debtToEquity </td>
                        <td> s.returnOnEquity </td>
                        <td> s.returnOnAssets </td>
                        <td> s.totalRevenue </td>
                        <td> s.ebitda </td>
                        <td> s.sector </td>
                        <td> s.industry </td>
                        <td> s.website </td>

                        <td> transaction.symbol </td> */}


                    </tr>





                </tbody>
            </table>

            

        </>
    )
}
