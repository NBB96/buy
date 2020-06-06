<template>
  <div id="home">
    <div v-if="!showLoading">
      <Header />
      <Sowing :sowing_list="sowing_list" />
      <Nav :nav_list="nav_list" />
      <FlashSale :flash_sale_product_list="flash_sale_product_list" />
      <YouLike :youlike_list="youlike_list" />
      <MarkPage v-if="showBackStatus" :scrollToTop="scrollToTop" />
    </div>
    <van-loading
      type="spinner"
      color="#75a342"
      v-else
      style="position:absolute;left:50%;top:40%;transform:translate(-50%)"
    >正在拼命加载中...</van-loading>
  </div>
</template>

<script>
import { getHomeData } from "./../../service/api/index";
import Header from "./components/header/Header";
import Sowing from "./components/sowing/Sowing";
import Nav from "./components/Nav/Nav";
import FlashSale from "./components/flashSale/FlashSale";
import YouLike from "./components/youlike/YouLike";
import MarkPage from "./components/markPage/MarkPage";
import { showBack,animate } from "./../../config/global";
export default {
  name: "Home",
  data() {
    return {
      sowing_list: [],
      showLoading: true,
      nav_list: [],
      flash_sale_product_list: [],
      youlike_list: [],
      showBackStatus: false
    };
  },
  created() {
    this.reqData()

    // getHomeData()
    //   .then(res => {
    //     console.log(res);
    //     if (res.success) {
    //       this.sowing_list = res.data.list[0].icon_list;
    //       this.nav_list = res.data.list[2].icon_list;
    //       this.flash_sale_product_list = res.data.list[3].product_list;
    //       this.youlike_list = res.data.list[12].product_list;
    //       this.showLoading = false;
    //       showBack(status => {
    //         this.showBackStatus=status
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  components: {
    Header,
    Sowing,
    Nav,
    FlashSale,
    YouLike,
    MarkPage
  },
  methods: {
    async reqData(){
     let res= await  getHomeData()
     if (res.success) {
          this.sowing_list = res.data.list[0].icon_list;
          this.nav_list = res.data.list[2].icon_list;
          this.flash_sale_product_list = res.data.list[3].product_list;
          this.youlike_list = res.data.list[12].product_list;
          this.showLoading = false;
          showBack(status => {
            this.showBackStatus=status
          });
        }

    },
    scrollToTop() {
        let docB=document.documentElement||document.body
        animate(docB,{scrollTop:'0'},400,'ease-out')
    }
  }
};
</script>

<style lang='less' scoped>
#home {
  width: 100%;
  height: 300rem;
  background-color: #f5f5f5;
}
</style>