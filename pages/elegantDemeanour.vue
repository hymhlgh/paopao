<template>
    <div class="container">
        <div class="paopao-poster">
            <div class="h1">赛事风采</div>
            <div class="h4">ELEGANT DEMEANOUR</div>
        </div>
        <div class="paopao-title">赛事风采</div>
        <div class="paopao-ed">
            <div class="ed-item">
                <img class="ed-img" src="" alt="" />
                <div class="ed-desc">
                    获  奖  单  位 :  厦门跑跑加尤车队
                    获奖名称/荣誉:  2016年CKC中国卡
                    丁车锦标赛俱乐部杯赛南区复赛冠军
                </div>
            </div>
            <div class="ed-item">
                <img class="ed-img" src="" alt="" />
                <div class="ed-desc">
                    获  奖  单  位 :  厦门跑跑加尤车队
                    获奖名称/荣誉:  2016年CKC中国卡
                    丁车锦标赛俱乐部杯赛南区复赛冠军\
                    获  奖  单  位 :  厦门跑跑加尤车队
                    获奖名称/荣誉:  2016年CKC中国卡
                    丁车锦标赛俱乐部杯赛南区复赛冠军
                </div>
            </div>
            <div class="ed-item">
                <img class="ed-img" src="" alt="" />
                <div class="ed-desc">
                    获  奖  单  位 :  厦门跑跑加尤车队
                    获奖名称/荣誉:  2016年CKC中国卡
                    丁车锦标赛俱乐部杯赛南区复赛冠军
                </div>
            </div>
            <div class="ed-item">
                <img class="ed-img" src="" alt="" />
                <div class="ed-desc">
                    获  奖  单  位 :  厦门跑跑加尤车队
                    获奖名称/荣誉:  2016年CKC中国卡
                    丁车锦标赛俱乐部杯赛南区复赛冠军
                </div>
            </div>
            <div class="ed-item">
                <img class="ed-img" src="" alt="" />
                <div class="ed-desc">
                    获  奖  单  位 :  厦门跑跑加尤车队
                    获奖名称/荣誉:  2016年CKC中国卡
                    丁车锦标赛俱乐部杯赛南区复赛冠军
                </div>
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

