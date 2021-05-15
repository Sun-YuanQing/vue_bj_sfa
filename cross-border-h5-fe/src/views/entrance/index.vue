<template>
	<div class="f-center page">
		<div class="content f-column-Wcenter">
			<div class="Loginuser">
				<div class="lang-tag f-row-WHcenter">
					<img class="imglang" src="@/assets/lang.png" alt="lang.png">EN
				</div>
				<img class="imgLoginuser" src="@/assets/loginUser.png" alt="loginUser.png">
			</div>
			<div class="enter-box f-row-between f-row-WHcenter">
				<label class="text">请选择员工：</label>
				<div class="enter-down f-row-between f-row-Hcenter" @click="onEnterUser">
					<label class="text"> {{name}} </label>
					<Icon name="arrow-down" color="#b3b3b3" size="0.32rem" />
				</div>
				<div class="enter-btn f-center" @click="onlogin">
					<label class="text"> 进入 </label>
				</div>
			</div>
			<div class="declaration-box">
				<div class="declaration-title">声明</div>
				<div class="declaration-content">
					本人确认在腾讯微天数系统所提供的出入境信息均属
					真实、正确和完整。本人明白授权人的雇主依赖此等
					信息以评估和管理公司和员工的税务风险。本人知道
					无论是故意还是疏忽造成的信息缺失或不完整都可能
					对公司和授权人的税务状况产生影响。
				</div>

			</div>
			<div class="footer-box f-row-Hcenter f-row-between">
				<div class="f-row-Hcenter">
					<img src="@/assets/lang.png" alt="lang.png">
					<label class="text">使用指引</label>
				</div>
				<div class="l"></div>
				<div class="f-row-Hcenter">
					<img src="@/assets/help.png" alt="help.png">
					<label class="text">帮助与反馈</label>
				</div>

			</div>
		</div>
		<Popup v-model="showPopup" round position="bottom" :style="{ height: '48%' }">
			<Picker :style="{ height: '100%' }" title="请选择员工" show-toolbar :columns="columns" @confirm="onConfirm"
				@cancel="onCancel" />
		</Popup>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {
		Button,
		Popup,
		Picker,
		Icon
	} from 'vant';
	import {
		Component
	} from 'vue-property-decorator';

	@Component({
		components: {
			Button,
			Popup,
			Picker,
			Icon
		},
	})
	export default class login extends Vue {
		showPopup: boolean = false;
		columns: string[] = ['孙元清', '傅家建', '刘欢', '王博', '吴承恩'];
		name: string = "请选择";

		$router;
		onlogin() {
			this.$router.push({
				path: '/record'
			});
		};
		onEnterUser() {
			this.showPopup = true;
		};
		onConfirm(res) {
			this.name = res;
			this.showPopup = false;
		};
		onCancel() {
			this.showPopup = false;
		};
	}
</script>
<style lang="less" scoped>
	.page {
		width: 100%;
		height: 100vh;
	}

	.content {
		width: 5.83rem;

		.Loginuser {
			position: relative;

			.lang-tag {
				position: absolute;
				right: 0px;
				transform: translateX(0.4rem; );
				width: 0.98rem;
				height: 0.44rem;
				opacity: 1;
				background: #dde8ff;
				color: #457fff;
				border-radius: 7rem;

				.imglang {
					width: 0.2rem;
					height: 0.2rem;
					opacity: 1;
					margin-right: 0.1rem;
				}
			}

			.imgLoginuser {
				width: 5rem;
				height: 5rem;
			}
		}

		.enter-box {
			width: 100%;
			margin-top: 0.2rem;

			.text {
				height: 0.29rem;
				opacity: 1;
				font-size: 0.3rem;
				font-family: PingFang SC Regular, PingFang SC Regular-Regular;
				font-weight: 400;
				text-align: left;
				color: #343434;
				line-height: 0.35rem;
				white-space: nowrap;
			}

			.enter-down {
				width: 2.51rem;
				height: 0.7rem;
				opacity: 1;
				background: #ffffff;
				border-radius: 0.08rem;
				box-shadow: 0.06rem 0.06rem 0.16rem 0.02rem rgba(43, 62, 102, 0.09);
				padding: 0 0.2rem;

				.text {
					font-family: PingFang SC Regular, PingFang SC Regular-Regular;
					font-weight: 400;
					text-align: left;
					color: #343434;
				}
			}

			.enter-btn {
				width: 1.2rem;
				height: 0.64rem;
				opacity: 1;
				background: #367dff;
				border-radius: 0.08rem;
				color: rgba(255, 255, 255, 1.0);

				.text {
					width: 0.58rem;
					height: 0.28rem;
					opacity: 1;
					font-size: 0.3rem;
					font-family: PingFang SC Regular, PingFang SC Regular-Regular;
					font-weight: 400;
					text-align: left;
					color: #ffffff;
					line-height: 0.35rem;
					white-space: nowrap;
				}
			}
		}

		.declaration-box {
			margin-top: 0.61rem;

			.declaration-title {
				opacity: 1;
				font-size: 0.24rem;
				font-family: PingFang SC Regular, PingFang SC Regular-Regular;
				font-weight: 400;
				text-align: left;
				color: #367dff;
			}

			.declaration-content {
				margin-top: 0.3rem;
				width: 5.51rem;
				line-height: 0.46rem;
				opacity: 1;
				font-size: 0.24rem;
				font-family: PingFang SC Regular, PingFang SC Regular-Regular;
				font-weight: 400;
				text-align: left;
				color: #8a8a8a;
			}
		}

		.footer-box {
			width: 4.12rem;
			margin-top: 0.8rem;

			img {
				width: 0.29rem;
				height: 0.29rem;
				margin-right: 0.1rem;
			}

			.l::after {
				content: "";
				margin-left: 0.2rem;
				border-right: 1px solid rgba(66, 66, 66, 1.0)
			}
		}
	}
</style>
