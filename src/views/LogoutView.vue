<template>
  <el-row>
    <el-col :sm="24" :lg="24">
      <el-result icon="error" title="">
        <template #extra>
          <el-button type="primary" @click="logout">登出</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ElMessage } from 'element-plus'

function logout() {
  axios({
    method: 'post',
    url: '/api/logout',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
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
