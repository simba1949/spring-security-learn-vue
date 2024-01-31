<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="登录名">
      <el-input v-model="form.username" type="text" placeholder="Please input username" />
    </el-form-item>

    <el-form-item label="密码">
      <el-input v-model="form.password" type="password" placeholder="Please input password" show-password />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import axios from "axios";
import { ElMessage } from 'element-plus'

// do not use same name with ref
const form = reactive({
  username: '',
  password: ''
})

const onSubmit = () => {
  console.log(form);

  axios({
    method: 'post',
    url: 'http://localhost:8080/login',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: form
  }).then(res => {
    ElMessage({
      message: JSON.stringify(res),
      type: 'success',
    })
  }).catch(err => {
    ElMessage.error(JSON.stringify(err))
  })
}
</script>