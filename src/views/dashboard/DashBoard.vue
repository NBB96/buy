<template>
  <div id="dashboard">
    <van-tabbar v-model="active" active-color="#819840">
      <van-tabbar-item replace to="/dashboard/home">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? home_icon.active : home_icon.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/category">
        <span>分类</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? category_icon.active : category_icon.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/cart">
        <span>购物车</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? shoppingcart_icon.active : shoppingcart_icon.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/mine">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? mine_icon.active : mine_icon.inactive"
        />
      </van-tabbar-item>
    </van-tabbar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      active: Number(sessionStorage.getItem("tabBarActiveIndex")) || 0,
      home_icon: {
        inactive: require("@/img/tabbar/home_default.png"),
        active: require("@/img/tabbar/home_selected.png")
      },
      category_icon: {
        inactive: require("@/img/tabbar/category_default.png"),
        active: require("@/img/tabbar/category_selected.png")
      },
      shoppingcart_icon: {
        inactive: require("@/img/tabbar/shoppingcart_default.png"),
        active: require("@/img/tabbar/shoppingcart_selected.png")
      },
      mine_icon: {
        inactive: require("@/img/tabbar/mine_default.png"),
        active: require("@/img/tabbar/mine_selected.png")
      }
    };
  },
  watch: {
    active(value) {
      let tabBarActiveIndex = value > 0 ? value : 0;
      sessionStorage.setItem("tabBarActiveIndex", value);
    }
  }
};
</script>

<style lang='less' scoped>
#dashboard {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>