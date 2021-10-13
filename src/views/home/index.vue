<template>
  <div>
    <el-container>
      <el-container>
          <el-main>
              <el-row :gutter="20">
                <el-col :span="8" v-for="item in orderArr" :key="item.id">
                    <div class="grid-content bg-purple">
                    <div class="nav-icon"><img :src="item.img" /></div>
                    <div class="main1">
                        {{item.name}}
                        <div class="sum">{{item.price}}</div>
                    </div>                 
                    </div>
                </el-col>
              </el-row>
              <!--待处理事务-->
              <el-row :gutter="20">
                <el-col :span="24">
                  <div class="grid-content bg-purple main2">
                    <div class="title">待处理事务</div>
                    <div class="detail">
                      <div class="content">
                        <div><span class="left">待付款订单</span>    <span class="right">(10)</span></div>
                        <div><span class="left">待发货订单</span>    <span class="right">(30)</span></div>
                        <div><span class="left">已发货订单</span>    <span class="right">(12)</span></div>
                      </div>
                      <div class="content">
                        <div><span class="left">已完成订单</span>    <span class="right">(5)</span></div>
                        <div><span class="left">新缺货登记 </span>   <span class="right">(6)</span></div>
                        <div><span class="left">带处理退货订单</span>    <span class="right">(9)</span></div>
                      </div>
                      <div class="content">
                        <div><span class="left">待确认收货订单</span>    <span class="right">(20)</span></div>
                        <div><span class="left">待处理退款申请</span>    <span class="right">(8)</span></div>
                        <div><span class="left">广告位即将到期</span>    <span class="right">(10)</span></div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!--商品总览     用户总览-->
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="grid-content bg-purple main2">
                    <div class="title">商品总览</div>
                    <div class="statistics" v-for="item in shangpinArr" :key="item.id">
                      <div class="thing"><div class="num1">{{item.num}}</div><div class="state">{{item.name}}</div></div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple main2">
                    <div class="title">用户总览</div>
                    <div class="statistics" v-for="item in yonghuArr" :key="item.id">
                      <div class="thing"><div class="num1">{{item.num}}</div><div class="state">{{item.name}}</div></div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!--订单统计-->
              <el-row :gutter="20">
                <el-col :span="24">
                  <div class="grid-content bg-purple main2">
                    <div class="title">订单统计</div>
                    <div class="detail">
                      <div class="c1">
                        <div class="con1" v-for="item in tongjiArr" :key="item.id">
                          <div class="til">{{item.name}}</div>
                          <div class="num">{{item.num}}</div>
                          <div class="tongji"><span :class="item.type? '10':'-10'">{{item.type ? '+10':'-10'}}%</span> <span class="text">{{item.dec}}</span></div>
                        </div>
                      </div>
                      <div class="c2">
                        <div id="mycharts" class="mycharts"></div>
                        <div id="mypie" class="mypie"></div>
                        <div id="myline" class="myline"></div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
    name: 'home',
    data(){
      return{
        orderArr:[
          {
          id: 1,
          name: "今日订单总数",
          price: "200",
          img: require("../../assets/images/home_order.png"),
        },
        {
          id: 2,
          name: "今日销售总额",
          price: "￥5000",
          img: require("../../assets/images/home_today_amount.png"),
        },
        {
          id: 3,
          name: "昨日订单总数",
          price: "￥3000",
          img: require("../../assets/images/home_yesterday_amount.png"),
        }
        ],
        //待处理事务
        daichuliArr: [
          { id: 1, name: "代付款订单", num: 10 },
          { id: 2, name: "已完成订单", num: 5 },
          { id: 3, name: "待确认收货订单", num: 20 },
          { id: 4, name: "代发货订单", num: 30 },
          { id: 5, name: "新缺货登记", num: 6 },
          { id: 6, name: "待处理退款申请", num: 8 },
          { id: 7, name: "已发货订单", num: 12 },
          { id: 8, name: "待处理退货订单", num: 9 },
          { id: 9, name: "广告位即将到期", num: 10 },
        ],
        //商品总览
        shangpinArr: [
          { id: 1, name: "已下架", num: 100 },
          { id: 2, name: "已上架", num: 400 },
          { id: 3, name: "库存紧张", num: 50 },
          { id: 4, name: "全部商品", num: 500 },
        ],
        //用户总览
        yonghuArr: [
          { id: 1, name: "今日新增", num: 100 },
          { id: 2, name: "昨日新增", num: 200 },
          { id: 3, name: "本月新增", num: 1000 },
          { id: 4, name: "会员总数", num: 5000 },
        ],
        //订单统计
        tongjiArr: [
        { id: 1, name: "本月订单统计", num: 1000, type: 10, dec: "同比上月" },
        { id: 2, name: "本周订单总数", num: 1000, type: -10, dec: "同比上周" },
        { id: 3, name: "本月销售总额", num: 100000, type: 10, dec: "同比上月" },
        { id: 4, name: "本月销售", num: 50000, type: -10, dec: "同比上周" },
        ],
        //图表数据
        option: {
          //图表数据
          //x轴数据
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          //y轴
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [400, 200, 150, 80, 70, 110, 200],
              type: "bar",
              showBackground: true,
              backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)",
              }
            }
          ],
        },
        option1: {
          title: {
            text: "商品总览",
            left: "center",
          },
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              data: [
                // {value:400, name:'"Mon"'}, 
                // {value:200, name:'Tue'}, 
                // {value:150, name:'Wed'}, 
                // {value:80, name:'Thu'}, 
                // {value:70, name:'Fri'}, 
                // {value:110, name:'Sat'}, 
                // {value:200, name:'Sun'}
              ],
              type: "pie",
              radius: '50%',
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ],
        },
        option2: {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          //y轴
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [400, 200, 150, 80, 70, 110, 200],
              type: "line",
            }
          ],
        },
      }
    },
    mounted(){
      console.log(this.$echarts);
      let mycharts = this.$echarts.init(document.getElementById('mycharts'));
      mycharts.setOption(this.option);
      // let mypie = this.$echarts.init(document.getElementById('mypie'));
      // mypie.setOption(this.option1);
      let myline = this.$echarts.init(document.getElementById('myline'));
      myline.setOption(this.option2);
      this.pmsEcharts();
    },
    methods:{
      pmsEcharts(){
        let mypie = this.$echarts.init(document.getElementById('mypie'));
        var data = [];
        this.shangpinArr.forEach((item) => {
          data.push({value:item.num, name:item.name});
        });
        this.option1.series[0].data = data;
        mypie.setOption(this.option1)
      }
    }
}
</script>

<style lang="scss">
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .menu{
    //background: #D3DCE6;
    background-color:transparent;
    border: none;
  }


  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    // background: #7498ae;
    border: 1px solid #7498ae;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
    justify-content: center;
    align-content: center;
    display: flex;
    align-items: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .nav-icon{
    display: inline-block;
    margin: 10px 0 10px 0;
  }
  .nav-icon img{
    width: 50%;
  }
  .main1{
    color: grey;
    display: inline-block;
    // margin-left: 5px;
  }
  .icon{
    color: rgb(81, 166, 247);
    font-size: 50px;
  }
  .sum{
    color: #333;
  }
  
  .main2{
    position: relative;
    width: 100%;
    background: linear-gradient(to bottom, #e5e9f2 0%, #e5e9f2 40px, #fff 41px, #fff 100%);
  }
  .title{
    color: #555;
    font-weight: 550;
    display: flex;
    align-items: center;
    height: 38px;
    width: 99%;
    top: 0;
    left: 0;
    position: absolute;
    padding-left: 10px;
  }
  .detail{
    background: #fff;
    display: flex;
    margin-top: 50px;
    margin-bottom: 10px;
    width: 100%;
  }
  .content{
    color: grey;
    width: 33%;
    margin: 0 5px 0 5px;
    position: relative;
    font-size: 14px;
  }
  .content div{
    border-bottom: 1px solid silver;
    width: 90%;
    margin-top: 5px;
    padding-bottom: 7px;
  }
  .left{
    left: 0;
    position: absolute;
    padding-left: 5px;
  }
  .right{
    margin-left: 85%;
    color: salmon;
  }
  .c1{
    width: 200px;
    border-right: 1px solid #7498ae;
  }
  .con1{
    position: relative;
    width: 100px;
    margin-left:15px;
  }
  .con1 div{
    float: left;
    margin-top: 5px;
  }
  .til{
    color: grey;
    font-size: 13px;
  }
  .num{
    color: #333;
    font-size: 20px;
  }
  .tongji{
    font-size: 10px;
    margin-bottom: 10px;
    color: silver;
  }
  .up{
    color: green;
  }
  .down{
    color: salmon;
  }
  .statistics{
    display: flex;
    margin-top: 50px;
    margin-bottom: 10px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }
  .num1{
    color: salmon;
    font-size: 20px;
  }
  .state{
    color: #777;
    font-size: 13px;
    margin-top: 5px;
  }
  .mycharts, .mypie, .myline{
    height: 370px;
    width: 370px;
    //border: 1px solid salmon;
    margin-left: 20px;
    float: left;
  }
</style>