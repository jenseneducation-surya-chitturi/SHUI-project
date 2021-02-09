<template>
    <form @submit.prevent :class="{ show: isForm }">
    <textarea placeholder="Text goes here"></textarea>
    <button>Add</button>
    <slot/>
  </form>

</template>

<script>
import { computed } from "@vue/composition-api";
export default {
    name: "AddStream",
  setup(_, { root }) {
    const isForm = computed(() => root.$store.state.isForm);
    return { isForm };
  },
};
</script>
<style scoped>
form {
  left: 50%;
  bottom: 0;
  right: 50%;
  z-index: 3;
  width: 90%;
  position: fixed;
  transform: translate3d(-50%, 100%, 0);
}
  textarea {
    width: 100%;
    resize: none;
    height: 300px;
    padding: 1rem 10px;
  }

  .show {
    transition: all 0.3s ease;
    transform: translate3d(-50%, 0, 0);
  }

</style>
