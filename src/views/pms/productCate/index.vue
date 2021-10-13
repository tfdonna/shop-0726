<template>
  <div>
    <div class="datalist">
      <div class="left">
        <i class="iconfont icon-order"></i> 数据列表
      </div>
      <div class="btn-box">
        <el-button class="addbtn" @click="goAdd">添加</el-button>
        <el-button class="addbtn" v-if="parent_id != 0" @click="goParentLevel">返回上一级</el-button>
      </div>
    </div>

    <el-table :data="cateList" border style="width: 95%; margin: auto;">
      <el-table-column prop="id" label="编号"> </el-table-column>
      <el-table-column prop="name" label="类型名称" width="200%">
      </el-table-column>
      <el-table-column label="级别">
        <template slot-scope="scope">
          {{ scope.row.level | levelF }}
        </template>
      </el-table-column>
      <el-table-column prop="product_count" label="商品数量"> </el-table-column>
      <el-table-column prop="product_unit" label="数量单位"> </el-table-column>
      <el-table-column label="是否显示">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.show_status"
            :active-value="1"
            :inactive-value="0">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="设置">
        <template slot-scope="scope">
          <button class="setbtn" @click="showNextLevel(scope.row.id)" :disabled='scope.row.level != 0'>查看下级</button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180px">
        <template slot-scope="scope">
          <button class="delbtn" @click="delProductCate(scope.row.id)">删除</button>
          <button class="editbtn" @click="updateCate(scope.row.id)">编辑</button>
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
import {fetchProductCateList, delProductCate} from '../../../api/product'
export default {
    name: 'productCate',
    data(){
      return{
        cateList:[],
        listQuery: {
          pageSize: 10,   //每页显示10条数据
          pageNum: 1   //默认当前页为第一页
        },
        total:0,
        parent_id: 0
      }
    },
    // created(){
    //   fetchProductCateList().then(res => {
    //     console.log(res);
    //     this.cateList = res.data;
    //   })
    // },

    //async await  generator 的语法糖，可以将异步操作转同步操作
    // 
    
    methods:{
      //获取列表数据
      getCatetList: async function (){
        var res = await fetchProductCateList(this.listQuery, this.parent_id);
        this.cateList = res.data;
        this.total = res.total;

      },
      //修改每一个的数据条数
      handleSizeChange(val){
        console.log('次改页面条数的函数运行了', val);
        this.listQuery.pageSize = val;
        this.listQuery.pageNum = 1;
        //获取数据
        this.getCatetList();
      },
      //修改当前页的页码
      handleCurrentChange(val){
        console.log('修改当前页的页码的函数运行了', val);
        //将页码信息保存在listQuery
        this.listQuery.pageNum = val;
        //获取数据
        this.getCatetList();
      },
      //跳转到添加页面
      goAdd(){
        this.$router.push('/pms/productCateAdd');
      },
      //查看下级
      showNextLevel(id){
        this.parent_id = id;
        this.getCatetList();   //重新获取数据
      },
      //返回上一级
      goParentLevel(){
        this.parent_id = 0;
        this.getCatetList();
      },
      delProductCate(id){
        this.$confirm('确认删除该品牌信息吗?', '提示', {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          delProductCate({id: id}).then(res => {
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
      },
      updateCate(id){
        
        this.$router.push('/pms/updateCate/'+id);
      }
    },
    created() {
      this.getCatetList();
    },
    filters:{
      levelF(value){
        return value ? '二级':'一级';
      }
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
.setbtn, .editbtn, .addbtn{
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
.el-table{
  text-align: center;
  margin: 10px auto;
}
.page{
  margin: 10px 0 20px 0;
}

</style>