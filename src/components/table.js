import React from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";

const Table = props => {
  return (
    <ReactTable
      data={props.data}
      columns={props.columns}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  );
};

export default Table;