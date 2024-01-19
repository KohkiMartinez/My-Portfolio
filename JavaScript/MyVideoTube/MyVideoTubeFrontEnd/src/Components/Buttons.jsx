import PropTypes from 'prop-types';
import React from 'react';

const Buttons = React.memo(({ goToNextPage, goToPreviousPage, currentPage, totalPages }) => {
    
    return (
        <div className='buttons'>
        <div>
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                Prev
            </button>
        </div>
        <div className='pageNo'>
            <span>Page: {currentPage} / {totalPages}</span>
        </div>
        
        <div>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    </div>
    )
});
Buttons.displayName = 'Buttons';
Buttons.propTypes = {
    goToNextPage: PropTypes.func.isRequired,
    goToPreviousPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
}

export default Buttons;
