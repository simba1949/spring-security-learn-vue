<template>
  <el-row class="mb-4">
    <el-button type="primary" @click="ping">PING</el-button>
  </el-row>
</template>
  
<script lang="ts" setup>
import axios from "axios";
import { ElMessage } from 'element-plus'

function ping() {
  axios({
    method: 'get',
    url: '/api/ping',
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
  