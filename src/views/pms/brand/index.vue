<template>
  <div>
    <div class="datalist">
      <div class="left">
        <i class="iconfont icon-order"></i> 品牌管理列表
      </div>
      <div class="btn-box"><button class="addbtn" @click="goAdd">添加</button></div>
    </div>

    <el-table :data="brandList" border style="width: 95%; margin:auto;">
      <el-table-column prop="id" label="品牌id" width="100"> </el-table-column>
      <el-table-column prop="name" label="品牌名称" >
      </el-table-column>
      <el-table-column prop="first_letter" label="品牌首字母"> </el-table-column>
      <el-table-column prop="sort" label="排序"> </el-table-column>
      <el-table-column label="品牌制造商">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.factory_status"
            :active-value="1"
            :inactive-value="0">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="是否显示">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.show_status"
            :active-value="1"
            :inactive-value="0">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="相关">
        <template slot-scope="scope">
          <div>商品：{{scope.row.product_count}}</div>
          <div>评价：{{scope.row.product_comment_count}}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180px">
        <template slot-scope="scope">
            <el-button class="delbtn" @click="delbrand(scope.row.id)">删除</el-button>
          <button class="editbtn" @click="updatebrand(scope.row.id)">编辑</button>
        </template>
      </el-table-column>
    </el-table>
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
import {fetchProductBrand, delbrand} from "../../../api/product"
export default {
    name: 'brand',
    data(){
      return{
        brandList:[],
        listQuery: {
          pageSize: 10,   //每页显示10条数据
          pageNum: 1   //默认当前页为第一页
        },
        total:0  //总条数
      }
    },
    methods:{
       async getBrandList(){
         let res = await fetchProductBrand(this.listQuery);
         console.log(res);
         this.brandList = res.data;
         this.total = res.total;
      },
      //修改每一个的数据条数
      handleSizeChange(val){
        console.log('次改页面条数的函数运行了', val);
        this.listQuery.pageSize = val;
        this.listQuery.pageNum = 1;
        //获取数据
        this.getBrandList();
      },
      //修改当前页的页码
      handleCurrentChange(val){
        console.log('修改当前页的页码的函数运行了', val);
        //将页码信息保存在listQuery
        this.listQuery.pageNum = val;
        //获取数据
        this.getBrandList();
      },

      //添加品牌信息
      goAdd(){
        this.$router.push('/pms/brandadd');
      },

      delbrand(id){
        this.$confirm('确认删除该品牌信息吗?', '提示', {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          delbrand({id: id}).then(res => {
            console.log(res);
            if(res.type == 'success'){
              this.$message({
                type: 'success',
                message: '删除成功',
                duration: 2000
              });
              this.getBrandList();
            }
          })
        }).catch(()=>{
          this.$message({
            type: 'info',
            message: '已经取消删除',
            duration: 2000
          })
        })
        
      },
      updatebrand(id){
        this.$router.push('/pms/updatebrand/'+ id)
      }

    },
    //在钩子函数中获取数据
    mounted(){
      this.getBrandList();
    }
}
</script>


<style lang="scss" scoped>
.datalist{
  width: 95%;
  height: 50px;
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
.btn-box{
  position: absolute;
  right: 10px;
}
.editbtn, .addbtn{
  background: #fff;
  border: 1px solid #e4e5e6;
  padding: 5px 15px 5px 15px;
  border-radius: 4px;
}
.delbtn{
  background: lightcoral;
  border: 1px solid #e4e5e6;
  color: #fff;
  padding: 5px 15px 5px 15px;
  margin: auto 10px;
  border-radius: 4px;
}
</style>