import React from "react";

const PageItem = ({ item, selected, onselected }) => {
  let classes = "page-link";
  if (selected) {
    classes += " active";
  }
  console.log(item);
  return (
    <li key={item} className="page-item">
      <a className={classes} href="#" onClick={onselected}>
        {item}
      </a>
    </li>
  );
};

export default PageItem;
