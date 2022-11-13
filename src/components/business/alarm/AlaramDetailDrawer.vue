<template>
  <el-drawer
    v-model="open"
    size="90%"
    :close-on-click-modal="false"
    title="详情"
  >
    <el-table :data="tableData">
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="alert_code" label="告警代码" />
      <el-table-column prop="classify" label="告警类型" />
      <el-table-column prop="dc_computer_name" label="告警主机" />
      <el-table-column prop="description" label="描述" show-overflow-tooltip />
      <el-table-column prop="repeat_count" label="重复次数" />
      <el-table-column prop="start_time" label="开始时间" />
      <el-table-column prop="end_time" label="结束时间" />
    </el-table>
  </el-drawer>
</template>
<script setup>
import { ref } from "vue";
let open = ref(false);
let tableData = ref([]);

function openDrawer(data) {
  open.value = true;
  tableData.value = data;
}

defineExpose({
  openDrawer,
});

function timeFormatter(row, column) {}
</script>
