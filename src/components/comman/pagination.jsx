import React from "react";

const Pagination = (props) => {
  const { itemCount, pageSize, onSelected, selected } = props;
  const pages = Math.ceil(itemCount / pageSize);

  if (pages < 2) return null;
  let pageList = [];
  for (let i = 1; i <= pages; i++) {
    pageList.push(i);
  }

  let classes;
  // active
  // if(pageSize)

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageList.map((page) => (
          <li key={page} className="page-item">
            <a
              onClick={() => onSelected(page)}
              className={page === selected ? "page-link active" : "page-link"}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
