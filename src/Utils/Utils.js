import React from 'react';

export default class Utils extends React.Component{
  static createLabelStr=(str)=>{
    let res = str;// место этого добавлять пробелы

    res = res[0].toUpperCase() + res.slice(1)
    return res;
  }

}