<template>
    <div class="SortRoot">
      <van-sticky>
        <van-nav-bar
          title="甜品饮料"
          left-arrow
          @click-left="onClickLeft"
        />
      </van-sticky>
      <div class="header">
        <div class=" box box1" @click="toclassify">甜品饮料</div>
        <div class=" box box2" @click="torankings ">排序</div>
        <div class=" box box3" @click="toscreen">筛选</div>
      </div>

        <div v-show="isshow">
          <router-view></router-view>
        </div>


    </div>
</template>

<script>
    // import Classify from "./Classify";
    // import Ranking_zwq from "./ranking_zwq";
    // import SweetDrinks from "./SweetDrinks";
    export default {
        name: "Sort_zwq",
      // components: {SweetDrinks, Ranking_zwq, Classify},
      data() {
        return {
          isshow:false

        }

      },
      methods:{
        toclassify(){
         // console.log(1)

          this.$router.push({path:"/sort/classify"})
         this.isshow=!this.isshow


        },
        torankings(){
          //console.log(2)
 this.isshow=!this.isshow
          this.$router.push({path:"/sort/ranking"})
        },
        toscreen(){
          this.$router.push({path:"/sort/screen"})
        this.isshow=!this.isshow
       //   console.log(3)
        },

          onClickLeft(){
            this.$router.go(-1)
          },
      }
    }
</script>

<style scoped>
  .van-nav-bar__title{
    color: white;
    font-weight:700;
    font-size: 0.18rem;
  }
  .van-nav-bar{
    background: #3190e8;

  }
  .van-icon {
    color: white;
    font-size: 0.25rem;
    margin-left: -100%;
  }
.header{
  background: white;
  line-height: 0.375rem;
}
  .box{
    display: inline-block;
    width: 32%;
    text-align: center;
  }
  .box1{
 border-right: 1px solid #f5f5f5;
  }
  .box2{
    /*background: yellow;*/

    border-right: 1px solid #f5f5f5;
  }
.box3{
  /*background: yellowgreen;*/
}

.div2{
  display: none;
}
</style>
