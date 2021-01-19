<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'tabbar',
};
</script>

<style  >
@import "../../assets/css/base.css";
.tab-bar{
    display: flex;
    width: 100%;
    /* height: 100%; */
    background: #eee;
    position: fixed;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .01);

}
a{
    list-style: none;
      flex: 1;
      text-align: center;
      display: inline-block;
      height: 49px;
      line-height: 49px;
}

</style>