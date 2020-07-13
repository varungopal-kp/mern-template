import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="index.php">
              <img src={require('../../public/images/logo.png')} />
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a >HOME</a>
              </li>
              <li>
                <a >RENTAL BIKE</a>
              </li>
              <li>
                <a >RENTAL CARS</a>
              </li>
              <li>
                <a >TOURS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
