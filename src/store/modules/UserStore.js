// //관리자 로그인

// import Vue from "vue";
// import Vuex from "vuex";
// import router from "@/router";
// import axios from "axios";
// import {API_LIST} from "@/api";

// Vue.use(Vuex);

// const userStore = {
//   state: {
//     isLogin: false,
//     isLoginError: false,
//   },
//   mutations: {
//     // 로그인이 성공했을 때,
//     loginSuccess(state) {
//       state.isLogin = true;
//       state.isLoginError = false;
//     },
//     //로그인이 실패했을 때
//     loginError(state) {
//       state.isLogin = false;
//       state.isLoginError = true;
//     },
//   },
//   actions: {
//     //로그인 시도
//     login({commit},password) {
//       API_LIST.getAdminInfo(password)
//         .then((res) => {
//           if (res.status === 200) {
//             console.log(res.data)
//             if(res.data.result) {
//             alert("로그인 되었습니다")
//             commit("loginSuccess")
//             router.push({ name: "AdminListView" });
//             }
//           }
//           else {
//             lert("비밀번호가 틀렸습니다");
//             commit("loginError");
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           alert("비밀번호가 틀렸습니다");
//           commit("loginError");
//         });
//     },
//   },
//   namespaced: true,
// };

// export default userStore;
