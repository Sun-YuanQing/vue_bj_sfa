<template>
  <t-dialog class="dialog" v-model="show" title="" :show-confirm-button="false">
    <SvgIcon :svgName="svgName" class="dialog-icon" />
    <p class="dialog-message">{{ message }}</p>
    <div>
      <Button type="info" class="dialog-btn" @click="changeShow">确认</Button>
    </div>
  </t-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import { Dialog, Button } from 'vant';
import SvgIcon from '@/components/SvgIcon';

@Component({
  components: {
    't-dialog': Dialog.Component,
    Button,
    SvgIcon,
  },
})
export default class TDialog extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  show;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  message;

  @Prop({
    type: String,
    required: false,
    default: 'warning',
  })
  svgName;

  @Prop({ type: Function, required: false, default: () => {} })
  changeShow;
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
