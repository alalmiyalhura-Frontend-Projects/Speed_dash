<template>
  <router-view :allData="allData"></router-view>
</template>

<script>
export default {
  props: ["allData"],
};
</script>
