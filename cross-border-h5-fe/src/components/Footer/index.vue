<template>
  <div class="footer">
    <div>
      <slot></slot>
    </div>
    <div class="bot">由<img src="@/assets/images/txyt.png" alt="腾讯优图" />提供技术支持</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Footer extends Vue {}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
