<template>
<div>
   <div>
       <el-button style="width:80px;" type="primary" plain @click="dialogFormVisible = true">增加</el-button>
  <el-input placeholder="请输入内容" style="width:500px;" v-model="input5" class="input-with-select">
    <el-select style="width:110px;" v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>

  <el-table class="table" 
  :data="rows"
    border
    style="width: 100%"
    
    >
    <el-table-column 
      align="center"
      fixed
      prop="memberAcount"
      label="昵称"
      width="150">
    </el-table-column>
    <el-table-column
      align="center"
      prop="memberName"
      label="真实姓名"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      prop="memberPhone"
      label="电话号码"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      prop="memberCard"
      label="会员卡"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      prop="memberAdd"
      label="送货地址"
      width="300">
    </el-table-column>
  
    <el-table-column
      align="center"
      prop="memberArea"
      label="区域"
      width="120">
    </el-table-column>
    <el-table-column
     align="center"
      prop="memberPoint"
      label="积分"
      width="120">
    </el-table-column>
      <el-table-column
      align="center"
      prop="memberImg"
      label="头像"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      label="操作"
      width="120">
      <template slot-scope="scope" >
        <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
      </template>
    </el-table-column>
   
    
  </el-table>
  <el-pagination
        @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :size-change="eachPage"
      :current-change="curPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

   <el-dialog title="新增宠主"  :visible.sync="dialogFormVisible">
  <el-form :model="form" style="margin-left: 150px" >
    <el-form-item label="昵称" style="width:500px;" :label-width="formLabelWidth">
      <el-input v-model="form.acount"  auto-complete="off" ></el-input>
    </el-form-item>
    <el-form-item label="真实姓名" style="width:500px" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="电话号码"  style="width:500px" :label-width="formLabelWidth">
        <el-input v-model="form.phone" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="会员卡" style="width:500px" :label-width="formLabelWidth">
        <el-input v-model="form.card" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="送货地址" style="width:500px" :label-width="formLabelWidth">
        <el-input v-model="form.add" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="头像"  style="width:500px" :label-width="formLabelWidth">
       <!-- <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload> -->
    </el-form-item>
     <el-form-item label="区域" style="width:500px" :label-width="formLabelWidth">
        <el-input v-model="form.area" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="积分" style="width:500px" :label-width="formLabelWidth">
        <el-input v-model="form.point" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

</div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {

  name: "spoilmanagement",



  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "80px",
      input3: "",
      input4: "",
      input5: "",
      select: "",
      form: {
        name: "",
        acount: "",
        phone: "",
        card: "",
        add: "",
        img: "",
        area: "",
        point: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },

  created() {
    this.asyncSpoilmanagementByPage();
  },
  computed: {
    ...mapState("spoilmanagement", [
      "curPage",
      "eachPage",
      "maxPage",
      "total",
      "rows"
    ])
  },
  watch: {
    curPage() {
      this.asyncSpoilmanagementByPage();
    },
    eachPage() {
      this.asyncSpoilmanagementByPage();
    }
  },
  methods: {
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
      this.setCurPage(val);
    },
   
    ...mapMutations("spoilmanagement", ["setCurPage", "setEachPage"]),
    ...mapActions("spoilmanagement", ["asyncSpoilmanagementByPage","asyncDeleteSpoilmanagement"]),
    // 首页
     deleteClick(data) {
        //  console.log(data)
      this.asyncDeleteSpoilmanagement(data._id)
      this.asyncSpoilmanagementByPage()
    },

    firstPage() {
      this.asyncSpoilmanagementByPage({ curPage: 1 });
    },
    // 尾页
    lastPage() {
      this.asyncSpoilmanagementByPage({ curPage: this.maxPage });
    }
  }
};
</script>

<style scoped>
.table {
  /* height: 500px; */
  line-height: 100px;
}
.el-select .el-input {
  width: 200px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input {
  width: 500px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
