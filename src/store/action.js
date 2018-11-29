/**
 *  异步状态处理
 *  Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。
 */

 //1.退出登录
 export const SIGNOUT=({commit}) => commit('SIGNOUT')

 //2.修改用户名
//  export const UPDATENAME = ({commit},payload) => commit('UPDATENAME')
 export const UPDATENAME= function (context,payload) { context.commit('UPDATENAME',payload); }
