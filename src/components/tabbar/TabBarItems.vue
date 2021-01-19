<template>
<!-- 1.3点击事件 -->
<!-- 2.3动态绑定style抽离到计算属性 -->
  <div class="tabbar-item" :class="{ active: isActive }" @click="btnClick" :style="activeStyle">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon-active"></slot>
    </div>

    <div>
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  //将对应点击的区域的link传递过来
  props: {
    // 1.2组件接收传递过来的数据
    link: {
      type: String
    },
    // 2.2接收当前组件传递的数据
    activeColor:{
      type:String,
      default:"red"
    }
  },
  computed: {
    // 1.4判断当前点击的组件的路径中是否有当前点击组件传递的数据
      isActive() {
        //判断当前点击的路径里面是否包含父组件传递数据(路径)，若找不到返回-1
           return this.$route.path.indexOf(this.link) !==-1;
      },
      // 2.4若当前组件处于活跃状态将传递过来的数据返回
      // 对于没有传递数据的显示默认颜色
      activeStyle(){
       return this.isActive?{color:this.activeColor}:{}
      }
    },
  methods: {
    btnClick() {
      console.log(this);
      this.$router.push(this.link);
    }
  }
};
</script>
<style scoped>
.tabbar-item {
  list-style: none;
  flex: 1;
  text-align: center;
  display: inline-block;
  height: 49px;
  /* line-height: 49px; */
}
.van-icon {
  display: inline-block;
  margin-top: 6px;
}
/* .active {
  color: #f57f8e;
} */
</style>