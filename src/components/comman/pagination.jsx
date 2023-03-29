import React from "react";

const Pagination = (props) => {
  const { itemCount, pageSize, onSelected } = props;
  const pages = Math.ceil(itemCount / pageSize);

  if (pages < 2) return null;
  let pageList = [];
  for (let i = 1; i <= pages; i++) {
    pageList.push(i);
  }

  let classes = "page-link";
  // active
  // if(pageSize)

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageList.map((item) => (
          <li key={item} className="page-item">
            <a onClick={onSelected} className={classes}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
