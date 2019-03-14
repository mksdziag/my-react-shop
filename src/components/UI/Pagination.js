import React from "react";

const Pagination = ({ currentPage, pagesCount, onPageChange }) => {
  const paginationLinksArr = [];

  for (let i = 1; i <= pagesCount; i++) {
    paginationLinksArr.push(i);
  }

  return (
    <nav className="pagination is-centered" aria-label="pagination">
      <ul className="pagination-list">
        {paginationLinksArr.map(link => (
          <li key={link}>
            <a
              className={`pagination-link ${
                currentPage === link ? "is-current" : null
              }`}
              aria-label={`Goto page ${link}`}
              onClick={() => onPageChange(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
