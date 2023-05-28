<script setup>
// Disable toggle when outside clicked
$(window).on('click', function(event){
  let clickOver = $(event.target)
  if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
    // Click on navbar toggler button
    $('button[aria-expanded="true"]').click();
  }
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-93px";
  }
  prevScrollpos = currentScrollPos;
}
</script>
<template>
  <div class="row">
    <div class="col d-flex justify-content-center">
      <nav class="navbar navbar-expand-xl" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand ms-4 mt-2 mb-3" href="#" @click="$router.push('/')">
            <svg width="82" height="43" viewBox="0 0 82 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.17509 37.1136C8.88563 37.1136 9.45052 37.3238 9.86974 37.7443C10.2961 38.1647 10.5092 38.7989 10.5092 39.6469V42.9055H8.48417V39.9728C8.48417 39.5733 8.40601 39.279 8.24969 39.0898C8.10048 38.9006 7.88731 38.806 7.6102 38.806C7.30467 38.806 7.05953 38.9111 6.87478 39.1213C6.69004 39.3315 6.59767 39.6504 6.59767 40.0779V42.9055H4.57261V39.9728C4.57261 39.1949 4.28129 38.806 3.69864 38.806C3.386 38.806 3.13731 38.9111 2.95256 39.1213C2.76782 39.3315 2.67545 39.6504 2.67545 40.0779V42.9055H0.650391V37.2082H2.57953V37.8073C2.79269 37.5761 3.04493 37.4044 3.33626 37.2923C3.63469 37.1731 3.95799 37.1136 4.30616 37.1136C4.71117 37.1136 5.07355 37.1871 5.39329 37.3343C5.71304 37.4815 5.97239 37.7057 6.17134 38.0071C6.39872 37.7197 6.68649 37.499 7.03466 37.3448C7.38283 37.1907 7.76297 37.1136 8.17509 37.1136Z" fill="black"/>
              <path d="M11.7874 37.2082H13.8124V42.9055H11.7874V37.2082ZM12.7999 36.5775C12.4304 36.5775 12.132 36.4759 11.9046 36.2726C11.6773 36.0694 11.5636 35.8171 11.5636 35.5158C11.5636 35.2145 11.6773 34.9622 11.9046 34.7589C12.132 34.5557 12.4304 34.4541 12.7999 34.4541C13.1694 34.4541 13.4678 34.5522 13.6952 34.7484C13.9226 34.9376 14.0363 35.1829 14.0363 35.4842C14.0363 35.7996 13.9226 36.0624 13.6952 36.2726C13.4678 36.4759 13.1694 36.5775 12.7999 36.5775Z" fill="black"/>
              <path d="M18.0808 43.0001C17.4413 43.0001 16.8693 42.874 16.3648 42.6217C15.8603 42.3694 15.466 42.019 15.1818 41.5705C14.9047 41.122 14.7661 40.614 14.7661 40.0463C14.7661 39.4787 14.9047 38.9741 15.1818 38.5326C15.466 38.0841 15.8603 37.7373 16.3648 37.492C16.8693 37.2397 17.4413 37.1136 18.0808 37.1136C18.7345 37.1136 19.2994 37.2537 19.7755 37.534C20.2515 37.8073 20.589 38.1893 20.788 38.6798L19.2212 39.4682C18.9583 38.9566 18.5746 38.7008 18.0701 38.7008C17.7078 38.7008 17.4058 38.82 17.1642 39.0582C16.9297 39.2965 16.8125 39.6259 16.8125 40.0463C16.8125 40.4738 16.9297 40.8102 17.1642 41.0555C17.4058 41.2937 17.7078 41.4129 18.0701 41.4129C18.5746 41.4129 18.9583 41.1571 19.2212 40.6455L20.788 41.4339C20.589 41.9244 20.2515 42.3099 19.7755 42.5902C19.2994 42.8635 18.7345 43.0001 18.0808 43.0001Z" fill="black"/>
              <path d="M23.4796 37.8914C23.6857 37.6321 23.9521 37.4394 24.279 37.3133C24.6129 37.1801 24.9931 37.1136 25.4194 37.1136V38.9111C25.2347 38.89 25.0819 38.8795 24.9611 38.8795C24.5277 38.8795 24.1866 38.9952 23.9379 39.2264C23.6963 39.4577 23.5755 39.8116 23.5755 40.2881V42.9055H21.5505V37.2082H23.4796V37.8914Z" fill="black"/>
              <path d="M29.1021 43.0001C28.4839 43.0001 27.9261 42.874 27.4287 42.6217C26.9313 42.3694 26.5405 42.019 26.2563 41.5705C25.9792 41.122 25.8406 40.614 25.8406 40.0463C25.8406 39.4857 25.9792 38.9811 26.2563 38.5326C26.5405 38.0841 26.9278 37.7373 27.4181 37.492C27.9154 37.2397 28.4768 37.1136 29.1021 37.1136C29.7273 37.1136 30.2887 37.2397 30.7861 37.492C31.2834 37.7373 31.6707 38.0841 31.9478 38.5326C32.2249 38.9741 32.3635 39.4787 32.3635 40.0463C32.3635 40.614 32.2249 41.122 31.9478 41.5705C31.6707 42.019 31.2834 42.3694 30.7861 42.6217C30.2887 42.874 29.7273 43.0001 29.1021 43.0001ZM29.1021 41.4129C29.4573 41.4129 29.7487 41.2937 29.976 41.0555C30.2034 40.8102 30.3171 40.4738 30.3171 40.0463C30.3171 39.6259 30.2034 39.2965 29.976 39.0582C29.7487 38.82 29.4573 38.7008 29.1021 38.7008C28.7468 38.7008 28.4555 38.82 28.2281 39.0582C28.0007 39.2965 27.887 39.6259 27.887 40.0463C27.887 40.4738 28.0007 40.8102 28.2281 41.0555C28.4555 41.2937 28.7468 41.4129 29.1021 41.4129Z" fill="black"/>
              <path d="M40.8263 37.1136C41.5368 37.1136 42.1017 37.3238 42.5209 37.7443C42.9472 38.1647 43.1604 38.7989 43.1604 39.6469V42.9055H41.1353V39.9728C41.1353 39.5733 41.0572 39.279 40.9009 39.0898C40.7516 38.9006 40.5385 38.806 40.2614 38.806C39.9558 38.806 39.7107 38.9111 39.526 39.1213C39.3412 39.3315 39.2488 39.6504 39.2488 40.0779V42.9055H37.2238V39.9728C37.2238 39.1949 36.9325 38.806 36.3498 38.806C36.0372 38.806 35.7885 38.9111 35.6037 39.1213C35.419 39.3315 35.3266 39.6504 35.3266 40.0779V42.9055H33.3016V37.2082H35.2307V37.8073C35.4439 37.5761 35.6961 37.4044 35.9874 37.2923C36.2859 37.1731 36.6092 37.1136 36.9573 37.1136C37.3623 37.1136 37.7247 37.1871 38.0445 37.3343C38.3642 37.4815 38.6236 37.7057 38.8225 38.0071C39.0499 37.7197 39.3377 37.499 39.6858 37.3448C40.034 37.1907 40.4141 37.1136 40.8263 37.1136Z" fill="black"/>
              <path d="M46.9006 37.1136C47.8598 37.1136 48.5917 37.3308 49.0962 37.7653C49.6007 38.1928 49.8529 38.8515 49.8529 39.7415V42.9055H47.9664V42.1697C47.6751 42.7233 47.1067 43.0001 46.2611 43.0001C45.8135 43.0001 45.4262 42.923 45.0994 42.7689C44.7725 42.6147 44.5238 42.408 44.3533 42.1487C44.1899 41.8824 44.1082 41.581 44.1082 41.2447C44.1082 40.7051 44.3178 40.2881 44.737 39.9938C45.1562 39.6924 45.8028 39.5418 46.6768 39.5418H47.8279C47.7923 38.9391 47.3838 38.6378 46.6022 38.6378C46.3251 38.6378 46.0444 38.6833 45.7602 38.7744C45.476 38.8585 45.2344 38.9776 45.0354 39.1318L44.3533 37.7758C44.673 37.5656 45.0603 37.4044 45.515 37.2923C45.9769 37.1731 46.4387 37.1136 46.9006 37.1136ZM46.826 41.7387C47.0605 41.7387 47.2665 41.6827 47.4442 41.5705C47.6218 41.4584 47.7497 41.2937 47.8279 41.0765V40.5824H46.9539C46.3641 40.5824 46.0693 40.7751 46.0693 41.1606C46.0693 41.3358 46.1368 41.4759 46.2718 41.581C46.4068 41.6862 46.5915 41.7387 46.826 41.7387Z" fill="black"/>
              <path d="M53.0603 37.8914C53.2664 37.6321 53.5328 37.4394 53.8597 37.3133C54.1936 37.1801 54.5738 37.1136 55.0001 37.1136V38.9111C54.8153 38.89 54.6626 38.8795 54.5418 38.8795C54.1084 38.8795 53.7673 38.9952 53.5186 39.2264C53.277 39.4577 53.1562 39.8116 53.1562 40.2881V42.9055H51.1312V37.2082H53.0603V37.8914Z" fill="black"/>
              <path d="M58.4577 40.9083L57.8608 41.5075V42.9055H55.8358V35.1058H57.8608V39.1949L59.9285 37.2082H62.3266L59.9285 39.6469L62.5291 42.9055H60.0777L58.4577 40.9083Z" fill="black"/>
              <path d="M68.7869 40.0674C68.7869 40.0814 68.7762 40.2461 68.7549 40.5614H64.5556C64.6409 40.8557 64.8043 41.0835 65.0459 41.2447C65.2946 41.3988 65.6036 41.4759 65.9731 41.4759C66.2502 41.4759 66.4883 41.4374 66.6872 41.3603C66.8933 41.2832 67.0993 41.1571 67.3054 40.9819L68.3712 42.0751C67.8099 42.6918 66.9892 43.0001 65.9092 43.0001C65.2342 43.0001 64.6409 42.874 64.1293 42.6217C63.6177 42.3694 63.2198 42.019 62.9355 41.5705C62.6584 41.122 62.5199 40.614 62.5199 40.0463C62.5199 39.4857 62.6549 38.9846 62.9249 38.5432C63.202 38.0947 63.5821 37.7443 64.0653 37.492C64.5485 37.2397 65.092 37.1136 65.696 37.1136C66.2716 37.1136 66.7938 37.2327 67.2628 37.471C67.7317 37.7022 68.1012 38.0421 68.3712 38.4906C68.6483 38.9321 68.7869 39.4577 68.7869 40.0674ZM65.7067 38.5326C65.394 38.5326 65.1311 38.6202 64.918 38.7954C64.7119 38.9706 64.5805 39.2089 64.5236 39.5102H66.8897C66.8329 39.2089 66.6979 38.9706 66.4847 38.7954C66.2787 38.6202 66.0193 38.5326 65.7067 38.5326Z" fill="black"/>
              <path d="M73.7067 42.6743C73.5362 42.7794 73.3266 42.86 73.0779 42.916C72.8363 42.9721 72.577 43.0001 72.2999 43.0001C71.5467 43.0001 70.9676 42.8179 70.5626 42.4535C70.1576 42.0891 69.9551 41.546 69.9551 40.8242V38.9111H69.1131V37.4184H69.9551V35.9363H71.9801V37.4184H73.3017V38.9111H71.9801V40.8032C71.9801 41.0064 72.0334 41.1676 72.14 41.2867C72.2537 41.3988 72.4029 41.4549 72.5876 41.4549C72.8221 41.4549 73.0282 41.3953 73.2058 41.2762L73.7067 42.6743Z" fill="black"/>
              <path d="M76.5873 43.0001C76.1041 43.0001 75.6281 42.9476 75.1591 42.8424C74.6901 42.7303 74.3135 42.5867 74.0293 42.4115L74.6368 41.0449C74.8997 41.2061 75.2124 41.3358 75.5748 41.4339C75.9371 41.525 76.296 41.5705 76.6512 41.5705C76.9781 41.5705 77.209 41.539 77.344 41.4759C77.4861 41.4058 77.5572 41.3077 77.5572 41.1816C77.5572 41.0555 77.4719 40.9679 77.3014 40.9188C77.138 40.8627 76.8751 40.8102 76.5127 40.7611C76.0508 40.7051 75.6565 40.6315 75.3296 40.5404C75.0099 40.4493 74.7328 40.2811 74.4983 40.0358C74.2638 39.7906 74.1466 39.4472 74.1466 39.0057C74.1466 38.6413 74.2567 38.3189 74.477 38.0386C74.6972 37.7513 75.017 37.527 75.4362 37.3658C75.8625 37.1977 76.3706 37.1136 76.9603 37.1136C77.3796 37.1136 77.7952 37.1556 78.2073 37.2397C78.6195 37.3238 78.9641 37.4429 79.2412 37.5971L78.6337 38.9531C78.1221 38.6728 77.5678 38.5326 76.971 38.5326C76.6512 38.5326 76.4168 38.5712 76.2675 38.6483C76.1183 38.7184 76.0437 38.813 76.0437 38.9321C76.0437 39.0652 76.1254 39.1598 76.2889 39.2159C76.4523 39.265 76.7223 39.3175 77.0989 39.3736C77.575 39.4437 77.9693 39.5243 78.2819 39.6154C78.5946 39.7065 78.8646 39.8746 79.092 40.1199C79.3264 40.3582 79.4437 40.6946 79.4437 41.129C79.4437 41.4864 79.3336 41.8088 79.1133 42.0961C78.893 42.3764 78.5662 42.5972 78.1327 42.7584C77.7064 42.9195 77.1913 43.0001 76.5873 43.0001Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M38.187 17.1141H29.8101C29.9895 16.3452 30.7409 15.5109 31.3295 15.1094C32.8622 14.0638 35.1098 13.9303 36.6998 15.0772L37.3844 15.7143C37.6354 16.0371 37.7009 16.0843 37.9118 16.5084C38.0119 16.7096 38.089 16.9104 38.187 17.1141ZM21.9293 19.8105C21.9293 22.1372 22.2193 23.4175 23.0156 25.2743C23.2832 25.8984 23.7286 26.5968 24.1116 27.1516C25.2532 28.8049 27.2626 30.3994 29.1487 31.1467C31.2756 31.9893 32.5779 32.1921 34.9354 32.1921C36.5733 32.1921 38.2171 31.813 39.6199 31.2567C40.2474 31.0079 40.3904 30.9001 40.9234 30.6323C41.4421 30.3715 42.1553 29.8826 42.6132 29.5131C43.2547 28.9953 44.7577 27.5905 44.9104 27.0194L39.6198 23.3874C39.2197 23.9842 38.3208 24.6396 37.681 25.0284C35.8816 26.1218 32.9974 26.1317 31.285 24.7213C30.8489 24.3621 30.6533 24.1594 30.3135 23.7103C29.9272 23.1996 29.8321 22.8543 29.5897 22.3969L46.6641 22.3871C46.8473 22.3182 46.8562 21.6846 46.8863 21.3983C47.0215 20.1109 46.9237 18.6567 46.6878 17.4855C46.4108 16.1105 45.9723 14.8762 45.2585 13.6849C44.8922 13.0735 44.7809 12.9394 44.3283 12.3575L43.6021 11.5419C41.4981 9.44106 38.09 8.0893 35.0457 8.0893C32.6705 8.0893 31.1612 8.24238 29.0749 9.17107C27.2681 9.97531 25.6818 11.1811 24.4957 12.688C23.7692 13.611 23.8492 13.6107 23.3177 14.4833C22.5417 15.7573 21.9293 18.202 21.9293 19.8105Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.270868 15.8484C0.270868 19.4511 2.0292 21.47 4.59232 22.5392C6.78583 23.4542 9.06289 23.5872 11.2606 24.1352C11.8479 24.2816 12.8912 24.6721 12.8912 25.3135V25.5336C12.8912 26.6793 11.4113 26.8543 10.4112 26.8543C8.78188 26.8543 7.43522 26.1117 7.43522 24.488H0.160645C-0.0791214 24.488 0.00645433 24.8383 0.0581062 25.3608C0.170197 26.4947 0.799112 27.9811 1.55255 28.8212C2.19249 29.5347 2.09124 29.479 2.97902 30.1483C4.45412 31.2604 7.15857 32.1921 9.74988 32.1921C12.0257 32.1921 13.2741 32.1998 15.4333 31.4838C17.7241 30.7241 19.7947 29.1333 20.4739 26.7217C21.4751 23.167 20.3025 20.0303 16.9379 18.6313C14.8384 17.7582 13.3677 17.5884 11.0588 17.1278C9.66232 16.8493 7.87612 16.5343 7.87612 15.1881C7.87612 13.8153 9.69122 13.8674 10.5214 13.8674C11.7782 13.8674 12.5306 14.5672 12.6538 15.7002C12.6778 15.9209 12.6066 16.1236 12.8361 16.1236H20.1658C20.1658 13.7785 18.8912 11.5173 17.1191 10.196C13.6556 7.61363 6.78466 7.47642 3.28587 10.1093C2.35684 10.8084 1.80934 11.3563 1.19668 12.3705C0.696727 13.1981 0.270868 14.5367 0.270868 15.8484Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M61.6089 8.6396H57.9716V15.6283H61.6089V31.6418H69.4897V15.6283H74.0088C74.1358 15.6283 74.1741 15.59 74.1741 15.4632V8.6396H69.4897C69.4897 5.7115 72.0891 6.16327 74.1741 6.16327V0H71.1066C69.6946 0.0360754 68.292 0.169584 67.1126 0.597934C66.5195 0.813347 66.0833 1.01286 65.5599 1.3037C65.317 1.43861 65.1063 1.56827 64.8836 1.72899C62.6394 3.34819 61.6089 5.86412 61.6089 8.6396Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M48.2172 31.6418H56.0429V1.21061H48.2172V31.6418Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M73.7885 23.7176V31.6418H81.8347C81.9607 31.6418 81.9994 31.6041 82 31.4797V23.7147C81.9994 23.5902 81.9607 23.5525 81.8347 23.5525H73.9538C73.8269 23.5525 73.7885 23.5908 73.7885 23.7176Z" fill="black"/>
            </svg>
          </a>

          <button class="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="39.9585" height="3.4842" rx="1.7421" fill="black"/>
              <rect y="11.9473" width="39.9585" height="3.4842" rx="1.7421" fill="black"/>
              <rect y="23.8936" width="39.9585" height="3.4842" rx="1.7421" fill="black"/>
            </svg>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Mobile Version -->
            <div class="accordion accordion-flush d-flex-block d-xl-none mb-4" id="accordionFlushExample">
              <div class="accordion-item">
                <div class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    for clients
                  </button>
                  <div class="row d-flex justify-content-center">
                    <div class="col mx-3">
                      <div class="own-hr"></div>
                    </div>
                  </div>
                </div>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div><span class="toggled-item" @click="$router.push('/')">Micromarket</span></div>
                    <div><span class="toggled-item" @click="$router.push('/subsidy')">Subsidy system</span></div>
                    <div><span class="toggled-item" @click="$router.push('/faq')">FAQ</span></div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    for suppliers
                  </button>
                  <div class="row d-flex justify-content-center">
                    <div class="col mx-3">
                      <div class="own-hr"></div>
                    </div>
                  </div>
                </div>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div><span class="toggled-item" @click="$router.push('/delivery')">Deliver</span></div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    contacts
                  </button>
                </div>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div><span class="toggled-item" @click="$router.push('/')">Micromarket</span></div>
                    <div><span class="toggled-item" @click="$router.push('/subsidy')">Subsidy system</span></div>
                    <div><span class="toggled-item" @click="$router.push('/faq')">FAQ</span></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desktop Version -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-none d-xl-flex">
              <li class="nav-item dropdown ms-lg-3">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  for clients
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click="$router.push('/')">Micromarket</a></li>
                  <li><a class="dropdown-item" href="#" @click="$router.push('/subsidy')">Subsidy system</a></li>
                  <li><a class="dropdown-item" href="#" @click="$router.push('/faq')">FAQ</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown ms-lg-4">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  for suppliers
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click="$router.push('/delivery')">Delivery</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown ms-lg-4">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  contacts
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click="$router.push('/')">Micromarket</a></li>
                  <li><a class="dropdown-item" href="#" @click="$router.push('/subsidy')">Subsidy system</a></li>
                  <li><a class="dropdown-item" href="#" @click="$router.push('/faq')">FAQ</a></li>
                </ul>
              </li>
            </ul>

            <form class="d-flex d-none d-xl-flex me-5" role="search">
              <button type="button" class="btn-call me-2">
                <svg width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.21031 0.643421C5.85886 0.425394 6.55481 0.461615 7.18232 0.746056C7.80983 1.0305 8.33103 1.546 8.65917 2.20674L8.76885 2.45297L9.75001 4.88388C10.0478 5.62172 10.1444 6.44089 10.028 7.23949C9.91149 8.0381 9.58702 8.78091 9.09492 9.37553L8.8978 9.59367L7.35196 11.2016C7.07332 11.4958 7.2823 12.6344 8.29013 14.5811C9.19718 16.3328 9.93527 17.1508 10.2984 17.1954H10.3621L10.4407 17.1789L13.479 16.1427C13.8873 16.0031 14.3231 15.9976 14.7342 16.1268C15.1452 16.2561 15.5142 16.5146 15.797 16.8715L15.9319 17.0616L17.9431 20.1684C18.3373 20.7773 18.5337 21.5178 18.5 22.2679C18.4663 23.0179 18.2046 23.7328 17.7578 24.2948L17.577 24.503L16.7737 25.3524C16.0524 26.1141 15.15 26.6289 14.174 26.8354C13.1979 27.0419 12.1891 26.9316 11.2677 26.5175C8.39981 25.2285 5.79426 22.2837 3.42734 17.7127C1.05597 13.1301 0.0703661 9.13591 0.510552 5.71512C0.643754 4.68106 1.02564 3.70653 1.61566 2.89502C2.20568 2.08352 2.9818 1.46534 3.8616 1.10614L4.14764 1.00037L5.21031 0.643421Z" fill="#6357AD"/>
                </svg>
              </button>
              <button type="button" class="rounded-pill btn-header ms-2 px-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                leave an application
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
  z-index: 10;
  border-radius: 0 0 32px 32px;
  background-color: #BEE2E5;
  font-size: 24px;
}

a {
  color: #6357AD !important;
}

a:hover {
  color: #3F3290;
}

a.dropdown-item {
  color: black !important;
  font-size: 18px;
  font-weight: 400;
  margin: 10px;
}

a.dropdown-item:hover {
  color: #3F3291 !important;
  background: none;
}

a.nav-link.dropdown-toggle::after {
  display: none;
}

.dropdown-menu[data-bs-popper] {
  border-top: rebeccapurple solid 2px;
  background: #ECFCFD;
  box-shadow: 0 6px 8px -6px rgba(24, 39, 75, 0.12), 0 8px 16px -6px rgba(24, 39, 75, 0.08);
  border-radius: 0 0 20px 20px;
}

ul.dropdown-menu.show {
  color: black;
}

.btn-call {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  padding-bottom: 4px;
  border: none;
}

.btn-header {
  background: #6357AD;
  font-size: 20px;
  border: none;
  color: white;
  font-weight: 700;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler:focus,
.navbar-toggler:active{
  outline: none;
  box-shadow: none;
}

.accordion-button:focus,
.accordion-button:active{
  outline: none;
  box-shadow: none;
  color: #3F3290;
}

.accordion-button {
  background-color: #BEE2E5;
  color: #6357AD;
  font-weight: 700;
  font-size: 24px;
}

.accordion {
  --bs-accordion-bg: #BEE2E5;
  --bs-accordion-active-color: #3F3290;
}

.accordion-item {
  border: none;
}

.accordion-button::after {
  background-image: none;
  transform: none;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("../assets/home/toogler.png");
}

.own-hr {
  border-top: 1px solid #6357AD;
  width: 100%;
}

.toggled-item {
  font-weight: 400;
  color: black;
  font-size: 20px;
  cursor: pointer;
}

.toggled-item:hover {
  color: #6357AD;
}

@media only screen and (max-width: 768px) {
  #navbar {
    width: 100%;
  }
}
</style>
