<template>
    <div class="container">
        <div class="paopao-poster">
            <div class="h1">奖杯奖牌</div>
            <div class="h4">CERTIFICATE OF HONOR</div>
        </div>
        <div class="paopao-ach">
            <div class="ach-item" v-for="(item, index) in list" :key="index">
                <div class="ach-box">
                    <img class="ach-img" :src="item.logo" alt="" />
                </div>
                <div class="ach-desc">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    async asyncData ({app}) {
        let res = await app.$axios.$post('http://121.196.53.78:8001/api/common/list', {
            id: '',
            pageType: 'introduce_4'
        })
        if (res.code == 200) {
            let comUrl = "/svc"
            res.data.forEach(v => {
                Object.assign(v, {
                    logo: comUrl + v.filesList[0].fileUrl,
                })
            })
        }
        let list = [...res.data]
        return {
            list
        }
    }
}
</script>

<style scoped>
    .paopao-poster {
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url('../assets/img/banner_bg.jpg') no-repeat;
        background-size: cover;
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
    .paopao-ach {
        width: 1080px;
        margin-top: 100px;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .paopao-ach .ach-item {
        width: 250px;
        background: #FFFFFF;
        box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.16);
        margin-bottom: 90px;
    }
    .paopao-ach .ach-item .ach-box{
        width: 100%;
        height: 170px;
        overflow: hidden;
    }
    .paopao-ach .ach-item .ach-img:hover {
        transform:scale(1.2);
    }
    .paopao-ach .ach-item .ach-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        cursor: pointer;
        transition:all .4s;
        -moz-transition:all .4s;
        -webkit-transition:all .4s;
        -o-transition:all .4s;
    }
    .paopao-ach .ach-item .ach-desc {
        font-size: 14px;
        box-sizing: border-box;
        font-weight: 400;
        color: #000000;
        line-height: 20px;
        padding: 0 20px;
        margin: 20px 0;
    }
</style>

