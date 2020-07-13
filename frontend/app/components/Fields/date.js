import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

export default class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
    };
  }

  componentDidMount() {
    const { input } = this.props;

    if (input.value) {
      const date = moment(input.value, 'x');
      this.setState({ date });
    }
  }

  render() {
    const {
      input,
      className,
      label,
      name,
      type,
      placeholder,
      id,
      numberOfMonths,
    } = this.props;
    return (
      <div className={className}>
        {label && <label>{label}</label>}
        <SingleDatePicker
          date={this.state.date}
          onDateChange={date => {
            this.setState({ date });
            return input.onChange(date.valueOf());
          }}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id={id}
          placeholder={placeholder}
          numberOfMonths={numberOfMonths || 1}
          hideKeyboardShortcutsPanel
        />
      </div>
    );
  }
}
