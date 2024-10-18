import React from 'react';
import {PaginationProps} from "../../interfaces";

const Pagination: React.FC<PaginationProps> = ({page, totalPages, prevPage, nextPage}) => {
    return (
        <div>
            <div className="pagination">
                <button onClick={prevPage} disabled={page === 1}>
                    Prev
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button onClick={nextPage}
                        disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;