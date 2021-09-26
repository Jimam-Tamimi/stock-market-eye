import React from 'react'

export default function AddWatchlistModal() {
    return (
        <>
<div class="modal" id="modalWatchlist">
                                    <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content" id="modalForm">
                                            <div class="modal-header">
                                                <h6 class="modal-title">Create Watchlist</h6>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <form id="myWatchlistForm">
                                                <div class="modal-body">
                                                    <div class="form-row">
                                                        <div class="col">
                                                            <label class="az-content-label tx-11 tx-medium tx-gray-600">Watchlist Name</label>
                                                            <input type="text" name="watchlist_name" id="watchlist_name_id" class="form-control mb-4" placeholder="Watchlist Name" required />
                                                        </div>
                                                    </div>

                                                    <div class="form-row">
                                                        <div class="col">
                                                            <label class="ckbox mg-b-20">
                                                                <input type="checkbox" name="watchlist_live_quotes" id="watchlist_live_quotes_id" /><span class="tx-13">Live Quotes</span>
                                                            </label>
                                                        </div>
                                                        <div class="col">
                                                            <label class="az-content-label tx-11 tx-medium tx-gray-600" id="watchlist_update_every_label_id">update every (in minutes)</label>
                                                            <input type="number" name="watchlist_update_every" id="watchlist_update_every_id" class="form-control mb-4" rows="1" placeholder="10" disabled />
                                                        </div>
                                                    </div>

                                                    <div class="form-row">
                                                        <div class="col">
                                                            <div class="ql-wrapper ql-wrapper">
                                                                <label class="az-content-label tx-11 tx-medium tx-gray-600">Description</label>
                                                                <div id="quillEditorWatchlist" class="ql-container ql-snow"><div class="ql-editor" data-gramm="false" contenteditable="true" spellcheck="false">
                                                                    <p></p>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <input type="submit" id="btn-watchlist-submit" class="btn btn-indigo" />
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
        </>
    )
}
