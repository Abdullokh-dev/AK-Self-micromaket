<script setup>
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
</script>
<template>
  <div class="row">
    <div class="col d-flex justify-content-center">
      <nav class="navbar navbar-expand-lg bg-light" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Self.</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  for clients
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Micromarket</a></li>
                  <li><a class="dropdown-item" href="#">Subsidy system</a></li>
                  <li><a class="dropdown-item" href="#">FAQ</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  For suppliers
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Micromarket</a></li>
                  <li><a class="dropdown-item" href="#">Subsidy system</a></li>
                  <li><a class="dropdown-item" href="#">FAQ</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contacts
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Micromarket</a></li>
                  <li><a class="dropdown-item" href="#">Subsidy system</a></li>
                  <li><a class="dropdown-item" href="#">FAQ</a></li>
                </ul>
              </li>

            </ul>

            <form class="d-flex" role="search">
              <button type="button" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </button>
              <button type="button" class="btn btn-primary rounded-pill ms-2">
                Leave an application
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>


<style scoped>
#navbar {
  position: fixed;
  top: 0;
  width: 85%;
  display: block;
  transition: top 0.3s;
  z-index: 9999;
  border-radius: 0 0 20px 20px;
}
a.nav-link.dropdown-toggle::after {
  display: none;
}

.dropdown-menu[data-bs-popper] {
  border-top: rebeccapurple solid 2px;
  background-color: yellow;
  border-radius: 0 0 20px 20px;
}
</style>
