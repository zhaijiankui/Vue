<template>
   <div>
      <div class="classify">
        <div class="leftcontent left">
          <ul>
            <li class="li1">
              <span class="s1 pull-left">异国料理</span>
              <span class="s2 ">2169</span>
            </li>

              <!--快餐便当-->
            <li v-for="(per,index) in classifyarr" :key="index" @click="showAll(per.sub_categories,index)">
              <div class="d1">
                <img :src="'https://fuss10.elemecdn.com/'+per.image_url+'.png'" alt="">
                <span>{{per.name}}</span>
              </div>
              <span class="s2 s3">{{per.count}}</span>
              <span class="s4"> >  </span>
            </li>
          </ul>
        </div>
          <div class="rightcontent left" >
            <ul v-for="(per,index) in allcate" class="ul2">
              <li class="li2">
               <span>{{per.name}}</span>
                <span class="right">{{per.count}}</span>
              </li>
            </ul>
          </div>
      </div>
   </div>
</template>

<script>
  import Vue from "vue"
  import Ranking_zwq from "./ranking_zwq";
  import Main_four_zwq from "./main_four_zwq";
    export default {
        name: "Classify",
      components: {Main_four_zwq, Ranking_zwq},
      data(){
        return{
          classifyarr:[],
          url:"",
          one:{},
          two:{},
          allcate:""
        }
      },
      mounted(){
        Vue.axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category")
          .then((relust)=>{
            console.log(relust.data)
            this.one=relust.data.splice(0,1)
            this.classifyarr=relust.data
            this.url=relust.data.image_url

          }).catch(function (error) {
          console.log(error);
        });

      },
      methods:{
        showAll(v,key){
            this.allcate=v.slice(1,100)


          }
      }
    }

      //https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png
  //https://fuss10.elemecdn.com/4/35/a7eda7659bac613e524ca7c1ae12epng.png
</script>

<style scoped>
.classify{
  width: 100%;
  background: white;
  height: 3.63rem;
}
  .leftcontent{
    background: #f5f5f5;
    width: 50%;
    height: 100%;
    display: inline-block;

  }
  .li1{
    line-height: 0.42rem;

    padding-left: 3%;
    text-align: right;

  }

  li{
    line-height: 0.38rem;
   /*// background:white;*/

  }

  .s1{
    font-size: 0.1171rem;
  }
  .s2{

    padding-right: 3%;
    font-size: 0.09375rem;
   background: #ccc;
    color: white;
    border-radius: 35%;
    display: inline-block;
    padding: 0 3% 0 3%;
    line-height: 0.153rem;
    margin-right: 6%;

  }
  .d1{
    width: 62%;

    height: 100%;
    display: inline-block;
  }
  .d1 img{

    width: 0.1875rem;
    height: 0.1875rem;
   margin-left: 10px;
  }
  .d1 span{
    font-size:0.1171rem ;
    vertical-align:0.04rem;
    margin-left: 0.1rem;
  }
.s3{
  vertical-align:0.04rem;
  margin: 0;

}
  .s4{
    color: #ccc;
    vertical-align:0.04rem;
    margin-right: 0.05rem;
    float: right;
  }


  .rightcontent{

    width: 50%;
    height: 100%;
  }
.li2{
  border-bottom: 1px solid #e4e4e4;
  margin-left: 5%;

}
.rightcontent{
  /*overflow:scroll;*/
  overflow : auto;
}
  .li2 span{
    font-size: 0.1289rem;
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
