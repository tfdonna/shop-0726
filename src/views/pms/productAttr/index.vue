<template>
  <div>
    <div class="datalist">
      <div class="left">
        <i class="iconfont icon-order"></i> 商品类型数据列表
      </div>
      <div class="btn-box"><button class="addbtn" @click="goAdd">添加</button></div>
    </div>

    <el-table :data="attrList" border style="width: 95%; margin:auto;">
      <el-table-column prop="id" label="编号" width="100"> </el-table-column>
      <el-table-column prop="name" label="类型名称" width="300%">
      </el-table-column>
      <el-table-column prop="attribute_count" label="属性数量">
      </el-table-column>
      <el-table-column prop="param_count" label="参数数量"> </el-table-column>
      <el-table-column label="操作" width="180px">
        <template slot-scope="scope">
          <button class="delbtn" @click="delProductAttr(scope.row.id)">删除</button>
          <el-button class="editbtn" @click="handleClick(scope.row)">编辑</el-button>
          <!-- <el-dialog title="编辑类型" :visible.sync="handleClick">
          </el-dialog> -->
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
import {fetchProductAttrList, delProductAttr} from '../../../api/product'

export default {
    name: 'productAttr',
    data(){
      return{
        attrList: [],
        listQuery: {
          pageSize: 10,   //每页显示10条数据
          pageNum: 1   //默认当前页为第一页
        },
        total:0
      }
    },
    // created(){
    //   fetchProductAttrList().then(res => {
    //     this.attrList = res.data;
    //   })
    // },
    // methods:{
    //   handleClick(row){
    //     console.log(row);
    //   }
    // }

    methods:{
      handleClick(row){
        console.log(row);
        this.$router.push("/pms/updateAttr/" + row.id + "/" + row.name);
      },
      //获取列表数据
      getAttrList(){
        fetchProductAttrList(this.listQuery).then(res => {
          console.log(res);
          this.attrList = res.data;
          this.total = res.total;
        })
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
        this.getAttrList();
      },
      goAdd(){
        this.$router.push('/pms/productAttrAdd');
      },
      delProductAttr(id){
        this.$confirm('确认删除该品牌信息吗?', '提示', {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          delProductAttr({id: id}).then(res => {
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
    created() {
      this.getAttrList();
    },
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