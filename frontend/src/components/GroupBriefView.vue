<template>
  <div class="group-view">
    <h2 class="headline" v-text="title"></h2>
    <p class="group-view-desc" v-text="description"></p>
  </div>
</template>

<script>
  export default {
    name: "GroupBriefView",
    props: {
      title: {type: String, default: "Unknown title"},
      description: {type: String, default: ""},
      status: {type: Number, default: 0}
    }
  }
</script>

<style scoped>

</style>
