<template>
  <div>
    
    <el-card class="box-card">
      <div class="clearfix" slot="header">
        <span><i class="iconfont icon-sousuo-copy"> </i> 筛选搜索</span>
        <el-button style="float: right; margin-left:10px" type="primary" size="small"
         @click="onSubmit">查询</el-button>
        <el-button style="float: right" type="button" size="small"
         @click="onReset">重置</el-button>
      </div>
      <div>
        <!-- :model 表单都绑定了哪些数据 -->
        <el-form ref="form" :model="listQuery" label-width="80px" class="demo-form-inline" :inline="true">
          <el-form-item label="商品名称">
            <el-input v-model="listQuery.name"></el-input>
          </el-form-item>
          <el-form-item label="货号">
            <el-input v-model="listQuery.product_sn"></el-input>
          </el-form-item>
          <el-form-item label="商品分类">
            <el-cascader v-model="listQuery.product_cate_id" :options="categoryOptions" @change="handleChange"></el-cascader>
          </el-form-item>
          <el-form-item label="商品品牌">
            <el-select select v-model="listQuery.brand_id" placeholder="请选择品牌">
              <el-option v-for="item in brandOptions" :label="item.name" :key="item.id" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上架状态">
            <el-select select v-model="listQuery.publish_status" placeholder="全部">
              <el-option label="未上架" value="0"></el-option>
              <el-option label="已上架" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态">
            <el-select select v-model="listQuery.verify_status" placeholder="全部">
              <el-option label="未审核" value="0"></el-option>
              <el-option label="已审核" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    
    <!--添加数据-->
    <div class="datalist">
      <div class="left">
        <i class="iconfont icon-order"></i> 数据列表
      </div>
      <div class="addbtn"><button><router-link to="/pms/productadd">添加</router-link></button></div>
    </div>
    
    <el-table :data="productlist" border style="width: 95%">
      
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column label="商品图片">
        <template slot-scope="scope">
          <img :src="scope.row.pic" width="100%"/>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column label="价格/货号">
        <template slot-scope="scope">
          <div>价格：¥{{scope.row.price}}</div>
          <div>货号：{{scope.row.product_sn}}</div>
        </template>
      </el-table-column>
      <el-table-column label="标签">
        <template slot-scope="scope">
            <div>上架：{{scope.row.publish_status | publish}}</div>
            <div>新品：{{scope.row.new_status | newstatus}}</div>
            <div>推荐：{{scope.row.recommand_status | recommand}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column prop="sale" label="销量"></el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
            {{ scope.row.verify_status | verify }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180px">
        <template slot-scope="scope">
          <el-button class="delbtn" @click="delProduct(scope.row.id)">删除</el-button>
          <button class="editbtn" @click="updateProduct(scope.row.id)">编辑</button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="listQuery.pageNum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="listQuery.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total" class="page">
    </el-pagination>
  </div>
</template>

<script>
//import axios from 'axios'
import {fetchProductList, fetchBrand, fetchCategory, delProduct} from '@/api/product.js'

export default {
    name: 'product',
    data(){
      return{
        productlist:[],
        //传给后套的参数
        listQuery: {
          pageSize: 10,   //每页显示10条数据
          pageNum: 1,   //默认当前页为第一页
          name: null, //商品名称
          product_sn: null, //商品货号
          verify_status: null, //审核状态
          publish_status: null, //上架状态
          brand_id: null,   //品牌id
          product_cate_id: null,   //分类的二级id
        },
        total:0,  //总条数
        brandOptions: [],  //品牌下拉列表数据
        categoryOptions: [],  //分类的下拉列表数据
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    //way2：使用钩子函数
    // created(){
    //   fetchProductList().then(res => {
    //     this.productlist = res.product;
    //   })
    // },

    //way1: 使用axios
    // mounted(){
    //   axios.get('http://www.yinruifang.cn/index/Api/product_list').then(res => {
    //     console.log(res);
    //     this.productlist = res.data.product;
    //   })
    // },
    
    filters:{
      verify(value){
        return value ? '已审核':'未审核';
      },
      publish(value){
        return value ? '是':'否';
      },
      recommand(value){
        return value ? '是':'否';
      },
      newstatus(value){
        return value ? '是':'否';
      },
    },

    methods:{
      //获取列表数据
      getProductList(){
        fetchProductList(this.listQuery).then(res => {
          // console.log(res);
          this.productlist = res.product;
          this.total = res.total;
        })
      },
      //修改每一个的数据条数
      handleSizeChange(val){
        console.log('次改页面条数的函数运行了', val);
        this.listQuery.pageSize = val;
        this.listQuery.pageNum = 1;
        //获取数据
        this.getProductList();
      },
      //修改当前页的页码
      handleCurrentChange(val){
        console.log('修改当前页的页码的函数运行了', val);
        //将页码信息保存在listQuery
        this.listQuery.pageNum = val;
        //获取数据
        this.getProductList();
      },
       onSubmit() {
        console.log('submit!');
        console.log(this.listQuery);
        this.getProductList();
      },
      onReset() {
        this.listQuery = {
          pageSize: 10, //默认每页显示10条
          pageNum: 1, //默认当前页是第一页
          name: null, //商品名称
          product_sn: null, //商品货号
        };
        //重新获取数据
        this.getProductList();
      },

      //获取品牌数据
      getBrand(){
        fetchBrand().then(res => {
          this.brandOptions = res.data;
        })
      },
      getCategory(){
        fetchCategory().then((res) => {
          console.log(res);
          var data = res.data;
          //重组数据
          data.forEach((item) => {
            let children = [];
            //添加分类的自己数据
            item.children.forEach((i) => {
              children.push({value: i.id, label: i.name});
            });
            this.categoryOptions.push({
              value: item.id,
              label: item.name,
              children: children
            })
          });
          console.log(this.categoryOptions);
        })
      },
      //如果级联下拉菜单切换选中时触发
      handleChange(value) {
        console.log("级联菜单切换了", value);
        if (value !== null && value.length === 2) {
          this.listQuery.product_category_id = value[1];
        }
      },

      updateProduct(id){
        console.log(id);
        this.$router.push("/pms/productupdate/"+id);
      },
      delProduct(id){
        this.$confirm('确认删除该品牌信息吗?', '提示', {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          delProduct({id: id}).then(res => {
            console.log(res);
            if(res.type == 'success'){
              this.$message({
                type: 'success',
                message: '删除成功',
                duration: 2000
              });
              this.getAttrList();
            }
          })
        }).catch(()=>{
          this.$message({
            type: 'info',
            message: '已经取消删除',
            duration: 2000
          })
        })
        
      }
    },
    //在钩子函数中获取数据
    created(){
      this.getProductList();
      this.getBrand();
      this.getCategory();
    }
}
</script>

<style lang="scss" scoped>
.list1{
  width: 95%;
  border-right: 1px solid #e4e5e6;
  border-left: 1px solid #e4e5e6;
  border-top: 1px solid #e4e5e6;
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;
}
.search{
  // color: #fff;
  background: #7498ae;
}
.list2{
  border-right: 1px solid #e4e5e6;
  border-left: 1px solid #e4e5e6;
  border-bottom: 1px solid #e4e5e6;
  width: 95%;
  height: 180px;
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;
  font-size: 13px;
  color: rgb(95, 93, 93);
}
.grid-content{
  margin: 10px 0 10px 0;
}
.grid-content input{
  height: 20px;
  border: 1px solid #e4e5e6;
  border-radius: 4px;
  padding-left: 5px;
  color: #b3b5b6;
}
.up-search{
  width: 100%;
  border-bottom: 1px solid #e4e5e6;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
}
.input-box{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.input-con{
  margin:10px 10px 10px 10px;
}
.el-table{
  text-align: center;
  margin: 10px auto;
}
.datalist{
  width: 95%;
  height: 40px;
  border: 1px solid #e4e5e6;
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.left{
  margin: 10px 10px 10px 10px;
}
.addbtn, .btn{
  position: absolute;
  right: 10px;
}
.addbtn button, .editbtn{
  border: 1px solid #e4e5e6;
  background: #fff;
  margin: auto 10px;
  padding: 5px 15px 5px 15px;
  border-radius: 4px;
}
.addbtn button:hover{
  background: #7498ae;
}
.addbtn .search{
  background: lightblue;
  color: #fff;
}

.delbtn{
  background: lightcoral;
  border: 1px solid #e4e5e6;
  color: #fff;
  padding: 5px 15px 5px 15px;
  margin: auto 10px;
  border-radius: 4px;
}
.page{
  margin-bottom: 20px;
}
</style>