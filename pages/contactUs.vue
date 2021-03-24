<template>
    <div class="container">
        <div class="paopao-poster">
            <div class="h1">联系我们</div>
            <div class="h4">CONTACT US</div>
        </div>
        <div class="paopao-contact">
            <div class="contact-phone">
                <img class="contact-icon" src="" alt="" />
                <div>
                    联系电话<br/>
                    400-8888888
                </div>
            </div>
            <div class="contact-email">
                <img class="contact-icon" src="" alt="" />
                <div>
                    邮箱地址<br/>
                    PAOPAO@QQ.com
                </div>
            </div>
            <div class="contact-address">
                <img class="contact-icon" src="" alt="" />
                <div>
                    公司地址<br/>
                    厦门市思明区观音山123号
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
    .paopao-contact .contact-phone {
        flex: 1;
    }
    .paopao-contact .contact-email {
        flex: 1;
    }
    .paopao-contact .contact-address {
        flex: 1;
    }
</style>

