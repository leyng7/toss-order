<script setup lang="ts">
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
</script>

<template>
  <div class="container">
    <header/>
    <content/>
  </div>
</template>

<style>
body {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
  "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
  "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  sans-serif;
}

a {
  text-decoration: none;
  color: black;
}


.container {
  max-width: 1300px;
  margin: auto;
}
</style>
