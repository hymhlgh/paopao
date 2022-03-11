/*
 * @Author: Liugh
 * @Date: 2022-03-11 15:52:14
 * @LastEditTime: 2022-03-11 16:23:12
 * @LastEditors: Do not edit
 * @FilePath: \paopao\api\index.js
 * @Description:
 */
export default $axios => ({
  homeList(data) {
    return $axios.$post("/api/home/list", data);
  },
  commonList(data) {
    return $axios.$post("/api/common/list", data);
  },
  diyList(data) {
    return $axios.$post("/api/brand/diy/list", data);
  },
  brandNavList(data) {
    return $axios.$post("/api/brand/nav/list", data);
  }
});
