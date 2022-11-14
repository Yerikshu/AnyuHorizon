<template>
  <MCTable v-model:config="config" ref="table">
    <template #OperateButton="{ data }">
      <el-button link type="primary" @click="showDetail(data.activity_list)"
        >详情</el-button
      >
      <el-button link type="primary" @click="showDetail">已处理</el-button>
      <el-button link type="primary" @click="showDetail">忽略</el-button>
      <el-button link type="primary" @click="showDetail">关闭</el-button>
      <el-button link type="primary" @click="showDetail">误报</el-button>
      <el-button link type="primary" @click="showDetail">删除</el-button>
    </template>
  </MCTable>
  <AlaramDetailDrawer ref="drawer" />
</template>

<script setup>
import { ref } from "vue";
import AlaramDetailDrawer from "./AlaramDetailDrawer.vue";
import MCTable from "@/components/base/common/MCTable.vue";
import { settings } from "@/utils/network/index";
import moment from 'moment'

const drawer = ref();
const config = ref({
  remote: true,
  tableDataUrl: settings.GET_INVASION_LIST,
  showOperateButton: true,
  operateButtonWidth: 350,
  queryForm: {
    pageNo: 1,
    pageSize: 10,
    filter: [],
  },
  columns: [
    {
      label: "标题",
      key: "title",
      showOverflowTooltip: true,
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
      width: 160,
      formatter: (data) => {
        let date = data.start_time;
        return moment(date).format("YYYY-MM-DD HH:mm:ss")
      },
    },
    {
      label: "结束时间",
      key: "end_time",
      width: 160,
      formatter: (data) => {
        let date = data.end_time;
        return moment(date).format("YYYY-MM-DD HH:mm:ss")
      },
    },
  ],
  immediateRemote: true,
});

function showDetail(val) {
  drawer.value.openDrawer(val);
}
</script>
