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

const logout = () => {
  axios({
    method: 'post',
    url: 'http://localhost:8080/logout',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded'
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
