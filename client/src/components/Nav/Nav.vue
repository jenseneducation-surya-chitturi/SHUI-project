<template>
  <nav class="navbar">
    <img
      :src="require('@/assets/header.png')"
      alt="icon"
      :class="{ addShadow: isOpen }"
    />
    <span
      class="lnr lnr-user user-action"
      v-show="$route.name === 'login'"
      @click="$router.push({ name: 'signup' })"
    ></span>
    <span
      class="lnr lnr-exit user-action"
      v-show="$route.meta.requiresAuth && !isOpen"
      @click="logout"
    ></span>
  </nav>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  setup(_, { root }) {
    const logout = () => {
      sessionStorage.removeItem("user");
      location.reload();
    };
    const isOpen = computed(() => root.$store.state.isOpen);

    return { logout, isOpen };
  },
};
</script>

<style scoped>
.navbar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  position: fixed;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
}

  span.user-action {
    color: #fff;
    padding: 10px;
    font-size: 1.3rem;
    border-radius: 50%;
    align-self: flex-end;
    border: 2px solid #fff;
  }

  img {
    cursor: pointer;
    transition: all 0.3s ease;
  }
    .addShadow {
      box-shadow: 0 0 10px rgba(#000, 0.2);
    }
  
</style>