<template>
  <t-nav-bar
    :title="config.title"
    :left-text="config.leftText"
    :right-text="config.rightText"
    :left-arrow="config.leftArrow"
    :border="config.border"
    :fixed="config.fixed"
    :placeholder="config.placeholder"
    :z-index="config.zIndex"
    :safe-area-inset-top="config.safeAreaInsetTop"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #left>
      <t-icon :name="custom.left.name" :size="custom.left.size" />
    </template>
    <template #right>
      <t-icon :name="custom.right.name" :size="custom.right.size" />
    </template>
  </t-nav-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { NavBar, Toast, Icon } from 'vant';

@Component({
  components: {
    't-nav-bar': NavBar,
    't-icon': Icon,
  },
})
export default class ComponentNavBar extends Vue {
  @Prop({
    type: Object,
    required: false,
    default: {
      title: '',
      leftText: '',
      rightText: '',
      leftArrow: false,
      border: true,
      fixed: true,
      placeholder: '',
      zIndex: 1,
      safeAreaInsetTop: false,
    },
  })
  config;

  @Prop({
    type: Object,
    required: false,
    default: function() {
      return {
        left: {
          name: 'wap-nav',
          size: '18',
        },
        right: {
          name: 'setting',
          size: '18',
        },
      };
    },
  })
  custom;

  onClickLeft() {
    // Toast('菜单');
  }

  onClickRight() {
    // Toast('设置');
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
