<template>
	<div class="page f-column-Wcenter">
		<div class="content">
			<Field class="Field f-row-Hcenter" v-model="fieldValue" label="员工" placeholder="请输入用户名">
			</Field>
			<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly label="日期" placeholder="请选择日期">
			</Field>
			<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly label="白天" placeholder="请选择所在地区">
			</Field>
			<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly label="夜间" placeholder="请选择所在地区">
			</Field>
			<div class="Field f-row-Hcenter van-cell van-cell--clickable van-field">
				<div class="Field-label van-cell__title van-field__label f-column">
					<label class="label-Text">白天</label>
					<label class="label-Text">停留州县</label>
				</div>
				<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly placeholder="请选择所在地区">
				</Field>
			</div>
			<div class="Field f-row-Hcenter van-cell van-cell--clickable van-field">
				<div class="Field-label van-cell__title van-field__label f-column">
					<label class="label-Text">夜间</label>
					<label class="label-Text">停留州县</label>
				</div>
				<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly placeholder="请选择所在地区">
				</Field>
			</div>
			<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly label="停留州县" placeholder="请选择所在地区">
			</Field>
			<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly label="停留目的" placeholder="请选择停留目的">
			</Field>
			<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly label="白天项目" placeholder="请选择项目">
			</Field>
			<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly label="夜间项目" placeholder="请选择项目">
			</Field>
			<Field class="Field f-row-Hcenter" v-model="fieldValue" is-link readonly label="项目" placeholder="请选择项目">
			</Field>
			<Field class="Field f-row-Hcenter" v-model="fieldValue" label="备注" placeholder="非必填">
			</Field>
		</div>
		
		<div class="btn btn-Save f-center" @click="onSave">
			<label class="text"> 保 存 </label>
		</div>
		<div class="btns f-center">
			<div class="btn btn-Edit f-center" @click="onEdit">
				<label class="text"> 修改 </label>
			</div>
			<div class="btn btn-cancel f-center" @click="onCancel">
				<label class="text"> 取消 </label>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {
		Component,
		Prop
	} from 'vue-property-decorator';

	import {
		Field,
		Button
	} from 'vant';

	@Component({
		components: {
			Field,
			Button
		},
	})
	export default class TIcon extends Vue {
		fieldValue: string = "傅家";
		
		onSave() {

		}
		onEdit(){
			
		}
		onCancel(){
			
		}
	}
</script>

<style scoped>
	.van-cell::after {
		right: 10px;
		left: 10px;
	}
</style>
<style lang="less" scoped>
	@import './index.less';

	.page {
		background: #f0f0f0;
		width: 100%;
		padding-bottom: 1rem;
	}

	.content {
		margin-top: 0.2rem;
		padding: 0 0.1rem;
		width: 6.9rem;
		opacity: 1;
		background: #ffffff;
		border-radius: 0.06rem;

		.Field {
			height: 1.04rem;
			padding: 5px 10px;
			width: 100%;

			.van-cell {
				padding: 5px 0px !important;
			}

			.Field-label {
				box-sizing: border-box;
				line-height: 0.35rem;
				color: #646566;
				text-align: left;
				word-wrap: break-word;
			}
		}


	}
	.btn {
		height: 0.88rem;
		border-radius: 0.08rem;
		color: rgba(255, 255, 255, 1.0);
		.text {
			font-size: 0.36rem;
			font-family: PingFang SC Regular, PingFang SC Regular-Regular;
			font-weight: 400;
			text-align: center;
			color: #ffffff;
			line-height: 0.35rem;
			white-space: nowrap;
		}
	}
	.btn-Save {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		width: 5.4rem;
		height: 0.88rem;
		background: #367dff;
	}
	.btns{
		width: 100%;
		.btn-Edit{
			margin-top: 1rem;
			margin-bottom: 0.5rem;
			margin-right: 0.3rem;
			width: 2.8rem;
			height: 0.88rem;
			background: #367dff;
		}
		.btn-cancel{
			margin-top: 1rem;
			margin-bottom: 0.5rem;
			width: 2.8rem;
			height: 0.88rem;
			background: #ff5555;
		}
	}
	
	
</style>
