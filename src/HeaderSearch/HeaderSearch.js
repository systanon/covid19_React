import React from 'react';
import './HeaderSearch.scss';

 const HeaderSearch = (props)=> {
  const filterCountryHendler = (e) => {
    if ('value' in e.target && e.target.value.length !== 0) {
      const filterCountries = props.countries.filter((country) =>
        country.Country.toLowerCase().includes(e.target.value)
      );
      props.setFilteredCountries(filterCountries);
    } else {
      props.setFilteredCountries(props.countries);
    }
    e.stopPropagation();
  };
    return (
      <div className='header-search'>
        <input className='header-input' onInput={filterCountryHendler} />
      </div>
    );
}
export default HeaderSearch
