import React, { useRef } from 'react';
import Button from '../../ui/Button';
import classes from './event-search.module.css';

function EventSearch({ onSearch }) {
  const monthRef = useRef();
  const yearRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const monthValue = monthRef.current.value;
    const yearValue = yearRef.current.value;
    onSearch(yearValue, monthValue);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="Year" id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="Month" id="month" ref={monthRef}>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
}

export default EventSearch;
