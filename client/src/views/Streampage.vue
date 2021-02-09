<template>
  <div v-if="user">
     <Setting />
    <AddStream/>
   
      <h1>Hello there, {{ user.username }}</h1>
      <p v-if="!streams.length">
        You dont follow any channels
      </p>
      <h2 v-else>Dina streams</h2>
      <ul>
        <li v-for="(stream, idx) in streams" :key="idx">
          <p class="date">{{ stream.date }}</p>
          <p class="content">{{ stream.content }}</p>
          <p class="tags" v-for="(item, idx) in stream.tag" :key="idx">
            <span>#{{ item }}</span>
          </p>
        </li>
      </ul>
      <button class="btn-primary" @click="addStream()">Add streams</button>
  </div>
</template>

<script>
import Setting from "../components/Setting.vue";
import AddStream from "../components/AddStream";
import useFetchStreams from "@/use/useFetchStreams";
import axios from "axios";
import { onMounted, ref } from "@vue/composition-api";
export default {
  components: {

    Setting,
    AddStream,
  },
  setup(_, { root }) {
    const addStream = () => {
      root.$store.commit("TOGGLE_SETTINGS");
    };
    const { user } = useFetchStreams();
    const streams = ref([]);

    onMounted(async () => {
      const RESPONSE = await axios.get("/api/subscriptions");
      streams.value = RESPONSE.data.flat();
    });
    return { user, streams, addStream };
  },
};
</script>
<style scoped>
  h2 {
    color: #fff;
    font-size: 1.3rem;
    margin: 2rem 0 0 0;
  }
  p {
    color: #fff;
    margin-top: 1rem;
    text-align: center;
  }
  img {
    display: none;
  }
  ul {
    height: 300px;
    overflow: auto;
    list-style: none;
    margin-top: 2rem;
  }
    li {
      color: #fff;
      padding: 1rem;
      margin: 1rem 0;
      background: #fff;
      display: inline-block;
      border: 1px solid #fff;
    }
      .content {
        margin: 1rem 0;
      }

      .tags {
        font-size: 0.8rem;
        text-align: right;
        font-style: italic;
      }
    
   ul {
    margin-top: 1rem;
  }
    p {
      color: #333;
      margin-top: 0;
      text-align: left;
    }
      .remove-tag {
        display: none;
      }
   
</style>
