<template>
    <div ref="mySwiper" data-v-08a831c1="" data-v-abc5f588="" class="swiper swiper-initialized swiper-horizontal swiper-ios my-swipe swiper-backface-hidden" id="banner">
        <div class="swiper-wrapper" style="transform: translate3d(-1182px, 0px, 0px); transition-duration: 300ms;">
            <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" style="width: 374px; margin-right: 20px;"><img data-v-08a831c1="" class="" data-origin="/assets/png/banner1.jpg" src="/assets/png/banner1.jpg">
            </div>
            <div data-v-08a831c1="" class="swiper-slide" data-swiper-slide-index="0" style="width: 374px; margin-right: 20px;"><img data-v-08a831c1="" class="" data-origin="" src="/assets/png/banner1.jpg">
            </div>
            <div data-v-08a831c1="" class="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style="width: 374px; margin-right: 20px;"><img data-v-08a831c1="" class="" data-origin="" src="/assets/png/2.jpg">
            </div>
            <div data-v-08a831c1="" class="swiper-slide swiper-slide-active" data-swiper-slide-index="2" style="width: 374px; margin-right: 20px;"><img data-v-08a831c1="" class="" data-origin="" src="/assets/png/1.jpg">
            </div>
            <div data-v-08a831c1="" class="swiper-slide swiper-slide-next" data-swiper-slide-index="3" style="width: 374px; margin-right: 20px;"><img data-v-08a831c1="" class="ar-lazyload" data-origin="/assets/png/4.jpg">
            </div>
            <div data-v-08a831c1="" class="swiper-slide" data-swiper-slide-index="4" style="width: 374px; margin-right: 20px;"><img data-v-08a831c1="" class="ar-lazyload" data-origin="" src="/assets/png/banner1.jpg">
            </div>
            <div data-v-08a831c1="" class="swiper-slide" data-swiper-slide-index="5" style="width: 374px; margin-right: 20px;"><img data-v-08a831c1="" class="ar-lazyload" data-origin="" src="/assets/png/banner1.jpg">
            </div>
            <div data-v-08a831c1="" class="swiper-slide" data-swiper-slide-index="6" style="width: 374px; margin-right: 20px;"><img data-v-08a831c1="" class="" data-origin="" src="/assets/png/banner1.jpg">
            </div>
            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 374px; margin-right: 20px;"><img data-v-08a831c1="" class="" data-origin="" src="/assets/png/4.jpg">
            </div>
        </div>
        <!---->
        <!---->
        <!---->
    </div>
</template>
<script>

import Swiper, { Autoplay } from 'swiper';
export default {
  name: 'HomeView',
  components: {

  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      // Make sure to call Swiper.use() before initializing Swiper
      Swiper.use([Autoplay]);
      new Swiper(this.$refs.mySwiper, {
        autoplay: {
          delay: 2000, // 2 giây
          disableOnInteraction: false, // Tiếp tục chạy khi tương tác
        },
        loop: true, // Lặp lại khi đến slide cuối
        // Các cấu hình khác của Swiper
      });
    }
  }
};
</script>
