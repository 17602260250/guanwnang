<template>
	<div class="IndustryInformation">
		<el-header :height="'70px'">
			<div class="header">
				<div class="headerContent">
					<div class="leftHeader">
						<!-- <img src="" alt="" class="img" /> -->
						<div class="logoTitle">易奢云</div>
						<div class="classifiction">
							<router-link class="_a to_a" to="/index">首页</router-link>
							<router-link class="_a to_a" style="color: #000000;font-weight: bold;" to="/IndustryInformation">收费行业资讯</router-link>
						</div>
					</div>
					<div class="rightHeader">
						<template v-if="logoin">
							<span @click="toRemove" class="_a to_a el-button">退出</span>
							 <span style="color: #007AFF;" class="_a to_a el-button">{{logoin}}</span>
						</template>
						<template v-else>
							<router-link class="_a to_a el-button" to="/register">登录</router-link>
							<router-link class="_a to_a el-button" to="/register">注册</router-link>
						</template>
					</div>
				</div>
			</div>
		</el-header>
		<el-main class="main">
			<div class="mainContent">
				<template v-for="(item, index) in list">
					<div class="mainItem" :key="index" @click="mainItemClick">
						<div class="left_item"><img :src="item.img" alt="" class="left_item_img" /></div>
						<div class="right_item">
							<div class="right_title">{{ item.title }}</div>
							<div class="right_text">{{ item.text }}</div>
							<div class="right_bottom_">
								<span class="divider_item">易奢云</span>
								<el-divider direction="vertical"></el-divider>
								<span class="divider_item">{{ time }}</span>
							</div>
						</div>
					</div>
				</template>
			</div>
		</el-main>
		<el-footer :height="'227px'" class="elFoolter">
			<div class="elFoolter_">
				<div class="top">
					<div class="left">
						<div class="img">易奢云</div>
						<!-- <img src="" alt="" class="img" /> -->
						<div class="text_">国内首家奢侈品电商解决方案服务商</div>
						<!-- <div class="line">
							<div class="to_a" @click="toFirst">首页</div>
							<el-divider direction="vertical"></el-divider>
							<div class="to_a" @click="toShop">易奢云SaaS</div>
							<el-divider direction="vertical"></el-divider>
							<div class="to_a" @click="toShop_">产品服务</div>
							<el-divider direction="vertical"></el-divider>
							<div class="_a to_a" @click="toScroll">关于我们</div>
						</div> -->
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
		<el-dialog width="40%" title="付费" :visible.sync="dialogTableVisible">
		  <div class="dialog_body" style="overflow: hidden;padding: 20px 50px;">
			  <template v-for="(item,index) in dialogList">
				  <div class="dialog_item" :key="index" :style="{
					  float:'left',
					  width:'50%',
					  marginBottom:'20px'
				  }">
						<el-radio v-model="radio" :label="index">
							<img style="height: 30px;position: relative;bottom: -10px;" :src="item" alt="">
						</el-radio>
				  </div>
			  </template>
		  </div>
		  <div style="margin: 20px 0px 0px;overflow: hidden;">
			   <el-button @click="to_" style="padding-left: 25px;padding-right: 25px;float: right;" size="small" type="danger">确定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			logoin:localStorage.getItem('yisheyunTel'),
			dialogList:[
				'/img/IndustryInformation/y1.jpg',
				'/img/IndustryInformation/y2.jpg',
				'/img/IndustryInformation/y3.jpg',
				'/img/IndustryInformation/y4.jpg',
				'/img/IndustryInformation/y5.jpg',
				'/img/IndustryInformation/y6.jpg'
			],
			time: '',
			radio:0,
			dialogTableVisible: false,
			list: [
				{
					img: '/img/IndustryInformation/IndustryInformation1.png',
					title: '奢侈品数字化',
					text: '进入2021年，为进一步打开中国市场，数字化依然是奢侈品牌采取的策略，但当下的数字化已不同于此前意义上的数字化。当下的数字化显然更全面更深入。'
				},
				{
					img: '/img/IndustryInformation/IndustryInformation2.png',
					title: '新春奢侈品消费洞察',
					text: '从具体品牌来看，最受欢迎TOP10品牌分别是Gucci、LV、Burberry、Coach、雅诗兰黛、Chanel、迪奥、爱马仕、Miss Kelly和YSL。同比来看，爱马仕成为受欢迎程度排名上升最快的品牌。'
				},
				{
					img: '/img/IndustryInformation/IndustryInformation3.png',
					title: '新冠时期，奢侈品在中国卖得一片大好',
					text: '贝恩咨询预测，2020年中国境内奢侈品市场有望达到3460亿元人民币，同比增幅高达48%'
				}
			]
		};
	},
	mounted() {
		let time_ = new Date().getTime();
		let year = new Date(time_).getFullYear();
		let month = Number(new Date(time_).getMonth());
		month = month < 10 ? `0${month}` : month;
		let date = Number(new Date(time_).getDate());
		date = date < 10 ? `0${date}` : date;
		this.time = `${year}-${month}-${date}`;
	},
	methods: {
		toRemove(){
			localStorage.removeItem('yisheyunTel');
			this.$router.push({
				path:'/register'
			})
		},
		mainItemClick() {
			this.$alert('本条资讯2元', '温馨提示', {
				confirmButtonText: '确定',
				confirmButtonClass:'alertConfim',
				callback: action => {
					if (action == 'confirm') {
						setTimeout(()=>{
							this.dialogTableVisible=true
						},200)
					}
				}
			});
		},
		to_(){
			 this.$message.error('支付失败');
			 this.dialogTableVisible=false
		}
	}
};
</script>

<style scoped="scoped" lang="less">
@import '~@/assets/css/IndustryInformation.less';
</style>
