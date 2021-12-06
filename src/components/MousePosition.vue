<script>
import { fnMousePosition } from "@/common/methodCommon";
export default {
  setup() {
    const { x, y } = fnMousePosition();
    return { x, y };
  },
};
</script>

<template>
  <div class="box">
    <h1>Mouse Position</h1>
    <h2>x: {{ x }} : y: {{ y }}</h2>
  </div>
</template>

<style lang="scss"></style>
