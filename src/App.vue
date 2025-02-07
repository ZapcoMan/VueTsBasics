<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="135" height="145"/>

    <div class="wrapper">
      <HelloWorld msg="You did it!"/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Test">Test</RouterLink>
        <RouterLink to="/From">From</RouterLink>

      </nav>
    </div>
    <div>
      <div>
        <RouterLink to="/login">登录</RouterLink>
      </div>
    </div>
  </header>
  <!--跳转 注册页面-->
<!--  <a href="/Register">Go to Path</a>-->


  <RouterView/>

</template>

<style scoped>
/* 设置 header 的样式，包括行高和最大高度 */
header {
  line-height: 1.5;
  max-height: 100vh;
}

/* 设置 .logo 类的样式，使其居中显示并设置上下边距 */
.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* 设置 nav 的样式，包括宽度、字体大小、文本对齐方式和上边距 */
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

/* 设置激活的路由链接的样式，使其文本颜色为变量 --color-text 的值 */
nav a.router-link-exact-active {
  color: var(--color-text);
}

/* 设置激活的路由链接在悬停时的样式，背景颜色透明 */
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

/* 设置导航链接的样式，包括显示方式、内边距和左边框 */
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

/* 设置第一个导航链接的样式，无左边框 */
nav a:first-of-type {
  border: 0;
}

/* 当屏幕宽度大于等于 1024px 时，应用以下样式 */
@media (min-width: 1024px) {
  /* 调整 header 的显示方式和对齐方式，以及右侧内边距 */
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  /* 调整 .logo 的右边距 */
  .logo {
    margin: 0 2rem 0 0;
  }

  /* 设置 header 内 .wrapper 类的样式，包括显示方式、对齐方式和换行 */
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  /* 调整 nav 的文本对齐方式、左边距、字体大小、上下内边距和上边距 */
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>
