<template>
  <el-row class="mb-4">
    <el-button type="primary" @click="isRegister">是否注册（无认证限制）</el-button>
    <el-button type="success" @click="myName">获取当前登录人信息（有认证限制）</el-button>
  </el-row>
</template>
  
<script lang="ts" setup>
import axios from "axios";
import { ElMessage } from 'element-plus'

function isRegister() {
  axios({
    method: 'get',
    url: 'http://localhost:8080/user/isRegister?username=LiBai'
  }).then(res => {
    console.log(res)
    ElMessage({
      message: JSON.stringify(res),
      type: 'success',
    })
  }).catch(err => {
    console.log(err)
    ElMessage.error(JSON.stringify(err))
  })
}

function myName() {
  axios.get('http://localhost:8080/user/myName', {
    withCredentials: true
  }).then(res => {
    console.log(res)
    ElMessage({
      message: JSON.stringify(res),
      type: 'success',
      duration: 2000
    })
  }).catch(err => {
    console.log(err)
    ElMessage.error(JSON.stringify(err))
  })
}
</script>
  