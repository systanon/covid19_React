import React from 'react';
import Utils from './../Utils/Utils';

export default function TableTitle(props) {
  
    const  keys  = Object.keys(props.title) 
    const ths = keys.map((el, index) => {
      return (
          <th key={index}>
            {props.title[el]}
          </th>
      );
    });
  return (
    <thead>
      <tr>
        {ths}
      </tr>
    </thead>
  );
}
