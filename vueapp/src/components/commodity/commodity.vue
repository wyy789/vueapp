<template>
<div>
<div>
  <el-button slot="prepend" icon="el-icon-plus" style="margin-right:10px" @click="dialogFormVisible = true" ></el-button>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="商品名" :label-width="formLabelWidth">
      <el-input v-model="form.goodsName" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
  <el-form :model="form">
    <el-form-item label="品类" :label-width="formLabelWidth">
      <el-input v-model="form.goodsType" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
   <el-form :model="form">
    <el-form-item label="材质或制作方法" :label-width="formLabelWidth">
      <el-input v-model="form.goodsMaterial" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
   <el-form :model="form">
    <el-form-item label="适用规格" :label-width="formLabelWidth">
      <el-input v-model="form.goodsCanFor" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
   <el-form :model="form">
    <el-form-item label="专属规格" :label-width="formLabelWidth">
      <el-input v-model="form.goodsOnlyFor" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
   <el-form :model="form">
    <el-form-item label="包装规格" :label-width="formLabelWidth">
      <el-input v-model="form.goodsSize" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
   <el-form :model="form">
    <el-form-item label="口味" :label-width="formLabelWidth">
      <el-input v-model="form.goodsTaste" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
   <el-form :model="form">
    <el-form-item label="特殊功用" :label-width="formLabelWidth">
      <el-input v-model="form.goodsSpecial" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
   <el-form :model="form">
    <el-form-item label="产地" :label-width="formLabelWidth">
      <el-input v-model="form.goodsRegion" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
   <el-form :model="form">
    <el-form-item label="出厂日期" :label-width="formLabelWidth">
      <el-input v-model="form.goodsDate" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
    <el-form :model="form">
    <el-form-item label="保质期" :label-width="formLabelWidth">
      <el-input v-model="form.goodsTime" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
    <el-form :model="form">
    <el-form-item label="特色说明" :label-width="formLabelWidth">
      <el-input v-model="form.goodsInrtro" auto-complete="off"></el-input>
  </el-form-item>
   </el-form>
    <el-form :model="form">
    <el-form-item label="价格" :label-width="formLabelWidth">
      <el-input v-model="form.goodsPrice" auto-complete="off"></el-input>
  </el-form-item>
  </el-form>
    <el-form :model="form">
    <el-form-item label="图片" :label-width="formLabelWidth">
      <el-input v-model="form.goodsImg" auto-complete="off"></el-input>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
  <el-input placeholder="请输入内容"  class="input-with-select" style="width:600px">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="商品名" value="1"></el-option>
      <el-option label="产地" value="2"></el-option>
      <el-option label="价格" value="3"></el-option>
      <el-option label="品类" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
<el-table
    :data="rows"
    border
    style="width: 100%"
   >
    <el-table-column
      fixed
      prop="goodsName"
      label="商品名"
      width="120"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="goodsType"
      label="品类"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goodsMaterial"
      label="材质或制作方法"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goodsCanFor"
      label="适用规格"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goodsOnlyFor"
      label="专属规格"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goodsSize"
      label="包装规格"
      width="120"
      align="center">
    </el-table-column>
     <el-table-column
      prop="goodsTaste"
      label="口味"
      width="120"
      align="center">
    </el-table-column>
      <el-table-column
      prop="goodsSpecial"
      label="特殊功用"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goodsRegion"
      label="产地"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goodsDate"
      label="出厂日期"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goodsTime"
      label="保质期"
      width="120"
      align="center">
    </el-table-column>
     <el-table-column
      prop="goodsInrtro"
      label="特色说明"
      width="120"
      align="center">
    </el-table-column>
     <el-table-column
      prop="goodsPrice"
      label="价格"
      width="120"
      align="center">
    </el-table-column>
       <el-table-column
      prop="goodsImg"
      label="图片"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100"
      align="center">
      <template slot-scope="scope">
        <el-button   type="text" size="small"  @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button type="text" size="small"  @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="block" style="margin-left:20px;margin-top:10px;width:800px;">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="prePage"
      @next-click="nextPage"
      :current-page="curpage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="eachpage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <el-button type="text"  @click="homePage">首页</el-button>
    <el-button type="text" @click="lastPage">尾页</el-button>
  </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
   data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: '',
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
          goodsName: '',
          goodsType: '',
          goodsMaterial: '',
          goodsCanFor: '',
          goodsOnlyFor:'',
          goodsSize: '',
          goodsTaste: '',
          goodsSpecial: '',
          goodsRegion: '',
          goodsDate: '',
          goodsTime: '',
          goodsInrtro: '',
          goodsPrice: '',
          goodsImg: '',
          delivery: false
        },
        formLabelWidth: '120px'
    }
  },
  created() {
    this.asyncGetGoodsByPage();
  },
  computed: {
    ...mapState("commodity", ["curpage", "eachpage", "maxpage", "rows", "total"])
  },
  methods: {
    ...mapMutations("commodity", [
      "setCurPage",
      "setEachPage",
      "homePage",
      "lastPage",
      "prePage",
      "nextPage"
    ]),
    ...mapActions("commodity", ["asyncGetGoodsByPage", "asyncDleteData"]),
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.setEachPage(val);
      this.asyncGetGoodsByPage();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.setCurPage(val);
      this.asyncGetGoodsByPage();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.asyncDleteData(row._id);
      this.asyncGetGoodsByPage();
    },
    homePage() {
      this.setCurPage(1);
      this.asyncGetGoodsByPage();
    },
    lastPage() {
      this.setCurPage(this.maxpage);
      this.asyncGetGoodsByPage();
    }
  },
  
};
</script>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

