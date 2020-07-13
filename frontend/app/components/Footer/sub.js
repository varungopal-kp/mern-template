import React from 'react';

function SubFooter() {
  return (
    <footer>
      <div className="container">
        <div className="col-sm-24 col-xs-12 logo">
        <img src={require('../../public/images/logo-w.png')} />
         
        </div>
        <div className="col-sm-14 col-xs-12 about">
          <h4>About Us</h4>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto.
          </p>
        </div>
       
        <div className="col-sm-10 col-xs-12 hours">
          <h4>Working Hours</h4>
          <p className="head">Monday to Friday:</p>
          <p className="time">9:00 AM to 9:00 PM</p>

          <p className="head">Saturday & Sunday :</p>
          <p className="time">9:00 AM to 2:00 PM</p>
        </div>
      </div>
    </footer>
  );
}

export default SubFooter;
