<template>
  <div>
      <h1>404 pages not found</h1>
      <h3>{{count}}s后自动返回上一页</h3>
  </div>
</template>
<script>
    export default{
        data(){
            return {count:5,myTimer:null}
        },
        mounted(){
            this.myTimer = setInterval(()=>{
                this.count--
                if(this.count<0){
                    clearInterval(this.myTimer)
                    this.$router.go(-1)
                }
            })
        },
        beforeDestroy(){
            if(this.myTimer)
                clearInterval(this.myTimer)
        }
    }
</script>