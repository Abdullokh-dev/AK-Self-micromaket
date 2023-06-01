<template>
  <div class="row d-flex justify-content-center main-row">
    <div class="col-11 col-xl-12">
      <div class="row">

        <div class="col-12 col-lg-4 p-0 text-center">
          <div class="title">
            <div>
              №1
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="description">
              we were the first to install micromarkets in the UAE
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4 text-center">
          <div class="title">
            1000
          </div>
          <div class="d-flex justify-content-center">
            <div class="description">
              more than 1000 in 57 cities of world
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4 text-center">
          <div class="title">
            7
          </div>
          <div class="d-flex justify-content-center mb-5 mb-lg-0">
            <div class="description">
              we have been dealing with micromarkets for more than 7 years.
            </div>
          </div>
        </div>

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
