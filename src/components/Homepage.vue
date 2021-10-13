<template>
  <div>
      

              
  </div>
</template>

<script>
export default {
    name: 'Homepage',
    data(){
      return{
        orderArr:[
          {
          id: 1,
          name: "今日订单总数",
          price: "200",
          img: require("../assets/images/home_order.png"),
        },
        {
          id: 2,
          name: "今日销售总额",
          price: "￥5000",
          img: require("../assets/images/home_today_amount.png"),
        },
        {
          id: 3,
          name: "昨日订单总数",
          price: "￥3000",
          img: require("../assets/images/home_yesterday_amount.png"),
        }
        ]
      }
    }
}
</script>

