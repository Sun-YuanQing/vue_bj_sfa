<template>
  <div class="invoice-list" v-if="show">
    <div class="date-show">
      <div class="date-box">
        <span @click="showDatetPicker(0, formatStartTime)" :class="{ gray: !formatStartTime }">{{
          formatStartTime || 'start time'
        }}</span>
        <span>~</span>
        <span @click="showDatetPicker(1, formatEndTime)" :class="{ gray: !formatEndTime }">{{
          formatEndTime || 'end time'
        }}</span>
        <SvgIcon svgName="calendar" class="calendar-icon" />
      </div>
    </div>

    <div class="content">
      <Collapse v-model="activeNames">
        <List
          v-model="loading"
          :immediate-check="false"
          :finished="finished"
          :finished-text="finishedText"
          @load="onLoad"
        >
          <CollapseItem
            class="collapse-item"
            title-class="coll-item-title"
            v-for="(item, key) in invoiceListData"
            :key="key"
            :border="false"
            :title="key"
            :name="key"
            :is-link="false"
          >
            <div class="inner-list">
              <div
                v-for="(innerItem, index) in item"
                :class="{ 'inner-list-item': true, border: index !== item.length - 1 }"
                :key="innerItem.gasGuid"
              >
                <div class="invoice-index">{{ index + 1 }}</div>
                <div>
                  <img :src="innerItem.gasPath" alt="gasPath" />
                </div>
                <div>
                  <Button type="danger" size="small" class="delete-btn" @click="deleteInvoiceByGuid(innerItem)"
                    >delete</Button
                  >
                </div>
              </div>
            </div>

            <template #icon>
              <Icon name="play" size="16" :class="{ 'coll-item-icon': true, active: activeNames.includes(key) }" />
            </template>
          </CollapseItem>
        </List>
      </Collapse>
    </div>

    <Popup v-model="showPopup" position="bottom" :style="{ minHeight: '10%' }">
      <DatetimePicker
        v-model="currTime"
        type="date"
        confirm-button-text="confirm"
        cancel-button-text="cancel"
        :title="dateTitle"
        :minDate="minDate"
        :maxDate="maxDate"
        @confirm="confirm"
        @cancel="cancel"
      />
    </Popup>
  </div>
  <div class="empty" v-else>
    <img src="@/assets/images/empty_bg.png" alt="empty_bg" />
    <p>
      Take photos of receipt, invoice or other supporting document and upload them here. Photos will be updated to the
      "Photos" section on the PC website, which can help you to fill the expense report quickly.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import moment from 'moment';
import { DatetimePicker, Popup, Collapse, CollapseItem, Icon, Button, List, Toast } from 'vant';
import SvgIcon from '@/components/SvgIcon';
import { deleteInvoice, getInvoiceList } from '@/api/modules/home';
import mockData from '@/mock';

@Component({
  components: {
    DatetimePicker,
    Popup,
    SvgIcon,
    Collapse,
    CollapseItem,
    Icon,
    Button,
    List,
  },
})
export default class InvoiceList extends Vue {
  data: Array<object> = [];
  pageIndex: number = 1;
  invoiceList: Array<object> = [];
  pickDateType: number = 0; // 0 - startTime  1 - endTime
  startTime: any = null;
  endTime: any = null;
  formatStartTime: string = '';
  formatEndTime: string = '';
  lastStartTime: string = this.formatStartTime;
  lastEndTime: string = '';
  currTime: Date = this.startTime;
  minDate: any = new Date((this.startTime || new Date()).getFullYear() - 20, 0, 1);
  maxDate: any = new Date((this.startTime || new Date()).getFullYear() + 20, 11, 1);
  showPopup: boolean = false;
  activeNames: Array<string> = [];
  loading: boolean = false;
  finished: boolean = false;
  finishedText: string = 'no more';
  isInit: boolean = true;

  mounted() {
    this.getInvoiceListData({
      startTime: this.formatStartTime,
      endTime: this.formatEndTime,
      pageIndex: this.pageIndex,
    });
  }

  get show() {
    return !this.isInit || !!this.data.length;
  }

  get dateTitle() {
    return this.pickDateType === 0 ? 'Choose start time' : 'Choose end time';
  }

  async getInvoiceListData(params: any) {
    this.loading = true;
    const res = await getInvoiceList({ pageSize: 10, isInvoice: 1, ...params });
    let result = Array.isArray(res) ? res : [];
    console.log('请求结果', res);
    if (
      !params.isOnLoad &&
      (this.formatStartTime !== this.lastStartTime || this.formatEndTime !== this.lastEndTime || this.pageIndex === 1)
    ) {
      this.data = result;
    } else {
      this.data = [...this.data, ...result];
    }

    this.loading = false;

    if (!result.length) {
      this.finished = true;
    }
  }

  onLoad() {
    this.pageIndex = this.pageIndex + 1;
    this.isInit = false;
    this.getInvoiceListData({
      startTime: this.formatStartTime,
      endTime: this.formatEndTime,
      pageIndex: this.pageIndex,
      isOnLoad: true,
    });
  }

  get invoiceListData() {
    let dataByDate: object = {};
    if (!this.data.length) {
      this.finished = true;
    }

    this.data.map((item: any) => {
      item.createTime = item.createTime.slice(0, 10);
      item.gasPath = item.gasPath;
    });

    // 按时间进行排序(正序)
    this.data.sort((x: any, y: any) => {
      let xTime = moment(x.createTime).valueOf();
      let yTime = moment(y.createTime).valueOf();
      if (xTime > yTime) {
        return 1;
      } else {
        return -1;
      }
    });

    // 通过时间区分发票
    this.data.map((item: any) => {
      let createTime = item.createTime.slice(0, 10);
      if (dataByDate[createTime]) {
        dataByDate[createTime].push(item);
      } else {
        dataByDate[createTime] = [item];
      }
    });

    return dataByDate;
  }

  @Watch('startTime')
  getStarTime(newVla, oldVal) {
    this.formatStartTime = newVla ? moment(newVla).format('YYYY-MM-DD') : '';
    this.lastStartTime = oldVal ? moment(oldVal).format('YYYY-MM-DD') : '';
    if (this.formatStartTime !== this.lastStartTime) {
      this.pageIndex = 1;
    }
    console.log('start: ', this.formatStartTime, this.lastStartTime, this.formatStartTime === this.lastStartTime);
  }

  @Watch('endTime')
  getEndTime(newVla, oldVal) {
    this.formatEndTime = newVla ? moment(newVla).format('YYYY-MM-DD') : '';
    this.lastEndTime = oldVal ? moment(oldVal).format('YYYY-MM-DD') : '';
    if (this.formatEndTime !== this.lastEndTime) {
      this.pageIndex = 1;
    }
    console.log('end: ', this.formatEndTime, this.lastEndTime, this.formatEndTime === this.lastEndTime);
  }

  async deleteInvoiceByGuid(info) {
    this.pageIndex = 1;
    let res = await deleteInvoice({ guid: info.gasGuid });
    if (res.isSuccess) {
      this.finished = false;
      this.getInvoiceListData({
        startTime: this.formatStartTime,
        endTime: this.formatEndTime,
        pageIndex: this.pageIndex,
      });
    }
    console.log('删除操作：', res);
  }

  showDatetPicker(index: number, currTime: string) {
    this.currTime = currTime ? new Date(currTime) : new Date();
    this.pickDateType = index;
    this.showPopup = true;
  }

  confirm(value) {
    this.finished = false;
    this.isInit = false;
    let formatDate: any = moment(value).format('YYYY-MM-DD');
    let tranferDate: Date = new Date(formatDate);

    if (this.pickDateType === 0) {
      this.startTime = tranferDate;
      this.formatStartTime = value ? formatDate : '';
    } else {
      this.endTime = tranferDate;
      this.formatEndTime = value ? formatDate : '';
    }

    if (this.formatEndTime && this.formatStartTime && this.formatEndTime.valueOf() < this.formatStartTime.valueOf()) {
      Toast('The start time cannot be greater than the end time');
      return;
    }

    if (this.startTime && this.endTime) {
      this.getInvoiceListData({
        startTime: this.formatStartTime,
        endTime: this.formatEndTime,
        pageIndex: 1,
      });
    }

    this.showPopup = false;
  }

  cancel() {
    this.showPopup = false;
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
