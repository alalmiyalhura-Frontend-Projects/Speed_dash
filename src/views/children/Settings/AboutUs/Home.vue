<template>
  <router-view :about="allData"></router-view>
</template>

<script>
export default {
  props: ["allData"],
};
</script>
