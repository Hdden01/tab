<template>
  <div id="app">
    <!-- 此处不可以使用router-link因为渲染成a标签样式改变了 -->
    <router-view></router-view>
    <TabBar>
      <!-- 1.1.判断当前是否处于活跃状态 传递路径-->
      <!-- 2.1 判断是否处于活跃状态 传递颜色-->
      <TabBarItems link="/home" activeColor='blue'>
        <template v-slot:icon>
          <van-icon name="shop" />
        </template>
        <template v-slot:icon-active>
          <van-icon name="shop" />
        </template>
        <template v-slot:text>
          <div>首页</div>
        </template>
      </TabBarItems>
      <TabBarItems link="/about">
        <template v-slot:icon>
          <van-icon name="shop" />
        </template>
        <template v-slot:icon-active>
          <van-icon name="shop" />
        </template>
        <template v-slot:text>
          <div>首页</div>
        </template>
      </TabBarItems>
    </TabBar>
  </div>
</template>
<script>
import TabBar from "./components/tabbar/tabbar";
import TabBarItems from "./components/tabbar/TabBarItems";
export default {
  components: {
    TabBar,
    TabBarItems
  }
};
</script>