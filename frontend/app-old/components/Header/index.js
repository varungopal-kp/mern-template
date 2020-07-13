import React from 'react';


function Header() {
  return (
    <header>
<nav class="navbar navbar-default">
  <div class="container">
   
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.php"><img src={require('../../public/images/logo.png')}/></a>
    </div>


    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

      <ul class="nav navbar-nav navbar-right">

        <li class="active"><a href="home.php">HOME</a></li>
        <li><a href="bike-rental.php">RENTAL BIKE</a></li>
        <li><a href="car-rental.php">RENTAL CARS</a></li>
        <li><a href="tours.php">TOURS</a></li>
      </ul>
    </div>
  </div>
</nav>
</header>
  );
}

export default Header;
