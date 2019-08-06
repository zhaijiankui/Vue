import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import Children from "../components/Children"
import Chengshi from "../components/Chengshi"
import Child1 from "../components/Child1"
import One from "../components/One"
// import child from "../components/child"
import Child2 from "../components/Child2";
import Denglu from "../components/Denglu";
import home from "../components/Home_zwq"
// import sousuoShi from  "../components/sq/sousuoShi"
// import one_zwq from  "../components/one"
// import  two_zwq from  "../components/sq/main_two_zwq"
// import  three_zwq from  "../components/sq/main_three_zwq"
    import  four from  "../components/main_four_zwq"
// import five from  "../components/sq/main_five_zwq"
import balance from "../components/Balance_zwq"
import explain from  "../components/explain_zwq"
 import info from  "../components/Myinfo_zwq"
import addMap from "../components/addMap"
import nav from "../components/nav"
import sort from "../components/Sort_zwq"
import classify from "../components/Classify"
import ranking from "../components/ranking_zwq"
import screen from  "../components/Screen_zwq"
import Child3 from "../components/Child3"
import discounts from "../components/discounts_zwq"
import discfoot from "../components/discfoot"
import reco from  "../components/Recommend"
import addAddress from "../components/addAddress";
// import confirmOrder from "../components/con";
import selectAddress from "../components/selectAddress";
import orderRemarks from "../components/orderRemarks (1)"
// import discounts from "../components/sq/discounts_zwq"
// import nav from  "../components/nav"
// import Zhhu from "../components/Zhhu"
import huo from "../components/Huobao";
import searchFood from "../components/searchFood";
import serviceCentre from "../components/serviceCentre"
import supervipnumber from "../components/supervipnumber"
import Yonghuming from "../components/Yonghuming";
export default new Router({
  routes: [
    {path:"/sort",component:sort,children:[
        {path:"screen",component:screen},
        {path:"ranking",component:ranking},
        {path:"classify",component:classify},
      ]},
    {path:'/one',component:One,children: [ {path:"four",component:four}]},
    {path:"/huo",component:huo},
    // {path:'/children',component:Children},
    {path:'/chengshi',component:Chengshi},
    {path:'/child1',component:Child1},
    {path:'/child2',component:Child2},
    {path:'/child3',component:Child3},
    // {path:"/",redirect:"/home"},
  {path:"/home",component:home},
    {path:"/discounts",component:discounts,children:[{path:"discfoot",component:discfoot}]},
    {path:'/reco',component:reco},
    // {path:"/sousuoShi",component:sousuoShi},
    // {path:"/one_zwq",component:one_zwq},
    {path:'/nav',component:nav,children:[{path:'searchFood',component:searchFood}]},
    {path:'/service',component:serviceCentre},
    {path:'/supervipnumber',component:supervipnumber},
    {path:'/yonghu',component:Yonghuming},
    {path:"/addAddress",  component:addAddress},
    {path:"/orderRemarks",  component:orderRemarks},
    {path:"/slectAddress",  component:selectAddress},
    // {path:"/two_zwq",components:{
    //     foot:two_zwq
    //   }},
    // {path:"/three_zwq",components:{
    //     foot:three_zwq
    //   }},
    // {path:"/five",components:{
    //     foot:five
    //   }},
   ,
    {path:"/balance",component:balance},
    {path:'/explain',component:explain},
    {path:"/info",component:info},
    // {path:"/discounts",component:discounts},
    {path:'/denglu',component:Denglu},
    {path:'/addMap',component:addMap}
    // {path:'/zhhu',component:Zhhu}
    ]
})
