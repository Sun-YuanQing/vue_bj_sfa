<template>
  <t-icon
    :name="config.name"
    :dot="config.dot"
    :badge="config.badge"
    :color="config.color"
    :size="config.size"
    :class-prefix="config.classPrefix"
    @click="click"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Icon } from 'vant';

@Component({
  components: {
    't-icon': Icon,
  },
})
export default class TIcon extends Vue {
  @Prop({
    type: Object,
    required: false,
    default: {
      name: '',
      dot: false,
      badge: '',
      color: '',
      size: '20',
      classPrefix: 'van-icon',
      tag: '',
    },
  })
  config;

  @Prop({
    type: Function,
    required: false,
    default: function() {},
  })
  click;
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
