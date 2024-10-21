import React from 'react';
import {PaginationProps} from "../../interfaces";
import './Pagination.css';

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, nextPage, prevPage}) => {
    return (
        <div className="pagination">
            <div>
                <button className="btn" onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span className="pagination-page">{currentPage} of {totalPages}</span>
                <button className="btn" onClick={nextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;