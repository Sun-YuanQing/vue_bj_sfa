<template>
  <div class="layout">
    <router-view></router-view>
	<Tabbar></Tabbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Tabbar from '@/components/Tabbar';

@Component({
  components: {
	  Tabbar
  },
})
export default class ComponentLayout extends Vue {
 
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
