<template>
  <div>
    <img
      class="loading"
      v-if="!bIsLoad"
      src="@/assets/images/load.gif"
      alt=""
    />
    <h1 v-if="sErrorLog">ERROR: {{ sErrorLog }}</h1>
    <div class="imgBlock" v-if="bIsLoad">
      <img
        v-for="item in oFetchData.data"
        :key="item.url"
        :src="item.url"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FetchData",
};
</script>

<script setup>
import { apiGetHerokuappImageList } from "@/api";
import { ref, reactive, onMounted } from "vue";

const oFetchData = reactive({ data: [] });
const bIsLoad = ref(false);
const sErrorLog = ref("");

const getData = async () => {
  try {
    const imageListItem = await apiGetHerokuappImageList();
    bIsLoad.value = true;
    oFetchData.data = imageListItem.data;
  } catch (err) {
    bIsLoad.value = true;
    sErrorLog.value = err.message;
  }
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.loading {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
