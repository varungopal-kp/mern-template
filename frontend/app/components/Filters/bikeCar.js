import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import Input from 'components/Fields/input';
import Date from 'components/Fields/date';
import Select from 'components/Fields/select';
import moment from 'moment';
export function bikeCar({ handleSubmit, cityOptions, submitting }) {
  const typeOptions = [
    { label: 'Both', value: 'both' },
    { label: 'Car', value: 'car' },
    { label: 'Bike', value: 'bike' },
  ];
  return (
    <section className="filter-bar" id="home">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <ul className="basic">
            <li className="col-md-4 col-sm-8 col-xs-8">
              <label>Car/Bike/Both</label>
              <Field
                name="type"
                component={Select}
                placeholder="Type"
                options={typeOptions}
              />
            </li>

            <li className="col-md-4 col-sm-8 col-xs-8 country">
              <label>Country/City</label>
              <Field
                name="city"
                component={Select}
                type="text"
                placeholder="Country/City"
                options={cityOptions || []}
              />
              <span />
            </li>

            <li className="col-md-4 col-sm-8 col-xs-8 calendar">
              <label>From Date</label>
              <Field
                name="fromDate"
                component={Date}
                placeholder="Select date"
              />
              `
              <span />
              <span />
            </li>

            <li className="col-md-4 col-sm-8 col-xs-8 calendar">
              <label>To Date</label>
              <Field name="ToDate" component={Date} placeholder="Select date" />
              <span />
              <span />
            </li>

            <li className="col-md-4 col-sm-8 col-xs-8">
              <label>No. of People</label>
              <Field
                name="noofpeople"
                component={Input}
                type="number"
                placeholder="Type Here"
              />
            </li>

            <li className="col-md-4 col-sm-8 col-xs-8">
              <label>Accommodation</label>
              <select>
                <option>1 Star</option>
                <option>2 Star</option>
                <option>3 Star</option>
                <option>4 Star</option>
                <option>5 Star</option>
              </select>
            </li>
          </ul>

          <ul className="advance-sec">
            <li>
              <select>
                <option>Theme</option>
                <option>Theme</option>
              </select>
            </li>
            <li>
              <select>
                <option>Skill Level</option>
                <option>Skill Level</option>
              </select>
            </li>
            <li>
              <select>
                <option>Type</option>
                <option>Type</option>
              </select>
            </li>
            <li>
              <select>
                <option>Price Range</option>
                <option>101-500</option>
                <option>501-1000</option>
              </select>
            </li>
          </ul>

          <ul className="btn-right">
            <li className="col-md-4 col-xs-8">
              <button type="submit" className="btn btnFilter">
                Filter
              </button>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}
export default reduxForm({
  form: 'bikeCarFilterForm',
  initialValues: {},
})(bikeCar);
