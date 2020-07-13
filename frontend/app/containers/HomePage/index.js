import React from 'react';
import Filter from 'components/Filters/bikeCar';
import Map from 'components/Map';
import SubFooter from 'components/Footer/sub';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import makeSelectHomePage from './selectors';

export function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <section id="map" className="map">
        <Map />
      </section>
      <Filter />
      <section className="featured">
        <div className="container">
          <h2 className="heading">Featured Places</h2>

          <OwlCarousel className="owl-carousel owl-theme" loop margin={10} nav>
            <div className="item">
              <div className="item-inn">
                <figure>
                  <img src={require('../../public/images/featured/1.png')} />
                </figure>
                <p className="item-price">$ 575.00</p>

                <div className="item-cntnt">
                  <h3>Grand Switzerland</h3>

                  <div className="star-ratings-css">
                    <div className="star-ratings-css-top">
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span />
                    </div>
                    <div className="star-ratings-css-bottom">
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum has been since.
                  </p>
                  <ul className="row">
                    <li className="col-xs-12">
                      <a
                        href=""
                        type="button"
                        className="btn book-btn"
                        data-toggle="modal"
                        data-target=".booking-modal"
                      >
                        Book Now
                      </a>
                    </li>
                    <li className="col-xs-12">
                      <a href="" className="btn">
                        View Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-inn">
                <figure>
                  <img src={require('../../public/images/featured/2.png')} />
                </figure>
                <p className="item-price">$ 600.00</p>

                <div className="item-cntnt">
                  <h3>Discover Japan</h3>

                  <div className="star-ratings-css">
                    <div className="star-ratings-css-top">
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-half-o" aria-hidden="true" />
                      </span>
                      <span />
                    </div>
                    <div className="star-ratings-css-bottom">
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum has been since.
                  </p>
                  <ul className="row">
                    <li className="col-xs-12">
                      <a
                        href=""
                        type="button"
                        className="btn book-btn"
                        data-toggle="modal"
                        data-target=".booking-modal"
                      >
                        Book Now
                      </a>
                    </li>
                    <li className="col-xs-12">
                      <a href="" className="btn">
                        View Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-inn">
                <figure>
                  <img src={require('../../public/images/featured/3.png')} />
                </figure>
                <p className="item-price">$ 550.00</p>

                <div className="item-cntnt">
                  <h3>Niko Trip</h3>

                  <div className="star-ratings-css">
                    <div className="star-ratings-css-top">
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span />
                      <span />
                    </div>
                    <div className="star-ratings-css-bottom">
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum has been since.
                  </p>
                  <ul className="row">
                    <li className="col-xs-12">
                      <a
                        href=""
                        type="button"
                        className="btn book-btn"
                        data-toggle="modal"
                        data-target=".booking-modal"
                      >
                        Book Now
                      </a>
                    </li>
                    <li className="col-xs-12">
                      <a href="" className="btn">
                        View Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-inn">
                <figure>
                  <img src={require('../../public/images/featured/1.png')} />
                </figure>
                <p className="item-price">$ 575.00</p>

                <div className="item-cntnt">
                  <h3>Grand Switzerland</h3>

                  <div className="star-ratings-css">
                    <div className="star-ratings-css-top">
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star" aria-hidden="true" />
                      </span>
                      <span />
                    </div>
                    <div className="star-ratings-css-bottom">
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                      <span>
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum has been since.
                  </p>
                  <ul className="row">
                    <li className="col-xs-12">
                      <a
                        href=""
                        type="button"
                        className="btn book-btn"
                        data-toggle="modal"
                        data-target=".booking-modal"
                      >
                        Book Now
                      </a>
                    </li>
                    <li className="col-xs-12">
                      <a href="" className="btn">
                        View Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <div className="full-bg">
        <section className="who-we">
          <div className="container">
            <h2 className="heading">Who we are ?</h2>

            <h3>
              Page editors now use Lorem Ipsum as their default model text,a
              search for 'lorem ipsum'
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout.{' '}
            </p>

            <ul>
              <li>
                <a href="">read more</a>
              </li>
              <li>
                <a href="">contact us</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="contact-sec">
          <div className="container">
            <h2 className="heading">Contact Us</h2>
            <p>97-175 Brompton Rd,Qatar S441X 7XL, Qatar</p>

            <form>
              <div className="row">
                <div className="col-sm-6 col-xs-12 each-div">
                  <label>
                    name <em>*</em>
                  </label>
                  <input type="text" name="" placeholder="enter your name" />
                </div>
                <div className="col-sm-6 col-xs-12 each-div">
                  <label>
                    E-mail address <em>*</em>
                  </label>
                  <input
                    type="text"
                    name=""
                    placeholder="enter e-mail address"
                  />
                </div>
                <div className="col-sm-6 col-xs-12 each-div">
                  <label>Phone Number</label>
                  <input type="text" name="" placeholder="enter your number" />
                </div>
                <div className="col-sm-6 col-xs-12 each-div">
                  <label>
                    Subject <em>*</em>
                  </label>
                  <input type="text" name="" placeholder="enter the subject" />
                </div>
                <div className="col-sm-24 col-xs-12 each-div special">
                  <label>
                    Message<em>*</em>
                  </label>
                  <textarea placeholder="enter message here" />
                </div>
                <div className="col-sm-24 col-xs-12 each-div special">
                  <a href="" className="btn">
                    Send Message
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
        <SubFooter />
      </div>
    </>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
