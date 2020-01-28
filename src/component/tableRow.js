import React from "react";
import PropTypes from "prop-types";

import modalStore from "../store/modalStore";

/**
 * Render Row in table
 * @param {Object} props - {id , iserid, title}
 */
const TableRow = props => {
  return (
    <tr
      onClick={() => {
        modalStore.openInfoModal(props.id, props.userid);
      }}
    >
      <td>{props.id}</td>
      <td>{props.userid}</td>
      <td>{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</td>
    </tr>
  );
};

TableRow.propTypes = {
  id: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default TableRow;
