<template>
  <div class="t-upload">
    <Popup class="popup-bto" v-model="showPopup" round position="bottom" :style="{ minHeight: '10%' }">
      <Button class="popup-btn">
        Take a photo
        <input
          ref="cameraInput"
          @change="handleTakePic"
          class="take-pic"
          type="file"
          accept="image/*"
          capture="camera"
        />
      </Button>
      <Uploader :after-read="uploadFile" :preview-image="false" :accept="accept" style="width:100%" multiple>
        <Button class="popup-btn">Select from gallary</Button>
      </Uploader>
      <Button class="popup-btn" @click="handlePopup">Cancel</Button>
    </Popup>

    <Dialog
      :show="dialogConfig.show"
      :message="dialogConfig.message"
      :svgName="dialogConfig.svgName"
      :changeShow="resetDialogConfig"
    />

    <Loading :show="loadingConfig.show" :text="loadingConfig.text" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Icon, Popup, Uploader, Button } from 'vant';
import { invoiceIdentifyORC } from '@/api/modules/home';
import Dialog from '@/components/Dialog';
import Loading from '@/components/Loading';

@Component({
  components: {
    Icon,
    Popup,
    Uploader,
    Button,
    Dialog,
    Loading,
  },
})
export default class TUpload extends Vue {
  $store;
  $router;

  dialogConfig: any = {
    show: false,
    message: '',
    svgName: 'warning',
  };
  loadingConfig: any = {
    show: false,
    text: 'Recognizing...',
  };
  showPopup: boolean = false;
  accept: string = 'image/png, image/jpg, image/jpeg';

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  redirectUrl;

  @Prop({
    type: Function,
    required: false,
    default: () => {},
  })
  callBack;

  handlePopup() {
    this.showPopup = !this.showPopup;
  }

  handleTakePic(e) {
    let files = e.target.files[0];
    this.uploadFile({ file: files });
  }

  success(res: any) {
    if (!!this.redirectUrl) {
      this.$router.push({ path: this.redirectUrl });
    }

    this.loadingConfig.show = false;
    this.callBack({ pageIndex: 1 });
    (this.$refs.cameraInput as any).value = '';
  }

  fail(err: any) {
    this.loadingConfig.show = false;
    (this.$refs.cameraInput as any).value = '';
    this.dialogConfig = {
      show: true,
      message: err.message,
      svgName: 'warning',
    };
  }

  resetDialogConfig() {
    this.dialogConfig.show = !this.dialogConfig.show;
  }

  uploadFile(files: any) {
    const filesType: Array<File> = [];
    files = Array.isArray(files) ? files : [files];
    files.map((item) => {
      filesType.push(item.file);
    });

    this.loadingConfig.show = true;
    this.showPopup = false;
    // 识别发票信息
    invoiceIdentifyORC(filesType, this.success, this.fail);
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
