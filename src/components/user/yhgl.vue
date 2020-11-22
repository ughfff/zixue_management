<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片 -->
        <el-card>
            
            <!-- gutter是每一项之间的间隔 -->
            <el-row :gutter="20">
                <el-col :span="7">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>

                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>

            <!-- 用户列表区域 -->
                                <!-- border加竖线 -->
            <el-table :data="tableData" border stripe>
                <el-table-column type="index" label=""></el-table-column>
                <el-table-column label="姓名" prop="username"></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column label="电话" prop="mobile"></el-table-column>
                <el-table-column label="角色" prop="role_name"></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <!-- 通过scope.row可以访问tableData的数据 -->
                        <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#afafaf">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="160px">
                    <template slot-scope="scope">
                        <el-tooltip class="item" effect="dark" content="编辑" placement="top" :enterable="false">
                            <el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
                        </el-tooltip>
                        <!-- el-tooltip 按钮提示  effect背景色  -->
                        <el-tooltip class="item" effect="dark" content="修改角色" placement="top" :enterable="false">
                            <el-button type="warning" icon="el-icon-setting" circle size="mini"></el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="删除" placement="top" :enterable="false">
                            <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>

            </el-table>

            <!-- 分页区域 -->
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1, 2, 3, 4,5]"
            :page-size="8"
            layout="total, sizes, prev, pager, next, jumper"
            :total="8">
            <!-- size-change监听 -->
            </el-pagination>


        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData: 
            [
                {
                    username:"张三",
                    email:"zhangsan@168.com",
                    mobile:"82345967",
                    role_name:"超级管理员",
                    mg_state:true
                },
                {
                    username:"李四",
                    email:"lisi@168.com",
                    mobile:"82345967",
                    role_name:"普通管理员1",
                    mg_state:false
                },
                {
                    username:"王五",
                    email:"wangwu@168.com",
                    mobile:"82345967",
                    role_name:"普通管理员2",
                    mg_state:true
                },
                {
                    username:"赵六",
                    email:"zhaoliu@168.com",
                    mobile:"82345967",
                    role_name:"普通管理员3",
                    mg_state:false
                },
                {
                    username:"洪七",
                    email:"hongqi@168.com",
                    mobile:"82345967",
                    role_name:"普通管理员3",
                    mg_state:false
                },
                {
                    username:"兔八",
                    email:"tuba@168.com",
                    mobile:"82345967",
                    role_name:"普通管理员3",
                    mg_state:false
                }
            ]
            
        }
    },
    created(){

    },

    methods: {
        //监听pagesize的改变
        handleSizeChange(newSize){
            // alert("")
        },
        //监听 页码值得改变
        handleCurrentChange(newPage){
            alert("当前是"+newPage+"页")
        }
    },
}
</script>

<style scoped>
.aaa{
    background-color: #919191;
}


</style>