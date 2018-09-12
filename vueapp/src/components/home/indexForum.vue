<template>
    <el-container>
        <el-header style="height:100px;">爱宠邦平台管理系统</el-header>
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                            <el-menu-item index="1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">用户管理</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <i class="el-icon-document"></i>
                                <span slot="title">门店管理</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <i class="el-icon-setting"></i>
                                <span slot="title">宠主管理</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
<style>
.el-header {
    color: #fff;
    text-align: center;
    background-color: #409eff;
    line-height: 100px;
    font-size: 24px;
}

.el-aside {
    text-align: center;
}

.el-main {
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}
</style>

