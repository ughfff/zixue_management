<template>
        <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="" alt="">
                <span>自学后台管理系统</span>
                <el-button class="tuichu" type="info" @click="exit2">退出</el-button>
            </div>
        </el-header>

        <!-- 页面主体 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse?'64px':'200px'">
                <!-- 折叠展开按钮 -->
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <!-- 侧边栏菜单 -->
                <el-menu background-color="#347499" text-color="#fff" active-text-color="#409BFF" 
                    v-bind:unique-opened="true" :collapse="isCollapse" :collapse-transition="false" 
                    :router="true" default-active="/yhgl">  <!--默认以二级菜单的index值作为path进行路由跳转-->
                
                    <!-- 一级菜单 -->  <!--每个菜单的index值不一样，点哪个就展开哪个 index只接收字符串，+''可转为字符串-->
                    <el-submenu v-bind:index="item.id+''" v-for="item in menulist" :key="item.id">
                        <!-- 一级菜单的模板 -->
                        <template slot="title">
                            <!-- 图标 -->  <!--根据一级菜单的id循环图标-->
                            <i v-bind:class="iconObj[item.id]"></i>
                            <!-- 标题 -->
                            <span>{{item.cname}}</span>
                        </template>

                        <!-- 二级菜单 -->
                        <el-menu-item v-bind:index="'/'+subItem.path" 
                        v-for="subItem in item.children" :key="subItem.id"
                        >
                            <!-- 图标 -->
                            <i class="el-icon-menu"></i>
                            <!-- 标题 -->
                            <span>{{subItem.sname}}</span>
                        </el-menu-item>

                    </el-submenu>

                </el-menu>
            </el-aside>
            <!-- 右侧主体 -->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>

        </el-container>
</template>


<style scoped>
.home-container{
    height: 100%;
}

.el-header{
    background-color: #373d41;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 20px;
}

.el-aside{
    background-color: #347499;
}

.el-menu{
    border-right:none!important;
}

.el-main {
    background-color: #eaedf1;
}

.iconfont{
    margin-right: 10px;
}

.toggle-button{
    height: 20px;
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    letter-spacing: 0.2em;
    cursor: pointer;
    background-color: #315d77;
}

.tuichu{
    height: 32px;
    line-height: 6px;
    position: absolute;
    right: 20px;
    top: 14px;
}

</style>

<script>
    export default {

        data(){
            return{
                menulist:[
                    {
                        id:1,
                        cname:"用户管理",
                        path:"users",
                        children:[
                            { id:11, sname:"用户列表", path:"yhgl" }
                        ]
                    },
                    {
                        id:2,
                        cname:"权限管理",
                        path:"users",
                        children:[
                            { id:12, sname:"角色列表", path:"jslb" },
                            { id:13, sname:"权限列表", path:"qxlb" }
                        ]
                    },
                    {
                        id:3,
                        cname:"商品管理",
                        path:"users",
                        children:[
                            { id:14, sname:"商品列表", path:"splb" },
                            { id:15, sname:"分类参数", path:"flcs" },
                            { id:16, sname:"商品分类", path:"spfl" },
                        ]
                    },
                    {
                        id:4,
                        cname:"订单管理",
                        path:"users",
                        children:[
                            { id:11, sname:"管理1" },
                            { id:12, sname:"管理2" },
                            { id:13, sname:"管理3" },
                        ]
                    },
                    {
                        id:5,
                        cname:"数据统计",
                        path:"users",
                        children:[
                            { id:11, sname:"管理1" },
                            { id:12, sname:"管理2" },
                            { id:13, sname:"管理3" },
                        ]
                    },
                ],
                
                iconObj:{
                    '1':'el-icon-s-custom', //一级菜单的id值
                    '2':'el-icon-info',
                    '3':'el-icon-s-goods',
                    '4':'el-icon-s-order',
                    '5':'el-icon-s-data',
                },

                isCollapse:false


            }
        },

        methods: {
            // 点击按钮，展开与折叠菜单
            toggleCollapse(){
                this.isCollapse = !this.isCollapse
            },
            exit2(){
            this.$message({
                message: '退出成功',
                type: 'success'
            });
            this.$router.push("/login")
            }

        },



    }
</script>