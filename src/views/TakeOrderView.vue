<template>

<div class="mp4">
  <navbar-page></navbar-page>
  <video autoplay playsinline loop muted width="400" height="240" class="videomp4">
    <source src="/assets/mp4/IMG_1404.mp4" type="video/mp4">
    Trình duyệt của bạn không hỗ trợ thẻ video.
  </video>
  <div class="box-order">
    <div class="order-box-item">
      <div class="item-number">
        <div class="item-number-price">Số Dư Tài Khoản (USD)</div>
        <div class="item-number-price">0</div>
      </div>
      <div class="item-number">
        <div class="item-number-price">Số Lượng Đơn</div>
        <div class="item-number-price">0</div>
      </div>
      <div class="item-number">
        <div class="item-number-price">Hoa Hồng Nhận</div>
        <div class="item-number-price">0</div>
      </div>
      <div class="item-number">
        <div class="item-number-price">Số Dư Đóng Băng</div>
        <div class="item-number-price">0</div>
      </div>
    </div>
  </div>
  <div class="order-box-item" style="border-bottom:none">
      <div class="item-button" id="autoStart">ĐƠN HÀNG TRONG NGÀY</div>
  </div>
  <div data-v-8a12c4a7="" class="gamesList__container-title">TRIP-PLANNING TIPS
  </div>
  <div class="grid-temple">
    <div class="card__tile card__tile--single bg--white">
      <a target="_blank" href="https://reservations.mallofamerica.com/package/info/14709/8019"><span class="accessible--hidden">Spring Break Packages image</span>
		
			</a>
      <span class="accessible--hidden">Spring Break Packages image</span>
      <div class="card__tile--image element--bg-cover bg--white " style="background-image:url( https://mallofamerica.com/sites/default/files/2024-02/Spring-Break_24_Web_Tile_Ares_Stay.jpg );">

      </div>
      <div class="card__tile--details bg--white">
      <a target="_blank" href="https://reservations.mallofamerica.com/package/info/14709/8019">
              <h3 class="heading--card-title ">Spring Break Packages</h3>
          </a>
          <div class="heading--card-description">Get your spring break plans together—literally! Book your MOA hotel + attraction tickets together and save!</div>

          <a target="" href="https://reservations.mallofamerica.com/package/info/14709/8019" class="card__cta">
              <span class="heading--card-info-header -cta" style="margin: 0 5px 0 0;">See Packages</span>
              <svg class="nav_arrow" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 18 18" style="height: 13px;">
                  <path fill="#000" fill-rule="evenodd" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zM8 15l-1.5-1.5L11 9 6.5 4.49 8 3l6 6z"></path>
              </svg>
          </a>
      </div>
    </div>
        <div class="card__tile card__tile--single bg--white">
      <a target="_blank" href="https://reservations.mallofamerica.com/package/info/14709/8019"><span class="accessible--hidden">Spring Break Packages image</span>
		
			</a>
      <span class="accessible--hidden">Spring Break Packages image</span>
      <div class="card__tile--image element--bg-cover bg--white " style="background-image:url( https://mallofamerica.com/sites/default/files/2024-02/Spring-Break_24_Web_Tile_Travel%20Essentials.jpg );">

      </div>
      <div class="card__tile--details bg--white">
      <a target="_blank" href="https://reservations.mallofamerica.com/package/info/14709/8019">
              <h3 class="heading--card-title ">Travel Must-Haves</h3>
          </a>
          <div class="heading--card-description">From essential packables to fresh looks for sun and sea, MOA is your first stop for every vacation.</div>

          <a target="" href="https://reservations.mallofamerica.com/package/info/14709/8019" class="card__cta">
              <span class="heading--card-info-header -cta" style="margin: 0 5px 0 0;">Get Inspired</span>
              <svg class="nav_arrow" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 18 18" style="height: 13px;">
                  <path fill="#000" fill-rule="evenodd" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zM8 15l-1.5-1.5L11 9 6.5 4.49 8 3l6 6z"></path>
              </svg>
          </a>
      </div>
    </div>
        <div class="card__tile card__tile--single bg--white">
      <a target="_blank" href="https://reservations.mallofamerica.com/package/info/14709/8019"><span class="accessible--hidden">Spring Break Packages image</span>
		
			</a>
      <span class="accessible--hidden">Spring Break Packages image</span>
      <div class="card__tile--image element--bg-cover bg--white " style="background-image:url( https://mallofamerica.com/sites/default/files/2024-02/Spring-Break_24_Web_Tile_Trip_OneDay.jpg );">

      </div>
      <div class="card__tile--details bg--white">
      <a target="_blank" href="https://reservations.mallofamerica.com/package/info/14709/8019">
              <h3 class="heading--card-title ">One-Day Getaway</h3>
          </a>
          <div class="heading--card-description">How much fun can you pack into one single day? More than you ever imagined at Mall of America!</div>

          <a target="" href="https://reservations.mallofamerica.com/package/info/14709/8019" class="card__cta">
              <span class="heading--card-info-header -cta" style="margin: 0 5px 0 0;">Start Planning</span>
              <svg class="nav_arrow" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 18 18" style="height: 13px;">
                  <path fill="#000" fill-rule="evenodd" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zM8 15l-1.5-1.5L11 9 6.5 4.49 8 3l6 6z"></path>
              </svg>
          </a>
      </div>
    </div>
  </div>
  <footer-page></footer-page>
</div>
</template>
<script>
import NavbarPage from '@/components/NavbarPage.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'TakeOrderView',
  components: {
    'navbar-page': NavbarPage,
    'footer-page': FooterBar,
  }
}
</script>
<style scoped>
@media screen and (max-width: 500px) {
  .videomp4 {
    width: 100%; /* Đặt chiều rộng video thành 100% của container */
    height: auto; /* Điều chỉnh chiều cao tự động dựa trên tỷ lệ của video */
  }
}
.box-order {
  border: 1px solid #e5e5e5;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 1px 10px 0px #ccc;
  margin-bottom: 10px;
}
.order-box-item {
  padding: 5px 10px;
}
.item-number {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;

}
.item-number-price {
  font-size: 14px;
}
.order-box-item {
  padding: 5px 10px;
}
.item-button {
  width: 95%;
  margin-left: 2.5%;
  background: rgb(0, 0, 139);
  height: 40px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
}
.grid-temple {
    padding: 0px 0 0;
    display: -webkit-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    box-lines: multiple;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    box-align: stretch;
    -moz-align-items: stretch;
    -ms-align-items: stretch;
    -o-align-items: stretch;
    align-items: stretch;
    -ms-flex-align: stretch
}
 .card__tile--single {
    width: calc(33.33333% - -212px);
    float: left;
    margin-left: 30px;
    margin-bottom: 30px
}
@media screen and (max-width: 1024px) {
    card__tile--single {
        width: 100%;
        float: left;
        margin-left: 30px
    }
}
@media screen and (max-width: 768px) {
    .card__tile--double .card__tile--details {
        max-width:calc(100vw - (30px * 4))
    }
}
.card__tile {
  position: relative;
}
.bg--white {
  background-color: #fff;
}
.accessible--hidden {
    position: absolute!important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px,1px,1px,1px);
    padding: 0!important;
    border: 0!important;
    height: 1px!important;
    width: 1px!important;
    overflow: hidden
}
.card__tile--image {
  font-size: 0;
}
.element--bg-cover {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center
}
.card__tile--single .card__tile--image:before {
    content: "";
    padding-top: 56%;
    display: block;
}
.card__tile--single .heading--card-info-location span {
    margin-left: 0!important
}
.card__tile--details {
  padding: 8px;
  width: 100%;
  max-width: 100%;
}
.heading--card-description {
    font-family: "Cera Pro",helvetica,arial,sans-serif;
    font-weight: 300;
    text-decoration: none;
    letter-spacing: .025em;
    font-size: .88889em;
    font-size: 16px;
    line-height: 1.38;
    color: #313131
}
.card__cta {
  display: table;
  margin-top: .5rem;
}
a {
 text-decoration: none;
 color: inherit;
 transition: .35s;
}
.heading--card-info-header {
    font-family: Interstate,helvetica,arial,sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: .25em;
    font-size: 12px;
    font-size: .26667em;
    color: #313131;
    -webkit-font-smoothing: antialiased
}
.heading--card-title {
    font-family: Bodoni,Bodoni MT,TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif;
    font-weight: 700;
    text-decoration: none;
    font-size: 5px;
    font-size: 0.8rem;
    line-height: 1.16;
    color: #313131;
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
    overflow-wrap: break-word;
}
@media screen and (max-width: 550px) {
    .heading--card-title {
        font-size:19px;
        font-size: 1.1875em
    }
}
.h3 {
    font-family: Bodoni,Bodoni MT,TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif;
    font-size: 24px;
    font-size: 1.33333em;
    line-height: 1.25;
    color: #313131;
    margin: .125em 0 .35em 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}
@media screen and (max-width: 550px) {
    .h3 {
        font-size:16px;
        font-size: 16
    }
}

</style>