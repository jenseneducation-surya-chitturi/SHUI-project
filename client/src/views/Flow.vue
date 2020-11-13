<template>
  <div class="flow">
    <h1>added streams</h1>
    <div class="list">
      <ul>
        <li class="list-item" v-for="stream in pickedTags" :key="stream._id">
          <p>{{ stream.date }}</p>
          <p>{{ stream.content }}</p>
          <p>{{ stream.tags }}</p>
        </li>
      </ul>
    </div>
    <router-link to="/settings">Add streams</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Flow",
  async created() {
    const response = await axios.get("/api/tags");
    this.pickedTags = response.data;
  },
  data() {
    return {
      streams: [],
      pickedTags: [],
    };
  },
};
</script>
<style scoped>
.flow {
  color: white;
}

li {
    color: #000;
    padding: 10px;
    margin: 1rem 0;
    background: #fff;
  }

</style>