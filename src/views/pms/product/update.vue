<template>
  <div>
      <el-card>
          修改商品
      </el-card>
      <div class="formbox">
        <el-form :model="listQuery" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm form" >
        <el-form-item label="商品分类:" prop="product_category_id">
          <el-cascader
            v-model="listQuery.product_category_id"
            :options="categoryOptions"
            @change="handleChange"
            class="position"></el-cascader>
        </el-form-item>
        <el-form-item label="商品名称:" prop="name">
          <el-input v-model="listQuery.name"></el-input>
        </el-form-item>
        <el-form-item label="副标题:" prop="sub_title">
          <el-input v-model="listQuery.sub_title"></el-input>
        </el-form-item>
        <el-form-item label="商品品牌:" prop="brand_id">
          <el-select v-model="listQuery.brand_id" placeholder="商品品牌" class="input-width position">
            <el-option v-for="item in brandOptions" :label="item.name" :value="item.id" :key="item.id" ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品介绍:" prop="description">
          <el-input type="textarea" v-model="listQuery.description"></el-input>
        </el-form-item>
        <el-form-item label="图片链接地址:" prop="pic">
          <el-input v-model="listQuery.pic"></el-input>
        </el-form-item>
        <el-form-item label="商品货号:" prop="product_sn">
          <el-input v-model="listQuery.product_sn" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="商品售价:" prop="price">
          <el-input v-model="listQuery.price" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="市场价:" prop="original_price">
          <el-input
            v-model="listQuery.original_price"
            class="input-width"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品库存:" prop="stock">
          <el-input v-model="listQuery.stock" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="计量单位:" prop="unit">
          <el-input v-model="listQuery.unit" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="商品重量:" prop="weight">
          <el-input v-model="listQuery.weight" class="input-width"></el-input>克
        </el-form-item>
        <el-form-item label="排序:" prop="sort">
          <el-input v-model="listQuery.sort" class="input-width"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">更新修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {fetchBrand, fetchCategory, updateProduct, getProductOne} from '@/api/product'
export default {
    name: 'productupdate',
    data(){
        return{
          listQuery: {
            brand_id: null, //商品品牌id
            brand_name: "", //商品品牌名称
            delete_status: 0, //删除标志位，默认填0，表示未删除
            description: "", //商品介绍
            name: "", //商品名称
            original_price: 0, //市场价
            pic: "", //商品图片的url地址
            price: 0, //商品售价
            product_category_id: null, //分类id
            product_category_name: "", //分类名称
            product_sn: "", //商品货号
            sort: 0, //排序
            stock: 0, //商品库存
            sub_title: "", //副标题
            unit: "", //计量单位
            weight: 0, //商品重量
            sale: 0, //商品销量
            publish_status: 0, //上架
            recommand_status: 0,
            new_status: 0,
            verify_status: 0,
            },
            //表单验证
            rules:{
            // product_category_id: [{required: true, message: '请选择商品分类', triggle: 'blur'}],
            name: [
                {required: true, message: '请输入商品名称', triggle: 'blur'},
                {min:3, max:100, message: '长度在3-100个字符之间', triggle: 'blur'}
                ],
            sub_title: [{required: true, message: '请输入商品副标题', triggle: 'blur'}],
            brand_name: [{required: true, message: '请选择商品品牌', triggle: 'blur'}],
            description: [{required: true, message: '请输入商品介绍', triggle: 'blur'}],
            pic: [{required: true, message: '请输入商品的图片地址', triggle: 'blur'}],
            },
            brandOptions: [],
            categoryOptions: []
        }
    },
    created() {
        console.log(this.$route.params.id);
        getProductOne({ id: this.$route.params.id }).then((res) => {
            console.log(res);
            this.listQuery = res.data;
        });
        this.getBrand();
        this.getCategory();
    },
    methods: {
        getBrand() {
            fetchBrand().then((res) => {
            console.log(res);
            this.brandOptions = res.data;
            });
        },
        getCategory() {
            fetchCategory().then((res) => {
            console.log(res);
            var data = res.data;
            //重组数据
            data.forEach((item) => {
                let children = [];
                //添加分类的子级数据
                item.children.forEach((i) => {
                children.push({ value: i.id, label: i.name });
                });
                this.categoryOptions.push({
                value: item.id,
                label: item.name,
                children: children,
                });
            });
            console.log(this.categoryOptions);
            });
        },
        handleChange(value) {
            console.log("级联菜单切换了", value);
            if (value !== null && value.length === 2) {
                this.listQuery.product_category_id = value[1];
            }
            console.log(this.listQuery.product_category_id);
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.brandOptions.forEach((i) => {
                        if (i.id == this.listQuery.brand_id) {
                        this.listQuery.brand_name = i.name;
                        }
                    });
                    this.categoryOptions.forEach((item) => {
                        item.children.forEach((i) => {
                        if (i.value == this.listQuery.product_category_id) {
                            this.listQuery.product_category_name = i.label;
                        }
                        });
                    });
                    console.log('表单验证通过', this.listQuery);
                    updateProduct(this.listQuery).then(res => {
                        if(res.msg == '修改成功'){
                            this.$message({
                                message: '成功修改商品',
                                duration: 1000,
                                type: 'success'
                            });
                            this.$router.push('/pms/product');
                        }
                    })
                }else{
                    console.log('表单验证没通过');
                    return false;
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.form{
  margin-top: 20px;
}
.modify{
  width: 50%;
}
.position{
  float: left;
}
.input-width{
  width: 70%;
  float: left;
}

</style>