import "./Filter.css"
import React from 'react';

const Filter = (props) => {
  const dropDownHandler = (optionSelected) => {
    props.onChangeFilter(optionSelected.target.value);
   }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownHandler}>
                  <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
       </select>
      </div>
    </div>
  );
};

export default Filter;