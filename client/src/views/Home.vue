<template>
  <div class="home">
    <Nav></Nav>
  <section>
    <img :src="require('@/assets/logo.png')" @click="$router.push('/login')" />
   <h1 v-show="!$route.meta.requiresAuth">FLOW FREELY</h1>
  </section>
   <Navfooter/>
  </div>

</template>

<script>
import Navfooter from '../components/Nav/Navfooter'
import Nav from '../components/Nav/Nav'
export default {
  name: 'Home',
    components: {
  Navfooter,
  Nav
    }

}
</script>
<style scoped>
.home{
  background-color:#19274A;
}
h1{
  color:rgba(0, 178, 255, 0.8);
}
section{
  position: relative;
  padding-top:20%;
}

</style>



