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

function logout() {
  axios({
    method: 'post',
    url: 'http://localhost:8080/logout',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
</script>
