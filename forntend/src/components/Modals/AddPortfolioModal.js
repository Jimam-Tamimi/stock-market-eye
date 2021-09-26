import React from 'react'

export default function AddPortfolioModal() {
    return (
        <>

            <form id="myTransactionForm" action="" method="POST" enctype="application/x-www-form-urlencoded">
                <div id="addPortfolioModal" class="modal" >
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content modal-content-demo">
                            <div class="modal-header">
                                <h6 class="modal-title">Add Portfolio</h6>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <div class="form-row">
                                    <div class="col">
                                        <label class="az-content-label tx-11 tx-medium tx-gray-600">Portfolio</label>
                                        <input type="text" name="Portfolio" class="form-control" value="{{ portfolio.name }}" disabled />
                                    </div>
                                    <div class="col">
                                        <label class="az-content-label tx-11 tx-medium tx-gray-600">Ticker Symbol</label>
                                        <input type="text" name="symbol" id="symbol_id" class="form-control mb-4" rows="1" placeholder="Search by ticker symbol or company name" autocomplete="off" required />
                                    </div>
                                </div>

                                <div class="form-row">

                                    <div class="col">
                                        <label class="az-content-label tx-11 tx-medium tx-gray-600">Date</label>
                                        <input type="date" name="date" id="date_id" class="form-control" />
                                    </div>

                                    <div class="col">
                                        <label class="az-content-label tx-11 tx-medium tx-gray-600">Shares</label>
                                        <input type="number" name="shares" id="shares_id" name="Shares" class="form-control mb-4" rows="1" placeholder="0" required />
                                    </div>

                                </div>

                                <div class="form-row">
                                    <div class="col">
                                        <label class="az-content-label tx-11 tx-medium tx-gray-600">Type</label>
                                        <select class="form-control mb-4" id="type_id" name="transaction_type">
                                            <option value="BUY">Buy</option>
                                            <option value="SellShort">SellShort</option>
                                            <option value="SharesIn">SharesIn</option>
                                        </select>
                                    </div>

                                    <div class="col">
                                        <label class="az-content-label tx-11 tx-medium tx-gray-600">Price</label>
                                        <div class="input-group">
                                            <input type="number" class="form-control mb-4" name="regularMarketPrice" id="price_id" step="0.01" placeholder="Price" onkeyup="setTotal()" />
                                            <span class="input-group-btn">
                                                <button id="getprice_id" class="btn btn-primary" type="button"><i class="fa fa-search"></i>   Get Price</button>
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <hr />

                                <div class="form-row">
                                    <div class="col">
                                        <label class="az-content-label tx-11 tx-medium tx-gray-600">Commissions</label>
                                        <input type="number" id="commissions_id" name="commissions" class="form-control mb-4" rows="1" step="0.01" placeholder="0" onkeyup="setTotal()" />
                                    </div>
                                    <div class="col">
                                        <label class="az-content-label tx-11 tx-medium tx-gray-600">Fees</label>
                                        <input type="number" id="fees_id" name="fees" class="form-control mb-4" rows="1" step="0.01" placeholder="0" onkeyup="setTotal()" />
                                    </div>
                                    <div class="col">
                                        <label class="az-content-label tx-11 tx-medium tx-gray-600">New Total</label>
                                        <input type="number" id="nettotal_id" name="NetTotal" class="form-control mb-4" rows="1" step="0.01" placeholder="0" disabled />
                                    </div>
                                </div>




                                <br />

                                <div class="form-row">
                                    <div class="col">
                                        <div class="ql-wrapper ql-wrapper">
                                            <label class="az-content-label tx-11 tx-medium tx-gray-600">Comments</label>
                                            <div id="quillEditorTransaction" class="ql-container ql-snow"><div class="ql-editor" data-gramm="false" contenteditable="true" spellcheck="false">
                                                <p></p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div class="form-row">
                                    <div class="col">
                                        <input type="checkbox" name="update_cash_balance" id="updatecash_id" checked="" /><span> Update the Cash balance</span>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-indigo" > Add </button>

                                <button type="button" class={`btn  btn-outline-light`} > Close </button>

                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
