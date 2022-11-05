<template>
  <MCTable v-model:config="config">
    <template #OperateButton>
      <el-button link type="primary" @click="showDetail">详情</el-button>
      <el-button link type="primary" @click="showDetail">已处理</el-button>
      <el-button link type="primary" @click="showDetail">忽略</el-button>
      <el-button link type="primary" @click="showDetail">关闭</el-button>
      <el-button link type="primary" @click="showDetail">误报</el-button>
      <el-button link type="primary" @click="showDetail">删除</el-button>
    </template>
  </MCTable>
</template>

<script setup>
import { ref } from "vue";
import MCTable from "/src/components/base/common/MCTable.vue";

const config = ref({
  remote: true,
  tableDataUrl: settings.ALARM_QUERY,
  showOperateButton: true,
  queryForm: {
    pageNo: 1,
    pageSize: 10,
    filter: [],
  },
});
</script>
