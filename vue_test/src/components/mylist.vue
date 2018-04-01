<template>
    <div>
        <h1>这是我的第一个组件</h1>
        <ul>
            <li v-for="(tmp,index) in list" :key="index">
                <router-link :to="'/detail/'+index">
                    {{tmp}}
                </router-link>
            </li>
        </ul>
        <button @click="handleClick" id="mybtn">clickMe</button>
        <router-link to="/124">test</router-link>
    </div>
</template>
<script>
    import MyHeader from '@/components/myheader'
    export default{
        data(){
            return {
                list:[100,200,300,400]
            }
        },
        components:{
            "my-header":MyHeader
        },
        methods:{
            handleClick(){
                console.log("btn is clicked")
            }
        },
        mounted(){
            console.log($("#mybtn"))
        }
    }
</script>