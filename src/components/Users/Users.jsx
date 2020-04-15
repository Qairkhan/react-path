import React from "react";

import styles from "./Users.module.css";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const getPage = (page) => {
    return (
      <span
        className={props.currentPage === page && styles.selectedPage}
        onClick={() => {
          props.onPageChanged(page);
        }}
      >
        {page}
      </span>
    );
  };
  const getPages = () => {
    return pages.map(getPage);
  };

  return (
    <div>
      {props.getUsers()}
      <div>{getPages()}</div>
    </div>
  );
};

export { Users };
