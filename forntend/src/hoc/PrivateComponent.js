import React from 'react'
import { useSelector } from 'react-redux'

export default function PrivateComponent({children}) {
    const auth = useSelector(state => state.auth)
   
    // if(auth.isAuthenticated){            
    if(true){            
        return (
            <>
            {children}
            </>
        )
    } 
    else{
        return(
            <>

            </>
        )
    }
}
