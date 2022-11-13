<template>
  <MCTable v-model:config="config" ref="table">
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
import { settings } from "/src/utils/network/index";

const config = ref({
  remote: true,
  tableDataUrl: settings.GET_INVASION_LIST,
  showOperateButton: true,
  queryForm: {
    pageNo: 1,
    pageSize: 10,
    filter: [],
  },
  columns: [
    {
      label: "标题",
      key: "title",
    },
    {
      label: "级别",
      key: "level",
    },
    {
      label: "状态",
      key: "status",
    },
    {
      label: "源ip",
      key: "source_ip",
    },
    {
      label: "开始时间",
      key: "start_time",
    },
    {
      label: "结束时间",
      key: "end_time",
    },
  ],
  immediateRemote: true,
});

function showDetail(val) {
  console.log(val);
}
</script>
