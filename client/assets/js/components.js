
// when page load
$( document ).ready(function() {
    menu()
     });
     

function menu(){

    var menu = `<nav class="menu navbar navbar-expand-md navbar-light fixed-top bg-ligh p-4">
      <div class="container">
          <a class="navbar-brand" href="index.html"><b>CryptoFish</b></a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
              data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="navbar-collapse collapse  justify-content-end" id="navbarsExampleDefault">
  
              <div align="right">
                  <ul class="navbar-nav mr-auto">
  
                      <li class="nav-item">
                          <a class="nav-link" href="index.html"><b>Home</b></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="catalogue.html"><b>Catalog</b></a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link" href="myFish.html"><b>My Fish</b></a>
                      </li>

                      
                      <li class="nav-item">
                          <a class="nav-link" href="factory.html"><b>Factory</b></a>
                      </li>
  
                      <li class="nav-item">
                          <button class="btn red-btn ml-4">Start</button>
                      </li>
  
                  </ul>
  
              </div>
  
          </div>
      </div>
  </nav>`  
  $('#menu').html(menu)  
  
  }
