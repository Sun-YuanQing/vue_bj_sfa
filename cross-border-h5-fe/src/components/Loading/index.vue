<template>
  <t-overlay :show="show" class="t-overlay">
    <t-loading size="24px" color="#fff" vertical>{{ text }}</t-loading>
  </t-overlay>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Overlay, Loading } from 'vant';

@Component({
  components: {
    't-overlay': Overlay,
    't-loading': Loading,
  },
})
export default class TIcon extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  show;

  @Prop({
    type: String,
    required: false,
    default: '加载中...',
  })
  text;
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
