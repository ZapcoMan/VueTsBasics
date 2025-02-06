<template>
  <div>
    <div>
      <h1>测试</h1>
      <h4>{}</h4>
    </div>
    <div></div>
    <h1>数据列表</h1>
    <!-- 使用 v-for 指令遍历 items 数组，显示每个 item 的 name 属性 -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {getItems} from '@/api/Test.ts';
import User from '@/model/User.ts'

// 定义 item 的类型，包括 id 和 name 两个属性
const user = new User('admin', '123456');



interface Item {
  id: number;
  name: string;
}

// 使用 defineComponent 创建组件
export default defineComponent({
  name: 'TestView',
  setup() {
    // 使用泛型为 items 指定类型，初始化为一个空数组
    const items = ref<Item[]>([]);

    // 定义一个异步函数 getItemData，用于获取数据
    const getItemData = async () => {
      try {
        // 调用 fetchItems 函数获取数据，成功后赋值给 items
        items.value = await getItems();

        user.toString()
      } catch (error) {
        // 捕获到错误时，在控制台输出错误信息
        console.error('获取数据失败:', error);
      }
    };

    // 在组件挂载时，调用 getItemData 函数获取数据
    onMounted(() => {
      getItemData();
    });

    // 返回 items，以便在模板中使用
    return {
      items,
    };
  },
});
</script>
