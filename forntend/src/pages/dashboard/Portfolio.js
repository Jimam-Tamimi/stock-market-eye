import React from 'react'
import Table from '../../components/Table/Table'


export default function Portfolio({match}) {

    return (
        <>
        <div  >
            <h2 class="az-content-title tx-24 mg-b-5 mg-b-lg-8"><b> Name: </b> portfolio.name </h2> 
            <h2 class="az-content-title tx-24 mg-b-5 mg-b-lg-8"> <b> ID: </b>  {match.params.id} </h2> 
                
            <h2 class="az-content-title tx-24 mg-b-5 mg-b-lg-8"> <b> Default Commission: </b> portfolio.default_commission </h2> 
            <Table />
        </div>

            
        </>
    )
}
