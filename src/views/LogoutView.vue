<template>
  <el-row>
    <el-col :sm="24" :lg="24">
      <el-result
          icon="error"
          title=""
      >
        <template #extra>
          <el-button type="primary" @click="logout">登出</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import axios from "axios";

const logout = () => {
  axios({
    method: 'post',
    url: 'http://localhost:8080/logout'
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
</script>
