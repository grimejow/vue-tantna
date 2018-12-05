<template>
    <div class="phone">
        <h1>手机号码</h1>
        <div class="phone-number">
             <Select :model.sync="areaCode " size="large"  style="width:25%;height:10%" placeholder="+86">
                 <Option v-for="item in countryList" :value="item.value">{{ item.label }}</Option>
            </Select>
            <Input size="large" placeholder="请输入手机号码"></Input>
        </div>
        <router-link to="/chat" class="login-to-chat">
        <div class="login">
         <Button type="primary" size="large" long>登录</Button>
         </div>
         </router-link>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: 'phone',
                 countryList: [
                    {
                        value: '中国大陆',
                        label: '+86'
                    },
                    {
                        value: '美国',
                        label: '+1'
                    },
                    {
                        value: '日本',
                        label: '+81'
                    },
                    {
                        value: '韩国',
                        label: '+82'
                    },
                    {
                        value: '中国香港',
                        label: '+852'
                    },
                    {
                        value: '中国澳门',
                        label: '+853'
                    }
                ],
                areaCode:''
            }
        }
    }
</script>

<style>
.phone{
    width: 100%;
    height:100%;
    position: relative;
}
.phone h1{
      
    padding-left: 5%;
    height:10%;
    line-height: 3;
    color:whitesmoke;
    text-align: left;
    background: rgb(212,68,44);
}
.phone{
    width:100%;
    height:100%
}
.phone-number{
    width:100%;
    height:75%;
}
.phone-number .ivu-select{
    margin-top:10%;
    margin-left:5%;
    display: block !important;
}
.phone-number .ivu-select-selection{
    height: 100% !important;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-top:0px;
    border-left:0px;
    border-right:0px;
   
}
.phone-number .ivu-select-placeholder{
    margin-left:-30%;
    font-size:1.2rem !important;
}
.phone .ivu-input-wrapper{
    position: absolute;
    width:60%;
    height: 10%;
    top:14%;
    right:2%;
}
.phone .ivu-input-wrapper input{
    height:100%;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom: 2px solid red;
}
.phone .ivu-input-wrapper .ivu-input-large{
    font-size: 1.2rem;
}
.login {
    height:10%;
      position: abolute;
}
    .login .ivu-btn {
        font-size: 1.2rem;
        bottom:0px;
        height:100%;
    }
</style>