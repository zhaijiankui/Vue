<template>
  <div>
    <div>

      <van-cell
        :title="'智能排序'"
        is-link value="" />

      <van-cell
        :title="'距离最近'"
        is-link value="" />

      <van-cell
        :title="'销量最高'"
        is-link value="" />

      <van-cell
        :title="'起送价最低'"
        is-link value="" />

      <van-cell
        :title="'配送速度最快'"
        is-link value="" />

      <van-cell
        :title="'评分最高'"
        is-link value="" />


    </div>



  </div>

</template>

<script>
  import Vue from "vue"
    export default {
        name: "ranking_zwq",
      created(){
          Vue.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762")
            .then((rel)=>{
              console.log(rel.data)
            })
      }

    }
</script>

<style scoped>

</style>
