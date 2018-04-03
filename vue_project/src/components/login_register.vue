<template>
    <div :class="{registerBody:isLogin}">
        <my-header @loginEvent="getLogin"></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>
<script>
    import Vue from "vue"
    import MyHeader from './myheader'
    Vue.component("my-header",MyHeader)
    import MyFooter from './myfooter'
    Vue.component("my-footer",MyFooter)
    export default {
        data(){
            return {isLogin:""}
        },
        methods:{
            getLogin:function(msg){
                this.isLogin = msg
            }
        }
    }
</script>