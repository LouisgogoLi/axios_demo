<template>
  <mouse-position />
  <state-todo />
  <state-todo />
  <fetch-data />
</template>

<script>
import MousePosition from "@/components/MousePosition.vue";
import StateTodo from "@/components/StateTodo.vue";
import FetchData from "@/components/FetchData.vue";
export default {
  components: { MousePosition, StateTodo, FetchData },
};
</script>

<style scoped>
.box {
  margin-bottom: 20px;
}
</style>
