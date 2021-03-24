<template>
  <div class="footer">
    <ul>
        <li v-for="(item,index) in listData" :key="index">
          {{item.name}}
        </li>
    </ul>
    <div class="footer-dec">跑跑体育用品有限公司</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listData: [
        {name: "旗下品牌"},
        {name: "公司介绍"},
        {name: "关于我们"}
      ]
    }
  },
  async asyncData() {
    let listData = await new Promise((resolve,reject) => {
      setTimeout(()=> {
        resolve([
          {name: "旗下品牌"},
          {name: "公司介绍"},
          {name: "关于我们"}
        ],1000)
      })
    })

    return {
      listData: listData
    }
  }
}
</script>
<style scoped>
.footer{
  width: 100%;
  height: 110px;
  background-color: #000000;
  color: #fff;
}
.footer ul{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer ul li{
    margin: 0 60px;
    cursor: pointer;
}
.footer-dec{
    background: #464646;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: 400;
    font-size: 0.13rem;
}
</style>