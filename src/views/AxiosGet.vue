<template>
  <MousePosition />
  <StateTodo />
  <StateTodo />
  <FetchData />
</template>

<script>
export default {
  name: "AxiosGet",
};
</script>

<script setup>
import MousePosition from "@/components/MousePosition.vue";
import StateTodo from "@/components/StateTodo.vue";
import FetchData from "@/components/FetchData.vue";
</script>

<style scoped>
.box {
  margin-bottom: 20px;
}
</style>
