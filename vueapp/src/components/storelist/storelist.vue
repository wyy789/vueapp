<template>
    <div>
        <el-table :data="rows" style="width: 100%" max-height="500" class="tab">
            <el-table-column fixed prop="shopName" label="名称" width="100%">
            </el-table-column>
            <el-table-column prop="shopLicenceNum" label="营业执照号码" width="150">
            </el-table-column>
            <el-table-column prop="shopLicenceImg" label="营业执照图片" width="150">
            </el-table-column>
            <el-table-column prop="shopAdd" label="营业地址" width="150">
            </el-table-column>
            <el-table-column prop="shopLocation" label="定位" width="150">
            </el-table-column>
            <el-table-column prop="shopCorporate" label="法人" width="150">
            </el-table-column>
            <el-table-column prop="shopTel" label="联系电话" width="150">
            </el-table-column>
            <el-table-column prop="shopImg" label="头图" width="150">
            </el-table-column>
            <el-table-column prop="shopFeature" label="特色" width="150">
            </el-table-column>
            <el-table-column prop="status" label="状态">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="400">
                <template slot-scope="scope">
                    <el-button type="primary" round v-if="scope.row.status=='已审核'" @click.native.prevent="addCommodity(scope.row)" size="small">
                        添加商品
                    </el-button>
                    <el-button type="primary" round v-else disabled size="small">
                        添加商品
                    </el-button>
                    <el-button type="primary" round v-if="scope.row.status=='已审核'" @click="addService(scope.row)" size="small">
                        添加服务
                    </el-button>
                    <el-button type="primary" round v-else disabled size="small">
                        添加服务
                    </el-button>
                    <el-button type="primary" round v-if="scope.row.status=='已审核'" @click="SeeCommodity(scope.row)" size="small">
                        查看商品
                    </el-button>
                    <el-button type="primary" round v-if="scope.row.status=='已审核'" @click="SeeService(scope.row)" size="small">
                        查看服务
                    </el-button>

                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="商品" :visible.sync="dialogTableVisible">
            <el-table class="tab" ref="multipleTable" :data="goods" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" max-height="250">
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
                <el-table-column fixed prop="goodsName" label="名称" width="120">
                </el-table-column>
                <el-table-column prop="goodsType" label="品类" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsMaterial" label="材质或制作方法" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsCanFor" label="适用规格" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsOnlyFor" label="专属规格" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsSize" label="包装规格" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsTaste" label="口味" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsSpecial" label="特殊功用" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsRegion" label="产地" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsDate" label="出厂日期" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsTime" label="保质期" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsInrtro" label="特色说明" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsPrice" label="价格" show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="addGoods">提交</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
        </el-dialog>
        <el-dialog title="服务" :visible.sync="ServicedialogTableVisible">
            <el-table class="tab" ref="multipleTable" :data="service" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" max-height="250">
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
                <el-table-column fixed prop="serviceName" label="名称" width="120">
                </el-table-column>
                <el-table-column prop="serviceType" label="服务类别" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="serviceSchedule" label="排期" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="serviceCanFor" label="适用规格" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="serviceDetial" label="服务规格" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="serviceTime" label="耗时" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="servicePrice" label="价格" show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="submitService">提交</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
        </el-dialog>
        <el-dialog title="本店拥有商品" :visible.sync="SeeCommoditydialogTableVisible">
            <el-table class="tab" ref="multipleTable" :data="seeGoods" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" max-height="250">
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
                <el-table-column fixed prop="goodsName" label="名称" width="120">
                </el-table-column>
                <el-table-column prop="goodsType" label="品类" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsTaste" label="口味" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsInrtro" label="特色说明" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="goodsPrice" label="价格" show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="shelvesGoods">下架</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
        </el-dialog>
        <el-dialog title="本店拥有服务" :visible.sync="SeeServicedialogTableVisible">
            <el-table class="tab" ref="multipleTable" :data="seeService" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" max-height="250">
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
                <el-table-column fixed prop="serviceName" label="名称" width="120">
                </el-table-column>
                <el-table-column prop="serviceType" label="服务类别" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="serviceSchedule" label="排期" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="serviceTime" label="耗时" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="servicePrice" label="价格" show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button>下架</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
    mounted() {
        this.ansycgetStore();
    },
    computed: {
        ...mapState("storelist", [
            "curpage",
            "eachpage",
            "rows",
            "maxpage",
            "total",
            "goods",
            "service",
            "seeGoods",
            "seeService"
        ])
    },
    methods: {
        ...mapActions("storelist", [
            "ansycgetStore",
            "ansycgetGoods",
            "asyncPutGoods",
            "asyncgetService",
            "asyncPutService",
            "asyncSeeCommodity",
            "asyncSeeService",
            "asyncShelvesGoods"
        ]),
        ...mapMutations("storelist", ["getstoreList"]),
        addCommodity(rows) {
            // console.log(rows._id);
            this._id = rows._id;
            this.dialogTableVisible = true;
            this.ansycgetGoods();
            console.log(this.goods);
            console.log(rows);

        }, // 点击添加商品
        addService(rows) {
            this._id = rows._id;
            this.ServicedialogTableVisible = true;
            this.asyncgetService();
        }, //点击添加服务
        handleSelectionChange(val) {
            this.Arr = val;
        }, //获取选择的商品
        toggleSelection() {
            this.$refs.multipleTable.clearSelection();
        }, //取消选择
        addGoods() {
            console.log(this.Arr);
            this.asyncPutGoods({
                rows: this.Arr,
                id: this._id
            });
            this.Arr = [];
        }, //提交选择的商品
        submitService() {
            this.asyncPutService({
                rows: this.Arr,
                id: this._id
            });
            this.Arr = [];
        }, //提交选择的服务

        SeeCommodity(rows) {
            
            this._id = rows._id;
            this.SeeCommoditydialogTableVisible = true;
            this.asyncSeeCommodity(rows._id);
            console.log(rows);
        },
        SeeService(rows) {
            console.log(rows._id);
            this._id = rows._id;
            this.SeeServicedialogTableVisible = true;
            this.asyncSeeService(rows._id);
        },
        // shelvesGoods() {
        //     // console.log(this.Arr)
        //     this.asyncShelvesGoods({
        //         rows: this.Arr,
        //         id: this._id
        //     });
        //     this.asyncSeeCommodity(this._id);
        // },
        shelvesGoods() {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.asyncShelvesGoods({
                        rows: this.Arr,
                        id: this._id
                    });
                    console.log(this._id)
                    this.asyncSeeCommodity(this._id);
                    if (this.Arr.length>0) {
                        this.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                    } else {
                        this.$message({
                            type: "info",
                            message: "请选择数据!"
                        });
                    }
                    this.asyncSeeCommodity(this._id);
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }
    },
    data() {
        return {
            Arr: [],
            input: "",
            select: "",
            dialogTableVisible: false,
            ServicedialogTableVisible: false,
            SeeServicedialogTableVisible: false,
            SeeCommoditydialogTableVisible: false,
            _id: ""
        };
    }
};
</script>

<style>
.el-select .el-input {
    width: 130px;
}
.tab {
    margin-top: 20px;
}
.tab th > div {
    text-align: center;
    width: auto;
}
</style>

