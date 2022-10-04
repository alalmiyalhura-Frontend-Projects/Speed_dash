<template>
  <div class="chart_component">
    <main>
      <h3 class="number">{{ number }}</h3>
      <span class="title">{{ title }}</span>
    </main>
    <div class="icon">
      <span><i class="fas fa-chart-bar"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      deafult: 0,
    },
    title: {
      deafult: "title",
    },
  },
};
</script>
