<template>
	<el-container class="index">
		<el-header :height="'70px'">
			<div class="header">
				<div class="headerContent">
					<div class="leftHeader">
						<!-- <img src="" alt="" class="img" /> -->
						<div class="logoTitle">易奢云</div>
						<div class="classifiction">
							<div class="_a to_a" @click="toFirst">首页</div>
							<div class="_a to_a" @click="toShop">易奢云SaaS</div>
							<div class="_a to_a" @click="toShop_">产品服务</div>
							<div class="_a to_a" @click="toScroll">关于我们</div>
						</div>
					</div>
					<div class="rightHeader"><el-button @click="toScroll" type="primary" class="primaryBtn">免费试用</el-button></div>
				</div>
			</div>
		</el-header>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div
					class="swiper-slide"
					:style="{
						background: 'url(https://img.yisheyun.cn/59d8512b252a02b6f95580f5b0881ae4.png@basic) no-repeat center center',
						//background: 'url(/img/index/swiper1.png) no-repeat center center',
						backgroundSize: 'cover'
					}"
				>
					<div class="swiperChildren">
						<div class="swiper_title">奢侈品电商解决方案服务商</div>
						<div class="swiper_text">全场景、全链路垂直SaaS产品，助力商家开启线上线下新零售</div>
						<el-button @click="toScroll" class="swiper_primaryBtn _swiper_primaryBtn">进一步了解</el-button>
					</div>
				</div>
				<div
					class="swiper-slide"
					:style="{
						//background: 'url(/img/index/swiper2.png) no-repeat center center',
						background: 'url(https://img.yisheyun.cn/4f0bb5b99d2c16d5ae0949fd4ec35f76.png@basic) no-repeat center center',
						backgroundSize: 'cover'
					}"
				>
					<div class="swiperChildren">
						<div class="swiper_title">开启智慧零售</div>
						<div class="swiper_text">赋能线下门店，重构消费连接</div>
						<el-button @click="toScroll" class="swiper_primaryBtn swiper_primaryBtn_">进一步了解</el-button>
					</div>
				</div>
				<div
					class="swiper-slide"
					:style="{
						background: 'url(https://img.yisheyun.cn/5ca96c7f9b1e9e6bcdc21d73caf883d2.png@basic) no-repeat center center',
						//background: 'url(/img/index/swiper0.png) no-repeat center center',
						backgroundSize: 'cover'
					}"
				>
					<div class="swiperChildren">
						<div class="swiper_title">产品服务</div>
						<div class="swiper_text">打造共赢生态，提供全方位一站式服务</div>
						<el-button @click="toScroll" type="primary" class="swiper_primaryBtn swiper_primaryBtn_">进一步了解</el-button>
					</div>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="centerContent">
			<div class="title">了解我们的SaaS产品</div>
			<div class="titleText">全场景全链路的SaaS产品，助力企业数字升级</div>
			<div class="content">
				<template v-for="(item, index) in 4">
					<div
						@mouseover="centerItemOver(index)"
						@mouseout="centerItemOut(index)"
						class="contentItem"
						:style="
							mouserCenter == index
								? {
										boxShadow: '0px 5px 24px 0px #D7E6FF',
										border: '1px solid #337EFF'
								  }
								: ''
						"
						:key="index"
						:class="index == 3 ? 'contentItem_' : ''"
					>
						<div class="imgContent">
							<span class="span_0">{{ index == 0 ? '行业赋能' : index == 1 ? '经营产品' : index == 2 ? '业务场景' : '深度营销' }}</span>
							<span class="span_1">{{ index == 0 ? 'Industry' : index == 1 ? 'Operate' : index == 2 ? 'Business' : 'Marketing' }}</span>
							<img :src="`/img/index/sass${index}.png`" class="img" />
						</div>
						<div class="content_">
							<template v-if="index == 0">
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										二奢商家
									</div>
									<div class="classText text_over_1 text_over_2">奢侈品电商综合解决方案</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										典当行
									</div>
									<div class="classText text_over_1 text_over_2">门店经营一体化解决方案</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										奢品护理店
									</div>
									<div class="classText text_over_1 text_over_2">全方位多维度一站式服务</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										奢侈品创业
									</div>
									<div class="classText text_over_1 text_over_2">提供更加精准精细化服务</div>
								</div>
							</template>
							<template v-if="index == 1">
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										微商城
									</div>
									<div class="classText text_over_1 text_over_2">构建私域流量池、跨入移动电商时代</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										智慧销售
									</div>
									<div class="classText text_over_1 text_over_2">打通线上线下各场景、助力品牌经营</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										组件化装修
									</div>
									<div class="classText text_over_1 text_over_2">店铺页面个性化设计、装修一应俱全</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										丰富插件
									</div>
									<div class="classText text_over_1 text_over_2">拼团、满减、多种营销工具提升销量</div>
								</div>
							</template>
							<template v-if="index == 2">
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										小程序
									</div>
									<div class="classText text_over_1 text_over_2">无需开发、快速拥有、个性建站</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										回收
									</div>
									<div class="classText text_over_1 text_over_2">一键估价、在线回收、精准获客</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										鉴定
									</div>
									<div class="classText text_over_1 text_over_2">在线鉴定、吸引客户、提升活跃</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										保养
									</div>
									<div class="classText text_over_1 text_over_2">线上营销、线下引流、提效增收</div>
								</div>
							</template>
							<template v-if="index == 3">
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										快速获客
									</div>
									<div class="classText text_over_1 text_over_2">众多渠道获取流量、帮助商家快速获客</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										二级分销
									</div>
									<div class="classText text_over_1 text_over_2">构建分销网络、裂变分销快速拓展销售</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										会员管理
									</div>
									<div class="classText text_over_1 text_over_2">绘制客户标签画像、帮你了解你的客户</div>
								</div>
								<div class="animain_view">
									<div class="classTitle">
										<div class="anmain_view">
											<img src="/img/index/trigngle.png" class="classTitle_img" />
										</div>
										数据分析
									</div>
									<div class="classText text_over_1 text_over_2">多维度大数据分析、实时监控运营状态</div>
								</div>
							</template>
						</div>
					</div>
				</template>
			</div>
		</div>
		<el-main class="main">
			<div class="main_content_">
				<div class="title">产品服务</div>
				<div class="titleText">打造共赢生态，为商家提供全方位一站式服务</div>
				<div class="content">
					<div class="mainItem">
						<img src="~public_/img/index/serve4.png" alt="" class="itemImg" />
						<div class="itemTitle">定制服务</div>
						<div class="itemText">个性化定制服务，满足商家多样化</div>
					</div>
					<div class="mainItem">
						<img src="~public_/img/index/serve0.png" alt="" class="itemImg" />
						<div class="itemTitle">售后服务</div>
						<div class="itemText">帮助解决商家在经营过程产生的问题，并提供指导建议</div>
					</div>
					<div class="mainItem mainItem_">
						<img src="~public_/img/index/serve2.png" alt="" class="itemImg" />
						<div class="itemTitle">行业动态</div>
						<div class="itemText">最新行业动态与资讯，助力商家专业化经营</div>
					</div>
					<div class="mainItem">
						<img src="~public_/img/index/serve3.png" alt="" class="itemImg" />
						<div class="itemTitle">新店上线服务</div>
						<div class="itemText">服务经理，全程一对一指导</div>
					</div>
					<div class="mainItem">
						<img src="~public_/img/index/serve5.png" alt="" class="itemImg" />
						<div class="itemTitle">视频教学与培训</div>
						<div class="itemText">线上指导商家运营线下免费培训商家 专业技能</div>
					</div>
					<div class="mainItem mainItem_">
						<img src="~public_/img/index/serve1.png" alt="" class="itemImg" />
						<div class="itemTitle">资源对接</div>
						<div class="itemText">商家社区交流互动，获取更多资源</div>
					</div>
				</div>
			</div>
		</el-main>
		<div class="fromView">
			<div class="fromConten">
				<div class="left_from">
					<div class="top">
						<div class="topTitle">立即致电开店顾问</div>
						<div class="topText">拨打咨询电话，即刻领取开店大礼包</div>
					</div>
					<div class="bottom">
						<div class="tel">
							<i class="el-icon-phone-outline"></i>
							010-8592 5233
						</div>
						<div class="telText">工作时间：10:00-22:00</div>
					</div>
				</div>
				<div class="center_line"></div>
				<div class="right_from">
					<div class="title">留下您的联系方式</div>
					<div class="titleText">开店顾问会来电与你沟通</div>
					<div class="from_">
						<el-input v-model="name" placeholder="请输入姓名"></el-input>
						<el-input class="tel" v-model="tel" type="tel" placeholder="请输入手机号"></el-input>
						<el-button type="primary" @click="to_apply_trial" class="from_primaryBtn">预约开店顾问</el-button>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="title">关于我们</div>
			<div class="text">易奢云SaaS专为奢侈品相关行业提供电商经营综合解决方案，公司致力于打通交易、回收、抵押、维护、收银体系，为二奢商家、传统典当行、奢品护理店</div>
			<div class="text">及自主创业者提供行业内全场景、去中心化流量、私域经营的支持。助力企业打通线上线下新零售模式，向移动电商快速转型，重塑销售链，实现多渠道销售。</div>
		</div>
		<el-footer :height="'227px'" class="elFoolter">
			<div class="elFoolter_">
				<div class="top">
					<div class="left">
						<div class="img">易奢云</div>
						<!-- <img src="" alt="" class="img" /> -->
						<div class="text_">国内首家奢侈品电商解决方案服务商</div>
						<div class="line">
							<div class="to_a" @click="toFirst">首页</div>
							<el-divider direction="vertical"></el-divider>
							<div class="to_a" @click="toShop">易奢云SaaS</div>
							<el-divider direction="vertical"></el-divider>
							<div class="to_a" @click="toShop_">产品服务</div>
							<el-divider direction="vertical"></el-divider>
							<div class="_a to_a" @click="toScroll">关于我们</div>
						</div>
					</div>
					<div class="right">
						<div class="rightItem">
							<i class="el-icon-phone-outline"></i>
							010-8592 5233
						</div>
						<div class="rightItem">
							<i class="el-icon-message"></i>
							yisheyun@taotangtime.com
						</div>
					</div>
				</div>
				<div class="bottom">版权所有 陶唐时代（北京）科技有限公司</div>
				<div class="bottom bottom_">
					Copyright 2020 yisheyun.cn
					<a href="https://beian.miit.gov.cn/">京ICP备2020039602号-2</a>
				</div>
			</div>
		</el-footer>
	</el-container>
</template>

<script>
import Swiper from '@/assets/utils/swiper.min.js';
export default {
	data() {
		return {
			name: '',
			tel: '',
			mouserCenter: '-1'
		};
	},
	components: {},
	mounted() {
		this.getSwiperInit();
	},
	methods: {
		toFirst() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		},
		toShop_() {
			let top = document.querySelector('.main').offsetTop;
			window.scrollTo({
				top: top - 100,
				behavior: 'smooth'
			});
		},
		toShop() {
			let top = document.querySelector('.centerContent').offsetTop;
			window.scrollTo({
				top: top - 100,
				behavior: 'smooth'
			});
		},
		toScroll() {
			let top = document.querySelector('.fromView').offsetTop;
			window.scrollTo({
				top: top - 100,
				behavior: 'smooth'
			});
		},
		to_apply_trial() {
			if (!this.name) {
				this.$message.warning('请输入姓名');
			} else if (!this.tel) {
				this.$message.warning('请输入手机号');
			} else {
				let Loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(255,255,255,0.9)',
					customClass: 'fullScreenLoading'
				});
				this.$http.apply_trial({ mobile: this.tel, name: this.name }).then(res => {
					Loading.close();
					if (res && !res.noHttp) {
						if (res.message) {
							this.$message.warning(res.message);
						} else {
							this.$message.warning('提交成功，我们将尽快与您联系！');
						}
					}
				});
			}
		},
		getSwiperInit() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: true,
				loop: true,
				observer: true,
				delay: 1500,
				effect: 'fade',
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				}
			});
			mySwiper.params.pagination.clickable = true;
			mySwiper.pagination.destroy();
			mySwiper.pagination.init();
			mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');

			// mySwiper.el.onmouseover = function() {
			// 	mySwiper.autoplay.stop();
			// };
			// mySwiper.el.onmouseout = function() {
			// 	mySwiper.autoplay.start();
			// };
		},
		centerItemOver(e) {
			this.mouserCenter = e;
		},
		centerItemOut(e) {
			this.mouserCenter = '-1';
		}
	}
};
</script>
<style scoped="scoped">
@import '~@/assets/css/swiper.min.css';
</style>
<style scoped="scoped" lang="less">
@import '~@/assets/css/index.less';
</style>
