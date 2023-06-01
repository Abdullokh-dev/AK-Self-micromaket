<script setup>
import Header from "../components/Header.vue";
</script>

<template>
  <Header />
  <div class="row d-flex main-row justify-content-center">
    <div class="col-12 col-md-10 main-col mb-5">
      <div class="ms-4 mb-5">
        <h1><span>FAQ</span></h1>
      </div>
      <!-- Bg Image -->
      <div class="d-none d-lg-block">
        <img src="../assets/faq/img.png" class="bg-right" height="396" alt="" draggable="false">
      </div>

      <!-- Bg Image -->
      <div class="d-none d-lg-block">
        <img src="../assets/faq/img_1.png" class="bg-left" width="114" alt="" draggable="false">
      </div>

      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="my-column">
          <div class="accordion-item">
            <div class="accordion-header">
              <button class="accordion-button ps-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-1" aria-expanded="false" aria-controls="flush-collapseOne">
                how much does it cost to install a micro market?
              </button>
            </div>
            <div id="flush-1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body ps-2">
                Installation and maintenance of the micro market are free.
              </div>
            </div>
          </div>
        </div>

        <div class="my-column">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-2" aria-expanded="false" aria-controls="flush-collapseTwo">
                and if we have limited space in our office, can you still install it?
              </button>
            </h2>
            <div id="flush-2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                For the installation of the minimum set of the micro market, less than 1 square meter of free space is required. Our manager will come to your office and help determine a suitable location.
              </div>
            </div>
          </div>
        </div>

        <div class="my-column">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-3" aria-expanded="false" aria-controls="flush-3">
                how much electricity is needed for installation?
              </button>
            </h2>
            <div id="flush-3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                To install the micro market, we need one socket with a voltage of 220V. We cover all electricity expenses ourselves.
              </div>
            </div>
          </div>
        </div>

        <div class="my-column">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-4" aria-expanded="false" aria-controls="flush-3">
                who and how often services the micro market?
              </button>
            </h2>
            <div id="flush-4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                Our specialists service the micro market according to a pre-agreed schedule.
              </div>
            </div>
          </div>
        </div>

        <div class="my-column">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-5" aria-expanded="false" aria-controls="flush-3">
                can we change the assortment or is it set once?
              </button>
            </h2>
            <div id="flush-5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                Before installing the micro market in your office, our manager will clarify the preferences of your employees and based on them, we will create an assortment that meets your requests. In the future, you can always provide your feedback and wishes regarding the assortment through our chatbot* and we will make adjustments so that you always find the desired dishes in the micro market.
                <br /> <br />
                *To write to the chatbot, scan the QR code on the micro market and choose a convenient messenger."
              </div>
            </div>
          </div>
        </div>

        <div class="my-column">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-6" aria-expanded="false" aria-controls="flush-3">
                what are the payment methods available?
              </button>
            </h2>
            <div id="flush-6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                The micromarket accepts payment by ApplePay, Samsung Pay and contactless payment. It is also possible to pay through a subsidy system!
              </div>
            </div>
          </div>
        </div>

        <div class="my-column">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-7" aria-expanded="false" aria-controls="flush-3">
                how does the loyalty system work?
              </button>
            </h2>
            <div id="flush-7" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                After registering in the loyalty system, you will be able to download an electronic card that you can add to Apple Wallet, Google Pay, or a similar application for working with discount cards.
              </div>
            </div>
          </div>
        </div>

        <div class="my-column">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-8" aria-expanded="false" aria-controls="flush-3">
                can you make a custom design for the micro market?
              </button>
            </h2>
            <div id="flush-8" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                If necessary, we can create a custom design for the micro market using your company's logo and other branding.
              </div>
            </div>
          </div>
        </div>

        <div class="my-column">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-9" aria-expanded="false" aria-controls="flush-3">
                do you often get cheated considering that the products are in open access?
              </button>
            </h2>
            <div id="flush-9" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                We trust our customers and therefore have placed the products in open access. Situations where our trust was taken advantage of are very rare. In any case, we are ready to take all risks upon ourselves and do not cause inconvenience to our customers.
              </div>
            </div>
          </div>
        </div>

        <div class="my-column">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-10" aria-expanded="false" aria-controls="flush-3">
                what should I do if I have payment problems?
              </button>
            </h2>
            <div id="flush-10" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                If you encounter a problem, please scan the QR code on the micro market and write to us through our chatbot in a convenient messenger..
              </div>
            </div>
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

.main-col {
  z-index: 1;
}

h1 {
  font-size: 40px;
  font-weight: 900;
  line-height: 56px;
  text-align: left;
  margin-top: 183px;
}

h1 > span {
  border-bottom: 5px solid black;
  font-weight: 800;
}

.accordion-header {
  background-color: white;
}

.my-column {
  background: #F5F5F5;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
}

.accordion-button {
  border: none;
  outline: none;
  background-color: #F5F5F5;
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
}

.accordion-body {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  background-color: #F5F5F5;
}

.accordion {
  --bs-accordion-active-color: black;
  --bs-accordion-btn-focus-box-shadow: none;
}

.bg-right {
  position: absolute;
  top: 20%;
  right: 0;
  z-index: -1;
}

.bg-left {
  position: absolute;
  top: 60%;
  left: 0;
  z-index: -1;
}
</style>
