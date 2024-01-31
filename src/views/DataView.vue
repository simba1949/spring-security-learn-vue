<template>
  <el-row class="mb-4">
    <el-button type="primary" @click="isRegister">是否注册（无认证限制）</el-button>
    <el-button type="success" @click="myName">获取当前登录人信息（有认证限制）</el-button>
  </el-row>
</template>
  
<script lang="ts" setup>
import axios from "axios";
import { ElMessage } from 'element-plus'

const isRegister = () => {
  axios({
    method: 'get',
    url: 'http://localhost:8080/user/isRegister',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    data: {
      "username": 'LiBai'
    }
  }).then(res => {
    ElMessage({
      message: JSON.stringify(res),
      type: 'success',
    })
  }).catch(err => {
    ElMessage.error(JSON.stringify(err))
  })
}

const myName = () => {
  axios({
    method: 'post',
    url: 'http://localhost:8080/user/myName',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }).then(res => {
    ElMessage({
      message: JSON.stringify(res),
      type: 'success',
      duration: 2000
    })
  }).catch(err => {
    ElMessage.error(JSON.stringify(err))
  })
}
</script>
  