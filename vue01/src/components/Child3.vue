<template>
    <div class="child3">
       <div class="left">
         <img :src="'http://elm.cangdu.org/img/'+ (value)" alt="">
         <p class="top">{{name}}</p>
         <p class="a">商家配送/{{name2}}送达/配送费￥{{name1}}元</p>
         <p class="gao">公告:欢迎光临,用餐高峰期请提前下单,谢谢</p>
         <p class="b"> < </p>
         <p class="c"> ></p>
       </div>
      <div class="active">
        <van-tabs v-model="active">
      <router-link :to="{path:'/child3'}"><van-tab title="商家"></van-tab></router-link>
      <router-link :to="{path:'/child3'}"><van-tab title="评价"></van-tab></router-link>
        </van-tabs>
        <div>
         <table border="1" cellpadding="1" cellspacing="1">
           <tr><td>热销榜是的分身乏术</td></tr>
         </table>
        </div>
      </div>
     <div class="abc">
       <van-sidebar v-model="activeKey"  >
         <van-sidebar-item v-for="value in arrays" :title="value.name" @click="address(value)"/>


           <!--<li><img :src="'https://elm.cangdu.org/img/'+value.image_path" alt=""></li>-->
       </van-sidebar>

     </div>
      <van-submit-bar
        :price="3050"
        button-text="去结算"
        @submit="onSubmit"
      />
    </div>
</template>

<script>
  import Vue from "vue"
  export default {
        name: "Child3",
      data(){
        return {
          value:'',
          name:'',
          name1:"",
          name2:'',
          id:'',
          arrays:[],
          active:2,
          activeKey: 0,
        }
      },
    methods:{
      onSubmit(){

      },
      address(value){
        console.log(123);
        console.log(value);
      }
    },
    mounted(){
            this.value=this.$route.query.names;
            this.name=this.$route.query.name1;
            this.name1=this.$route.query.name2
             this.name2=this.$route.query.name3
             this.id=this.$route.query.name4
           let _this=this;
           Vue.axios.get("https://elm.cangdu.org/shopping/v2/menu",{params:{ restaurant_id:_this.id}}).then(function (reslut) {
             _this.arrays=reslut.data.splice(0,7)
             console.log(_this.arrays)
           }).catch(function (error) {
             console.log(error)
           })

         }
    }
</script>

<style scoped>
  table{
    width: 80%;
    position: relative;
    text-align: center;
    left: 22%;
    top: 25%;
    border: 1px solid gainsboro;
  }
  tr{
    width: 80%;
    height: 50%;
    font-size: 0.3rem;
    background-color: grey;
  }
li{
  position: relative;
  width: 200%;
  height: 100%;
  left: 50%;
  top: 50%;
  background-color: grey;
  text-align:center;
}
  .abc{
    position: absolute;
    left: 0;
    top: 25%;
  }
   .van-sidebar-item{
     top: 25%;
     left: 0;
   }
  van-sidebar{
    position: absolute;
    left: 0;
    top: 25%;
  }
  .van-button{
    background-color: green;
  }
  .van-submit-bar__bar{
    background-color: grey;
  }
.child3{
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
}
  .left{
    position: absolute;
    left:0;
    top: 0;
    width: 100%;
    height: 15%;
    background: grey;
  }
  img{
    position: absolute;
    left: 2%;
    top: 10%;
    width: 20%;
    height: 80%;
  }
  .top,.a,.gao,.b{
    position: absolute;
    color: white;
    font-size: 0.18rem;
    left: 25%;
    top: 10%;
  }
  .a{
    top: 40%;
    font-size: 0.11rem;
  }
  .gao{
    top: 70%;
    font-size: 0.11rem;
  }
  .b,.c{
    left: 0%;
    top: 5%;
    font-size: 0.25rem;
  }
  .c{
    position: absolute;
    color: white;
    left: 92%;
    top: 30%;
  }
  .active{
    position: absolute;
    width: 100%;
    height: 10%;
    left: 0;
    top:17%;
    color: lightsteelblue;
    /*background: #90B4FC;*/
  }
  .router-link-active span,.router-link-active p{
    color: blue;
  }
  .van-tabs__line{
    background-color: blue;
  }
  ul{
    position: absolute;
    left: 0;
    top: 25%;
  }
  li{
    /*width: 25%;*/
    height: 10%;
    text-align: center;
    font-size: 0.2rem;
  }
</style>
