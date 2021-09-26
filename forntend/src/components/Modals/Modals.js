import React from 'react'
import AddIndexModal from './AddIndexModal'
import AddPortfolioModal from './AddPortfolioModal'
import AddWatchlistModal from './AddWatchlistModal'

export default function Modals() {
    return (
        <>
            <AddPortfolioModal />
            <AddWatchlistModal />
            <AddIndexModal />
        </>
    )
}
