<template>
  <swiper id="swiper" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(sowing) in sowing_list" :key="sowing.public_id">
      <img :src="sowing.icon_url" :alt="sowing.public_name" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { log } from "util";
export default {
  name: "Sowing",
  props: {
    sowing_list: Array
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        //   bulletActiveClass: "my-bullet-acitve"
        },
        loop: true,
        autoplay: {
          delay: 1000
        },
        speed: 800
        // on:{
        //     slideChangeTransitionEnd(){
        //         console.log(this.activeIndex);

        //     }
        // }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
  //   mounted(){
  //       this.swiper.slideTo(5,1000,false)
  //   }
};
</script>

<style lang="less" scoped>
#swiper {
  width: 100%;
  height: 14rem;
  background-color: transparent;
}
#swiper img {
  width: 100%;
  height: 100%;
}
// #swiper >>> .swiper-pagination-bullet-active {
//   background-color: #75a342;
// }
</style>