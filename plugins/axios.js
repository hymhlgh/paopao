/*
 * @Author: Liugh
 * @Date: 2022-03-11 15:29:45
 * @LastEditTime: 2022-03-14 17:38:38
 * @LastEditors: Do not edit
 * @FilePath: \paopao\plugins\axios.js
 * @Description:Axios统一拦截器
 */
import unifyApi from "../api/index";

export default function({ $axios }, inject) {
  // 后端接口地址
  $axios.onRequest(config => {});
  $axios.onError(error => {});
  $axios.onResponse(response => {});
  const apiModules = {};
  $axios.onRequest(config => {
    // 相关配置
  });
  apiModules.article = unifyApi($axios);
  // Inject to context as $api
  inject("api", apiModules);
}
