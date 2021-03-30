<template>
    <div class="container">
        <div class="paopao-poster">
            <div class="h1">旗下品牌</div>
            <div class="h4">BRANDS</div>
        </div>
        <div class="paopao-section1">
            <div class="paopao-box">
                <div class="brand-name">
                    {{brand_diy1[0].title}}                    
                </div>
                <div class="brand-desc">
                    {{brand_diy1[0].content}}
                </div>
            </div>
            <div class="brand-img">
                <div class="dark"></div>
                <img :src="brand_diy1[0].logo" alt="" />
            </div>
        </div>
        <div class="paopao-section2" :style="'background: url(' +  brand_diy2_2[0].logo + ') no-repeat 100% 100%;'">
            <img :src="brand_diy2_2[0].logo" alt="">
        </div>
        <div class="paopao-section3">
            <div class="advantage-item" :class="index % 2 == 0 ? 'left' : 'right'" v-for="(item, index) in brand_diy3" :key="index">
                <div class="content">
                    <div class="strong">{{item.title}}</div>
                    <div class="desc">{{item.content}}</div>
                </div>
                <img class="img" :src="item.logo" alt="" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    async asyncData ({app}) {
        let res = await app.$axios.$post('/api/brand/diy/list')
        if (res.code == 200) {
            let comUrl = "http://121.196.53.78:8888/svc"
            res.data.brand_diy1.forEach(v => {
                Object.assign(v, {
                    logo: comUrl + v.filesList[0].fileUrl,
                })
            })
            res.data.brand_diy2_1.forEach(v => {
                Object.assign(v, {
                    logo: comUrl + v.filesList[0].fileUrl,
                })
            })
            res.data.brand_diy2_2.forEach(v => {
                Object.assign(v, {
                    logo: comUrl + v.filesList[0].fileUrl,
                })
            })
            res.data.brand_diy3.forEach(v => {
                Object.assign(v, {
                    logo: comUrl + v.filesList[0].fileUrl,
                })
            })
        }
        let brand_diy1 = res.data.brand_diy1
        let brand_diy2_1 = res.data.brand_diy2_1
        let brand_diy2_2 = res.data.brand_diy2_2
        let brand_diy3 = res.data.brand_diy3
        return {
            brand_diy1,
            brand_diy2_1,
            brand_diy2_2,
            brand_diy3
        }
    }
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
    .paopao-section1 {
        width: 1080px;
        margin-top: 100px;
        margin-bottom: 100px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
    }
    .paopao-section1 .paopao-box {
        flex: 1;
    }
    .paopao-section1 .brand-name {
        font-size: 48px;
        font-weight: 600;
        color: #000000;
        position: relative;
    }
    .paopao-section1 .brand-name::after {
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
    .paopao-section1 .brand-name::before {
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
    .paopao-section1 .brand-desc {
        font-size: 16px;
        font-weight: 400;
        color: #000;
        margin-top: 40px;
        line-height: 22px;
        letter-spacing: 4px;
    }
    .paopao-section1 .brand-img {
        width: 556px;
        height: 424px;
        position: relative;
        margin-left: 100px;
    }
    .paopao-section1 .brand-img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        z-index: 1;
    }
    .paopao-section1 .dark {
        width: 556px;
        height: 424px;
        position: absolute;
        background: #EDEDED;
        top: -40px;
        left: 30px;
    }
    .paopao-section1 .dark::after {
        content: '';
        display: block;
        width: 120px;
        height: 5px;
        background: #F2DB00;
        position: absolute;
        right: 0;
        bottom: -100px;
        z-index: -1;
    }
    .paopao-section2 {
        width: 100%;
        height: 340px;
        background: #000;
        margin-top: 212px;
        position: relative;
    } 
    .paopao-section2 img {
        width: 740px;
        height: 400px;
        position: absolute;
        bottom: 50px;
        left: 50%;
        margin-left: -370px;
     }
    .paopao-section3 {
        width: 1080px;
        margin-top: 100px;
        margin-bottom: 100px;
        margin-left: auto;
        margin-right: auto;
    } 
    .paopao-section3 .advantage-item {
        display: flex;
        margin-bottom: 46px;
        justify-content: space-between;
    }
    .paopao-section3 .left {
        flex-direction: row-reverse;
    }
    .paopao-section3 .right {
        flex-direction: row;
    }
    .paopao-section3 .content {
        width: 590px;
    }
    .paopao-section3 .advantage-item .img {
        width: 400px;
        height: 200px;
    }
    .paopao-section3 .advantage-item .strong{
        font-size: 24px;
        font-weight: 600;
        color: #000000;
        line-height: 33px;
        letter-spacing: 6px;
        margin-bottom: 10px;
    }
    .paopao-section3 .advantage-item .desc{
        font-size: 14px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.25);
        line-height: 20px;
        letter-spacing: 3px;
    }
</style>
