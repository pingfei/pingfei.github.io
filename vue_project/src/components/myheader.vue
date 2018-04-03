<template>
    <div class="header">
        <div class="wrapper">
            <div class="logo">
                <a title="Z商城" href="index.html">
                    <img width="130" height="60" title="Z商城" alt="Z商城" src="../assets/images/login/logo_130x60.png">
                    <p>中关村在线旗下网上商城</p>
                </a>
            </div>
            <div class="register-bar">
                还没有Z商城账号？
                <a v-show="isLogin" @click="changeStaus" href="javascript:void(0)">立即登录</a>
                <a v-show="!isLogin" @click="changeStaus" href="javascript:void(0)">立即注册</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {isLogin:""}
        },
        methods:{
            changeStaus:function(){
                console.log(this.$route.path)
                this.isLogin = this.$route.path == "/login"
                console.log(!this.isLogin)
                if(this.isLogin){
                    this.$router.push("/register")
                }else{
                    this.$router.push("/login")
                }
                this.$emit("loginEvent",this.isLogin)
            }
        }
    }
</script>