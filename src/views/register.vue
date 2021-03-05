<template>
	<div class="register">
		<div class="main">
			<el-input class="telInput" type="tel" v-model="tel" placeholder="请输入手机号"></el-input>
			<el-input class="telInput telInput_" placeholder="请输入密码" v-model="password" show-password></el-input>
			<div class="danger_text">未注册的手机号码可以将直接作为易奢云账户</div>
			<el-button type="danger" class="danger_btn" @click="toDanger">确认</el-button>
			<router-link to="/index" class="to_index">去首页</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tel:"",
				password:''
			}
		},
		mounted() {
			
		},
		methods:{
			toDanger(){
				if(!this.tel){
					this.$message.error('手机号不正确');
				}else if(!this.password){
					this.$message.error('密码不正确');
				}else if(this.tel.length<11){
					this.$message.error('手机号不正确');
				}else{
					localStorage.setItem('yisheyunTel',this.tel)
					this.$router.push({
						path:'/IndustryInformation'
					})
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import '~@/assets/css/register.less';
</style>
