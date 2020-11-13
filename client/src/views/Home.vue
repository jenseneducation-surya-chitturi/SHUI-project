<template>
  <div class="home">
   <header>
     <img :src="require('@/assets/header-logo.png')" alt=""/>
     </header> 
   <section>
      <img
      :src="require('@/assets/app-logo.png')"
      alt="icon"
      @click="$router.push('/login')"
    />
    <p>FLOW FREELY</p>
   </section>
<footer>
<img :src="require('@/assets/footer.png')">
</footer>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
.home{
background-color:darkblue;

}
p{
  color:white;
}
</style>
