<template>
  <h1>这是详情页{{id}}</h1>
</template>
<script>
    export default{
        mounted(){
            this.id = this.$route.params.num
        },
        data(){
            return {
                id:0
            }
        }
    }
</script>