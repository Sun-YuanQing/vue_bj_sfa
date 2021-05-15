<template>
  <div class="error-page">
    <div>
      <img src="@/assets/images/error.png" alt="error.png" />
      <Button @click="back" class="btn" type="info" color="#457FFF">返回</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Overlay, Loading, Button } from 'vant';

@Component({
  components: {
    't-overlay': Overlay,
    't-loading': Loading,
    Button,
  },
})
export default class TIcon extends Vue {
  $router;

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

  back() {
    this.$router.push({ path: '/index' });
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
