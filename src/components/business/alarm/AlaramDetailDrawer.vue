<template>
  <el-drawer
    v-model="open"
    size="90%"
    :close-on-click-modal="false"
    title="详情"
  >
    <el-table :data="tableData">
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="alert_code" label="告警代码" width="80"/>
      <el-table-column prop="classify" label="告警类型" width="80"/>
      <el-table-column prop="dc_computer_name" label="告警主机" show-overflow-tooltip/>
      <el-table-column prop="description" label="描述" show-overflow-tooltip />
      <el-table-column prop="repeat_count" label="重复次数" width="80"/>
      <el-table-column
        prop="start_time"
        label="开始时间"
        width="160"
        :formatter="timeFormatter"
      ></el-table-column>
      <el-table-column
        prop="end_time"
        label="结束时间"
        width="160"
        :formatter="timeFormatter"
      />
    </el-table>
  </el-drawer>
</template>
<script setup>
import { ref } from "vue";
import moment from "moment";

let open = ref(false);
let tableData = ref([]);

function openDrawer(data) {
  open.value = true;
  tableData.value = data;
}

defineExpose({
  openDrawer,
});

function timeFormatter(row, column, cellValue) {
  return moment(cellValue).format("YYYY-MM-DD HH:mm:ss");
}
</script>
