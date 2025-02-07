<script setup lang="ts">
// 移除 export default defineComponent
import { ref } from 'vue';


// 如果需要返回值，可以直接定义响应式数据或方法
const message = ref('Welcome to the Login View');
</script>

<template>
  <!-- 使用模板语法 -->
  <div>{{ message }}</div>
</template>

<style scoped>
/* 样式保持不变 */
</style>
