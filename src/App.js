
import React, { useState } from 'react';
import Conditional from './Conditional/Conditional';
import ModalWindow from './ModalWindow/ModalWindow';
import Button from './Button/Button';
import Table from './Table/Table';
import Utils from './Utils/Utils';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import { useEffect } from 'react';

const App = () => {
  const [state, setState] = useState({
    template: {},
    isLoading: true,
    filteredCountries: [],
    base: [],
  });

  useEffect(async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const data = await (
      await fetch('https://api.covid19api.com/summary')
    ).json();
    const template = createTemplate(data);
    setState({
      ...state,
      base: data.Countries,
      filteredCountries: data.Countries,
      isLoading: false,
      template,
    });
  }, []);

  const setFilteredCountries = (countries) => {
    setState({
      ...state,
      filteredCountries: countries,
    });
  };

  const createTemplate = (data) => {
    const keys = Object.keys(data.Countries[0]);
    const labels = keys.map((key) => {
      return Utils.createLabelStr(key);
    });
    return keys.reduce((accum, key, index) => {
      return Object.assign(accum, { [key]: labels[index] });
    }, {});
  };

  if (state.isLoading) return <Conditional text='​Loading...' />;
  return (
    <div>
      <HeaderSearch
        countries={state.base}
        setFilteredCountries={setFilteredCountries}
      />
      <Table
        caption='Survey list'
        title={state.template}
        table={state.filteredCountries}
      />
    </div>
  );
};

export default App;
