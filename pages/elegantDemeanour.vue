<template>
    <div class="container">
        <div class="paopao-poster">
            <div class="h1 scroll-title">赛事风采</div>
            <div class="h4">ELEGANT DEMEANOUR</div>
        </div>
        <div class="paopao-title">赛事风采</div>
        <div class="paopao-ed">
            <div class="ed-item" v-for="(item, index) in list" :key="index">
                <img class="ed-img" v-if="item.fileType == 1" :src="item.path" alt="" />
                <video class="ed-video" v-if="item.fileType == 2" controls :src="item.path"></video>
                <div class="ed-desc">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    async asyncData ({app}) {
        let res = await app.$axios.$post('http://121.196.17.191:8002/web_api/api/common/list', {
            id: '',
            pageType: 'introduce_3'
        })
        if (res.code == 200) {
            let comUrl = "/svc"
            res.data.forEach(v => {
                Object.assign(v, {
                    path: comUrl + v.filesList[0].fileUrl,
                    fileType: v.filesList[0].fileType
                })
            })
        }
        let list = [...res.data]
        return {
            list
        }
    },
    mounted(){
        ScrollReveal().reveal('.scroll-title',{ 
            duration: 2000,
            distance: '50px'
        });
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
    .paopao-title {
        font-size: 40px;
        font-weight:600;
        font-size: 48px;
        color: #000;
        width: 1080px;
        margin-left: auto;
        margin-right: auto;
        margin-top:70px;
        margin-bottom: 60px;
        position: relative;
    }
    .paopao-title::after {
        content: '';
        display: block;
        width: 36px;
        height: 36px;
        background: #FFE704;
        opacity: 0.8;
        border-radius: 50%;
        position: absolute;
        left: 165px;
        bottom: -5px;
        z-index: -1;
    }
    .paopao-title::before {
        content: '';
        display: block;
        width: 11px;
        height: 11px;
        background: #FFE704;
        opacity: 0.8;
        border-radius: 50%;
        position: absolute;
        left: 200px;
        top: 20px;
        z-index: -1;
    }
    .paopao-ed {
        width: 1080px;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
    }
    .paopao-ed .ed-item {
        width: 320px;
        height: auto;
        background: #FFFFFF;
        margin-bottom: 50px;
    }
    .paopao-ed .ed-item .ed-img{
        width: 100%;
        height: 230px;
        display: block;
    }
    .paopao-ed .ed-item .ed-video{
        width: 100%;
        height: 230px;
        display: block;
    }
    .paopao-ed .ed-item .ed-desc {
        font-size: 14px;
        box-sizing: border-box;
        font-weight: 400;
        color: #000000;
        line-height: 20px;
        padding: 0 20px;
        margin-top: 20px;
    }
</style>

