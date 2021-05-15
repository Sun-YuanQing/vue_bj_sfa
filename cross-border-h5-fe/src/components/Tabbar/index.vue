<template>
  <t-tabbar v-model="active">
    <t-tabbar-item icon="home-o">记录</t-tabbar-item>
    <t-tabbar-item icon="search">分析</t-tabbar-item>
    <t-tabbar-item icon="friends-o">个人</t-tabbar-item>
    <t-tabbar-item icon="setting-o">设置</t-tabbar-item>
  </t-tabbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { Tabbar ,TabbarItem} from 'vant';


@Component({
  components: {
    "t-tabbar":Tabbar,
    "t-tabbar-item":TabbarItem,
  },
})
export default class ComponentTabbar extends Vue {
  active:any=0 

}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
