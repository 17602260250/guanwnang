import axios from "./axios";
const allApi = {
	apply_trial:(data)=>{   //申请试用
		return axios({
			url:'/apply_trial',
			method: "POST",
			data:data
		});
	},
}
export default allApi