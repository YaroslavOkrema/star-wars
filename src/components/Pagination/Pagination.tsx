import React from 'react';
import {PaginationProps} from "../../interfaces";

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, nextPage, prevPage}) => {
    return (
        <div>
            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;