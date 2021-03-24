<template>
    <div class="container">
        <div class="paopao-poster">
            <div class="h1">旗下品牌</div>
            <div class="h4">BRANDS</div>
        </div>
        <div class="paopao-brand">
            <div class="brand-name">
                皮皮与卡丁欢乐亲子餐厅
            </div>
            <div class="brand-img">
                <img src="" alt="" />
            </div>
            <div class="brand-desc">
                旗下品牌组要有PPMK跑跑迷卡、皮皮与卡丁欢乐亲子餐厅、WYB意大利足球训练营、动动将篮球、动动战场射击体验馆、壹鹭溜滑轮俱乐部、晴娜芭蕾全外教艺术教育、跑跑卡丁x一峰餐饮和卡丁车亲子运动教育主题乐园九大项目.
                旗下品牌组要有PPMK跑跑迷卡、皮皮与卡丁欢乐亲子餐厅、WYB意大利足球训练营、动动将篮球、动动战场射击体验馆、壹鹭溜滑轮俱乐部、晴娜芭蕾全外教艺术教育、跑跑卡丁x一峰餐饮和卡丁车亲子运动教育主题乐园九大项目.
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
    .paopao-poster {
        width: 100%;
        height: 400px;
        background: #000000;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .paopao-poster .h1 {
        font-size: 68px;
        font-weight: 600;
        color: #FFFFFF;
        letter-spacing: 16px;
        text-align: center;
        margin-bottom: 38px;
    }
    .paopao-poster .h4 {
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
    }
    .paopao-brand {
        width: 1080px;
        margin-top: 70px;
        margin-bottom: 100px;
        margin-left: auto;
        margin-right: auto;
    }
    .paopao-brand .brand-name {
        font-size: 48px;
        font-weight: 600;
        color: #000000;
        position: relative;
    }
    .paopao-brand .brand-name::after {
        content: '';
        display: block;
        width: 70px;
        height: 5px;
        background: #F2DB00;
        position: absolute;
        left: 0;
        bottom: -20px;
        z-index: -1;
    }
    .paopao-brand .brand-name::before {
        content: '';
        display: block;
        width: 15px;
        height: 5px;
        background: #F2DB00;
        position: absolute;
        left: 80px;
        bottom: -20px;
        z-index: -1;
    }
    .paopao-brand .brand-img {
        width: 100%;
        margin-top: 70px;
        margin-bottom: 50px;
        margin-left: auto;
        margin-right: auto;
    }
    .paopao-brand .brand-desc {
        font-size: 16px;
        font-weight: 400;
        color: #000000;
        line-height: 26px;
        text-indent: 35px;
    }
</style>

