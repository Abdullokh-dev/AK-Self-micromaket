<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center main-row">
    <div class="col-11 col-xl-10">
      <div class="row">

        <div class="col-12 col-lg-4 col-xl-5 d-flex justify-content-center justify-content-xl-start mt-5 pt-4">
          <div class="my-card mb-4" data-aos="fade-zoom-in">
            <div class="card-text">
              more than 1000 micromarkets in 57 cities of world
            </div>
            <!-- ICON -->
            <span class="icon">
              <svg width="41" height="57" viewBox="0 0 41 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5 0C9.18272 0 0 8.20775 0 18.3214C0 34.6071 20.5 57 20.5 57C20.5 57 41 34.6071 41 18.3214C41 8.20775 31.8173 0 20.5 0ZM20.5 28.5C18.8782 28.5 17.2928 28.0224 15.9443 27.1277C14.5958 26.2329 13.5448 24.9612 12.9242 23.4733C12.3035 21.9854 12.1412 20.3481 12.4576 18.7686C12.774 17.189 13.5549 15.7381 14.7017 14.5993C15.8485 13.4605 17.3096 12.6849 18.9003 12.3707C20.4909 12.0566 22.1396 12.2178 23.638 12.8341C25.1364 13.4504 26.417 14.4941 27.3181 15.8332C28.2191 17.1723 28.7 18.7466 28.7 20.3571C28.6976 22.516 27.8329 24.5858 26.2957 26.1124C24.7584 27.639 22.674 28.4976 20.5 28.5Z" fill="#6357AD"/>
              </svg>
            </span>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl mt-lg-5 d-md-flex justify-content-md-center">
          <div class="list-text" data-aos="fade-zoom-in" data-aos-delay="100">
            <div class="title mt-lg-4">what do we sell?</div>
            <ul class="mt-2">
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                ready-made food
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                snacks
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                drinks
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                ice cream
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl mt-lg-5 pt-lg-3 d-md-flex justify-content-md-center">
          <div class="list-text" data-aos="fade-zoom-in" data-aos-delay="200">
            <div class="title">where do we place them?</div>
            <ul>
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                business centers
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                offices of large companies
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                government organizations
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                educational institutions
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                medical institutions
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#FFC54A"/></svg>
                residential complexes
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.main-row {
  background-color: white;
}

.my-card {
  border-radius: 20px;
  background-color: #FFC54A;
  position: relative;
  max-width: 550px;
  max-height: 425px;
}

.card-text {
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  text-align: left;
  margin: 32px 65px 38px 32px;
}

.icon {
  position: absolute;
  top: 27px;
  right: 24px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul > li {
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
}
@media only screen and (min-width: 992px) {
  .my-card {
    max-width: 550px;
  }

  .card-text {
    line-height: 45px;
    font-size: 32px;
  }
}
</style>
