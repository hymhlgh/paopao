<template>
    <div class="container">
        <div class="paopao-poster">
            <div class="h1 scroll-title">公司介绍</div>
            <div class="h4">PAOPAO SPORTS</div>
        </div>
        <div class="paopao-introduce">
            <div class="paopao-name">
                <img class="double-arrow" src="../assets/img/arrow-paopao.png" alt="" /> {{data.title}}
            </div>
            <div class="paopao-logo">
                <img :src="data.logo" alt="" />
            </div>
            <div class="paopao-desc">
                {{data.content}}                    
            </div>
        </div>
    </div>
</template>

<script>

export default {
    async asyncData ({app}) {
        let res = await app.$axios.$post('http://124.222.155.186:8081/web_api/api/common/list', {
            id: '',
            pageType: 'introduce_2'
        })
        let data = {}
        if (res.code == 200) {
            let comUrl = "/svc"
            Object.assign(res.data[0], {
                logo: comUrl + res.data[0].filesList[0].fileUrl,
            })
            Object.assign(data, res.data[0])
        }
        return {
            data
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
    .paopao-introduce {
        width: 1080px;
        margin-top: 70px;
        margin-bottom: 100px;
        margin-left: auto;
        margin-right: auto;
    }
    .paopao-introduce .paopao-name {
        font-size: 48px;
        font-weight: 600;
        color: #000000;
        margin-left: 32px;
        display: flex;
        align-items: center;
    }
    .paopao-introduce .paopao-name .double-arrow {
        background: #fff;
        width: 58px;
        height: 40px;
        margin-right: 32px;
    }
    .paopao-introduce .paopao-logo {
        width: 520px;
        height: 350px;
        background: #000;
        margin-top: 70px;
        margin-bottom: 50px;
        margin-left: auto;
        margin-right: auto;
    }
    .paopao-introduce .paopao-logo img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .paopao-introduce .paopao-desc {
        font-size: 18px;
        font-weight: 400;
        color: #000000;
        line-height: 26px;
        text-indent: 35px;
    }
</style>

