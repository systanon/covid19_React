import React from 'react';

export default function TableRow(props) {
    const  keys  = Object.keys(props.row) 
    const tds = keys.map((el, index) => {
      return (
          <td key={index}>
            {props.row[el]}
          </td>
      );
    });

  return (
    <tr >
      {tds}
    </tr>
  );
}
