<template>
  <article class="streams" :class="{ show: isOpen }">
    <h1>
      Streams
      <div class="close-btn" @click="$store.commit('TOGGLE_SETTINGS')">
        &times;
      </div>
    </h1>
    <p>Hottest streams to follow!</p>
    <AppList class="app-list" :streams="streams" @select-tag="addSubscription" />
    <section v-show="selectedTags.length">
      <p>Added tags:</p>
      <ul class="tag-list">
        <li v-for="(tag, idx) in selectedTags" :key="idx">#{{ tag }}</li>
      </ul>
    </section>
    <section v-show="subscriptions.length">
      <p>You follow these tags:</p>
      <ul class="tag-list">
        <li v-for="(subscription, idx) in subscriptions" :key="idx">
          <p v-for="(tag, idx) in subscription.tag" :key="idx">
            #{{ tag
            }}<span
              class="lnr lnr-trash"
              @click="removeSub(subscription)"
            ></span>
          </p>
        </li>
      </ul>
    </section>
    <button class="btn-primary" v-show="selectedTags.length" @click="subscribe">
      Subscribe
    </button>
    <button class="btn-primary" @click="removeUser">
      Shit, theyre on to me!
    </button>
  </article>
</template>

<script>
import { onMounted, computed, ref } from "@vue/composition-api";
import useFetchStreams from "@/use/useFetchStreams";
import AppList from "../components/AppList.vue";
import axios from "axios";
export default {
  components: {
    AppList,
  },
  setup(_, { root }) {
    const selectedTags = ref([]);
    const subscriptions = ref([]);
    const isOpen = computed(() => root.$store.state.isOpen);
    const { streams } = useFetchStreams();

    const addSubscription = async (tag) => {
      const checkIfSubscribed = subscriptions.value.some((el) =>
        el.tag.includes(tag)
      );
      if (checkIfSubscribed) {
        alert("Youre already subscribed");
        return;
      }
      streams.value.splice(tag, 1);
      selectedTags.value.push(tag);
    };

    const subscribe = () => {
      axios.post("/api/subscriptions", selectedTags.value);
      location.reload();
    };

    const removeSub = (sub) => {
      if (confirm("Remove subscription?")) {
        axios.delete("/api/subscriptions", {
          headers: {
            "Content-Type": "application/json",
          },
          data: sub.tag,
        });
        location.reload();
      }
    };

    const removeUser = () => {
      axios.delete("/api/delete");
      sessionStorage.removeItem("user");
      location.reload();
    };

    onMounted(async () => {
      const RESPONSE = await axios.get("/api/subscriptions");
      subscriptions.value = RESPONSE.data.flat();
    });

    return {
      isOpen,
      streams,
      addSubscription,
      selectedTags,
      subscribe,
      removeSub,
      removeUser,
      subscriptions,
    };
  },
};
</script>

<style scoped>
.streams {
  top: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  width: 95%;
  color: #fff;
  height: 80%;
  overflow: auto;
  position: fixed;
  padding: 4rem 2rem;
  background: #ef4343;
  transform: translate3d(0, -100%, 0);
}
  .show {
    opacity: 1;
    transition: all 0.3s ease;
    transform: translate3d(0, 0, 0);
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
    .close-btn {
      color: gray;
      font-size: 3rem;
    }
  .tag-list {
    padding: 1rem 0;
    list-style: none;
    border-top: 1px solid #fff;
  }
    li {
      gap: 1rem;
      display: block;
    }
      p {
        padding: 5px;
        display: flex;
        margin: 1rem 0;
        align-items: center;
        border: 1px solid #fff;
        background: rgba(#fff, 0.3);
        justify-content: space-between;
      }
    

  ul {
    height: auto;
  }
    .list-item {
      margin: 0;
      padding: 0;
      background: none;
    }
      .date,
      .content {
        display: none;
      }

      .tags {
        display: flex;
        margin: 1rem 0;
        padding: 10px 15px;
        border-radius: 3px;
        align-items: center;
        letter-spacing: 2px;
        border: 1px solid #ccc;
        background: rgba(#fff, 0.1);
        justify-content: space-between;
      }
        .remove-tag {
          font-size: 1.5rem;
        }

</style>
