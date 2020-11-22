<template>
    <div class="login_container">

        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/jingli.jpg" alt="">
            </div>

            <!-- 登录区域 -->                                                                        <!--ref 拿到实例对象-->
            <el-form  label-width="0px" class="login_form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">

                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
                </el-form-item>

                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //这是登录表单的数据绑定对象
            loginForm:{
                username:'',
                password:''
            },
            //这是表单的验证规则对象
            loginFormRules:{
                //验证用户名
                username:[
                    { required: true, message: '请输入名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                //验证密码
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        //表单重置事件
        resetLoginForm(){
            // console.log(this);
            this.$refs.loginFormRef.resetFields();
        },
        login(){
            this.$message({
                message: '登录成功',
                type: 'success'
            });
            this.$router.push("/home")
        }
    },
}
</script>

<style lang="less" scoped>
    .login_container{
        overflow: hidden;
        height: 100%;
        background-color: #2b4b6b;
    }

    .login_box{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width:450px;
        height: 300px;
        background-color: #fff;
        border-radius: 5px;

        .avatar_box{
            height: 100px;
            width: 100px;
            border:8px solid #eeeeee;
            border-radius: 50%;
            overflow:hidden;
            padding: 8px;
            position: absolute;
            left:50%;
            background-color: rgb(246, 246, 246);
            transform: translate(-50%,-50%);  /*横 纵*/


            img{
                width: 100%;
                height: 100%;
            }
        }

        .login_form{
            position: absolute;
            bottom: 0;
            width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            box-sizing: border-box; /*右padding必须*/
        }

        .btns{
            display: flex;
            justify-content: flex-end; /*居右对齐*/
        }
    }
</style>