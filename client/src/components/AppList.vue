<template>
  <ul class="list">
    <li class="list-item" v-for="stream in streams" :key="stream._id">
      <p class="date">{{ stream.date }}</p>
      <h3 class="content">{{ stream.content }}</h3>
      <p
        class="tags"
        v-for="(tag, index) in stream.tag"
        :key="index"
        @click="$emit('select-tag', tag)"
      >
        #{{ tag }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppList",
  props: {
    streams: Array,
  },
};
</script>
<style scoped>
.list {
  height: 300px;
  overflow: auto;
  margin: 1rem 0;
  list-style: none;
}
  .list-item {
    margin: 1rem 0;
    background: #727070;
    padding: 1rem 0.5rem;
  }
    h3 {
      margin: 1rem 0;
      font-size: 0.8rem;
    }

    .tags {
      display: inline;
      font-size: 0.8rem;
    }
</style>
