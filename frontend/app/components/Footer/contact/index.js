import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import Input from 'components/Fields/input';
import TextArea from 'components/Fields/textArea';
import { submit } from 'redux-form';
import validate from './validate';
export function contactUs({
  change,
  handleSubmitContact,
  submitting,
  dispatch,
}) {
  return (
    <div className="container">
      <h2 className="heading">Contact Us</h2>
      <p>97-175 Brompton Rd,Qatar S441X 7XL, Qatar</p>

      <form onSubmit={handleSubmitContact}>
        <div className="row">
          <div className="col-sm-6 col-xs-12 each-div">
            <label>
              name <em>*</em>
            </label>
            <Field
              name="name"
              component={Input}
              type="text"
              placeholder="enter name"
            />
          </div>
          <div className="col-sm-6 col-xs-12 each-div">
            <label>
              E-mail address <em>*</em>
            </label>
            <Field
              name="email"
              component={Input}
              type="text"
              placeholder="enter e-mail address"
            />
          </div>
          <div className="col-sm-6 col-xs-12 each-div">
            <label>Phone Number</label>
            <Field
              name="phone"
              component={Input}
              type="number"
              placeholder="enter your number"
            />
          </div>
          <div className="col-sm-6 col-xs-12 each-div">
            <label>
              Subject <em>*</em>
            </label>
            <Field
              name="subject"
              component={Input}
              type="text"
              placeholder="enter the subject"
            />
          </div>
          <div className="col-sm-24 col-xs-12 each-div special">
            <label>
              Message<em>*</em>
            </label>
            <Field
              name="message"
              component={TextArea}
              type="text"
              placeholder="enter message here"
            />
          </div>
          <div className="col-sm-24 col-xs-12 each-div special">
            <button
              type="submit"
              className="btn btnContact"
              disabled={submitting}
              onClick={e => {
                e.preventDefault();
                dispatch(submit('contactUsForm'));
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default reduxForm({
  form: 'contactUsForm',
  validate,
  initialValues: {},
  enableReinitialize: true,
  destroyOnUnmount: true,
})(contactUs);
