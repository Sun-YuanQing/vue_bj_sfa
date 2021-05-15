<template>
	<div class="f-center page">
		<div class="content f-column-Wcenter">
			<div class="Loginuser ">
				<div class="lang-tag f-row-WHcenter">
					<img class="imglang" src="@/assets/lang.png" alt="lang.png">EN
				</div>
				<img class="imgLoginuser" src="@/assets/loginUser.png" alt="loginUser.png">
			</div>
			<Form class=" f-column-Wcenter">
				<div class="input-box f-row-Hcenter">
					<img class="imgPhone" src="@/assets/phone.png" alt="phone.png"> <label class="text">+86</label>
					<Field class="Field f-row-WHcenter" v-model="formData.name" placeholder="请输入您的手机号" />
					</Field>
				</div>
				<div class="input-box f-row-Hcenter" style="margin-top: 0.4rem;">
					<img class="imgPhoneCode" src="@/assets/phoneCode.png" alt="phoneCode.png">
					<Field class="Field f-row-WHcenter" v-model="formData.name" placeholder="请输入您的验证码" />
					</Field>
					<div class="sms">发送验证码</div>
				</div>
				<div class="checked-box f-row-WHcenter">
					<Checkbox class="checked" icon-size="0.3rem" v-model="checked"></Checkbox><label
						class="text">阅读并同意《用户协议》《隐私政策》</label>
				</div>
				<div class="btn f-center" @click="onlogin">
					<label class="text"> 登 陆 </label>
				</div>
			</Form>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {
		Checkbox,
		Form,
		Field,
		Button
	} from 'vant';

	import {
		Component
	} from 'vue-property-decorator';

	@Component({
		components: {
			Checkbox,
			Form,
			Field,
			Button
		},
	})
	export default class login extends Vue {
		checked: boolean = true;
		formData: object = {
			name: ''
		};
		$router;

		onlogin() {
			this.$router.push({
				path: '/entrance'
			});
		}

	}
</script>
<style>
	.van-field__label {
		width: 100%;
	}

	.van-cell__value {
		height: 0.9rem;
		line-height: 0.9rem;
	}

	.van-cell::after {
		border-bottom: 0px solid #ebedf0;
	}
</style>
<style lang="less" scoped>
	@import './index.less';
	.page {
		width: 100%;
		height: 100vh;
	}

	.content {
		width: 5.7rem;

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

		.input-box {
			padding: 0 0.2rem;
			margin-top: 0.2rem;
			width: 5.71rem;
			height: 0.9rem;
			opacity: 1;
			background: #ffffff;
			border-radius: 0.2rem;
			box-shadow: 0.06rem 0.06rem 0.16rem 0.02rem rgba(43, 62, 102, 0.09);

			.Field {
				height: 100%;
			}

			.imgPhone {
				width: 0.22rem;
				height: 0.39rem;
				margin-right: 0.2rem;
			}

			.text {
				font-size: 0.28rem;
				font-weight: 400;
				font-family: PingFang SC Regular, PingFang SC Regular-Regular;
				color: #353535;

				&::after {
					content: "";
					margin-left: 0.2rem;
					border-right: 1px solid rgba(185, 185, 185, 0.5)
				}
			}

			.imgPhoneCode {
				width: 0.29rem;
				height: 0.36rem;
			}

			.sms {
				white-space: nowrap;
				height: 0.9rem;
				opacity: 1;
				font-size: 0.28rem;
				font-family: PingFang SC Regular, PingFang SC Regular-Regular;
				font-weight: 400;
				text-align: left;
				color: #367dff;
				line-height: 0.9rem;
			}
		}

		.checked-box {
			margin-top: 0.4rem;
			height: 0.5rem;

			.checked {
				margin-right: 0.2rem;
			}
		}

		.btn {
			margin-top: 1rem;
			width: 5.4rem;
			height: 0.88rem;
			opacity: 1;
			background: #367dff;
			border-radius: 0.08rem;
			color: rgba(255, 255, 255, 1.0);
		
			.text {
				width: 0.69rem;
				height: 0.34rem;
				opacity: 1;
				font-size: 0.36rem;
				font-family: PingFang SC Regular, PingFang SC Regular-Regular;
				font-weight: 400;
				text-align: left;
				color: #ffffff;
				line-height: 0.35rem;

				white-space: nowrap;
			}
		}
	}
</style>
