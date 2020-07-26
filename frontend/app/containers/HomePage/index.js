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
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { makeSelectPageState } from './selectors';
import { getCity, getTour, getMap } from './actions';

const baseUrl = process.env.BASE_URL;

export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.defaultAction();
  }

  render() {
    const { homePage } = this.props;
    const { tours } = homePage;
    const { map } = homePage;
    let cityOptions = [];

    if (homePage.cities) {
      cityOptions = homePage.cities.map(_a => ({
        label: _a.name,
        value: _a._id,
      }));
    }

    return (
      <>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <section id="map" className="map">
          <Map mapData={map} getMap={params => this.props.getMap(params)} />
        </section>
        <Filter cityOptions={cityOptions} />
        <section className="featured">
          <div className="container">
            <h2 className="heading">Featured Places</h2>

            {tours.length && (
              <OwlCarousel
                className="owl-carousel owl-theme"
                loop
                margin={10}
                nav
              >
                {tours.map(_a => (
                  <React.Fragment>
                    <div className="item">
                      <div className="item-inn">
                        <figure>
                          <img src={`${baseUrl}${_a.image}`} alt={_a.name} />
                        </figure>
                        <p className="item-price">$ {_a.price}</p>

                        <div className="item-cntnt">
                          <h3>{_a.name}</h3>

                          <div className="star-ratings-css">
                            <div className="star-ratings-css-top">
                              {[...Array(+_a.star)].map(() => (
                                <span>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </span>
                              ))}
                            </div>
                            <div className="star-ratings-css-bottom">
                              <span>
                                <i
                                  className="fa fa-star-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-o"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                          </div>

                          <p>{_a.description}</p>
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
                  </React.Fragment>
                ))}
              </OwlCarousel>
            )}
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy It is
                a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.{' '}
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
                    <input
                      type="text"
                      name=""
                      placeholder="enter your number"
                    />
                  </div>
                  <div className="col-sm-6 col-xs-12 each-div">
                    <label>
                      Subject <em>*</em>
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="enter the subject"
                    />
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
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  homePage: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectPageState(),
});

function mapDispatchToProps(dispatch) {
  return {
    defaultAction: evt => {
      dispatch(getCity());
      dispatch(getTour());
    },
    getMap: (params = {}) => {
      dispatch(getMap(params));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
