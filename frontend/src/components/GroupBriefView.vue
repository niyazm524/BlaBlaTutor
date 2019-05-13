<template>
  <div class="group-view">
    <router-link class="group-link" :to="`/class/${_id}`">
      <h2 class="group-link-headline" v-text="title"></h2>
    </router-link>
    <p class="group-view-desc" v-text="description"></p>
  </div>
</template>

<script>
  export default {
    name: "GroupBriefView",
    props: {
      _id: {type: String},
      title: {type: String, default: "Unknown title"},
      description: {type: String, default: ""},
      status: {type: Number, default: 0}
    }
  }
</script>

<style scoped>
  .group-view {
    margin: 15px 10px;
    border: greenyellow 3px solid;
    border-radius: 9px;
    padding: 10px 10px 0 10px;
    background-color: white;
    box-sizing: border-box;
  }

  .group-view .group-link {
    text-decoration: none;
    color: black;
  }

  .group-view .group-link:hover {
    color: blue;
    text-decoration: blue underline;
  }

  .group-link .group-link-headline {

  }

  .group-view .group-view-desc {

  }
</style>
