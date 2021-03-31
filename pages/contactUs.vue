<template>
    <div class="container">
        <div class="paopao-poster">
            <div class="h1">联系我们</div>
            <div class="h4">CONTACT US</div>
        </div>
        <div class="paopao-contact">
            <div class="contact-item" v-for="(item,index) in list" :key="index">
                <img class="contact-icon" :src="item.icon" alt="" />
                <div>
                    {{item.title}}<br/>
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
            pageType: 'contact_1'
        })
        if (res.code == 200) {
            let comUrl = "/svc"
            res.data.forEach(v => {
                Object.assign(v, {
                    icon: comUrl + v.filesList[0].fileUrl,
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
    .paopao-contact {
        width: 1080px;
        margin-top: 130px;
        margin-bottom: 120px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        font-size: 22px;
        font-weight: 400;
        color: #000000;
        text-align: center;
    }
    .paopao-contact .contact-icon {
        width: 110px;
        height: 102px;
        margin-bottom: 54px;
    }
    .paopao-contact .contact-item {
        flex: 1;
    }
</style>

