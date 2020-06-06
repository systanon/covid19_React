import React from 'react';
import TableRow from './TableRow';
import TableTitle from './TableTitle';
import './Table.scss';


export default function Table (props) {
  // console.log(props)
     const listRows =props.table.map((row, index) => (
        <TableRow key={index} row={row} />
      ));
    return (
      <table className="table">
        <caption>{props.caption}</caption>
        <TableTitle title={props.title} />
        <tbody>{listRows}</tbody>
      </table>
    );
  
}
