<template>
  <div class="row main-row">

    <div class="col-12 col-lg-4 text-center">
      <div class="title">
        <span>
          N1
        </span>
      </div>
      <div class="description px-5">
        <span>
          We were the first to install micromarkets in Russia and the UAE
        </span>
      </div>
    </div>

    <div class="col-12 col-lg-4 text-center">
      <div class="title">
        <span>
          1000
        </span>
      </div>
      <div class="description px-5">
        <span>
          More than 1000 micromarkets in 54 cities in Russia and 3 cities in the UAE.
        </span>
      </div>
    </div>

    <div class="col-12 col-lg-4 text-center">
      <div class="title">
        <span>
          7
        </span>
      </div>
      <div class="description px-5 mb-5 mb-lg-0">
        <span>
          We have been dealing with micromarkets for more than 7 years.
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Belt"
}
</script>


<style scoped>
.main-row {
  background-color: #31C2B0;
  color: white;
}

.title {
  font-size: 60px;
  font-weight: 700;
  line-height: 60px;
  margin-top: 48px;
}

.description {
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  margin-top: 6px;
}

.description > span {
  max-width: 332px;
}

@media only screen and (min-width: 992px) {
  .description {
    font-size: 24px;
    line-height: 38px;
    margin: 24px 0 50px 0;
  }
}
</style>
