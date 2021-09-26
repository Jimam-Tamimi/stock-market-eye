import React from 'react'

export default function AddIndexModal() {
    return (
        <>

            <form id="myTransactionForm" action="" method="POST" enctype="application/x-www-form-urlencoded">
                <div id="addIndexModal"  className="modal" >
                    <div  className="modal-dialog modal-lg" role="document">
                        <div  className="modal-content modal-content-demo">
                            <div  className="modal-header">
                                <h6  className="modal-title">Add Index</h6>
                                <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div  className="modal-body">

                            <div  className="form-row">	                  	
                            <div  className="col">
                                <label  className="az-content-label tx-11 tx-medium tx-gray-600">Index Name</label>
                                <input type="text" name="index_name" id="index_name_id"  className="form-control mb-4" placeholder="Index Name" required />
                            </div>                                           
                          </div>  

                          <div  className="form-row">	                  	                            
                            <div  className="col">
                                <label  className="ckbox mg-b-20">
                                  <input type="checkbox" name="index_live_quotes" id="index_live_quotes_id" /><span  className="tx-13">Live Quotes</span>
                                </label>
                            </div>
                            <div  className="col">
                                <label  className="az-content-label tx-11 tx-medium tx-gray-600" id="index_update_every_label_id">update every (in minutes)</label>
                                <input type="number" name="index_update_every" id="index_update_every_id"  className="form-control mb-4" rows="1" placeholder="10" disabled />
                            </div>                             
                          </div> 

                          <div  className="form-row">	                  	
                            <div  className="col">
                              <div  className="ql-wrapper ql-wrapper">
                                <label  className="az-content-label tx-11 tx-medium tx-gray-600">Description</label>
                                <div id="quillEditorIndexes"  className="ql-container ql-snow"><div  className="ql-editor" data-gramm="false" contenteditable="true" spellcheck="false">
                                  <p></p>
                                </div>
                              </div>
                              </div>
                            </div>
                                                                        
                          </div> 
                            </div>
                            <div  className="modal-footer">
                                <button type="submit"  className="btn btn-indigo" > Add </button>

                                <button type="button" class={`btn  btn-outline-light`} > Close </button>

                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
