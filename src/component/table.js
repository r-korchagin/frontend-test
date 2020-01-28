import React from "react";
import { observer } from "mobx-react";

import TableRow from "./tableRow";
import postList from "../store/postListStore";

/**
 * Style for pointer over row
 */
import "./table.css";

/**
 * Render table
 */
const Table = () => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Userid</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {postList.getPostList.map((el, index) => {
          return (
            <TableRow
              key={index}
              id={el.id}
              userid={el.userId}
              title={el.title}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default observer(Table);
