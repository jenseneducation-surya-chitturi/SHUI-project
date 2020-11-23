<template>
<div class="setting">
  <section>
    <img :src="require('@/assets/header.png')"/>
  </section>
  <h1>Streams</h1>
  <div class="streamview">
      <stream-view v-for="stream in streams" :key="stream.id" 
  :tag="stream.tag"
  :id="stream.id" >
  </stream-view>
  </div>
   <div class="header-section">
     <button @click="deleteUser">Delete user</button>
      <button @click="deleteAllStreams">Delete All Streams</button>
  </div>
  </div>
</template>
<script>
import Streamview from '../components/Streamview.vue';
export default {
  components:{
    'stream-view':Streamview
  },
  computed: {
        streams() {
            return this.$store.state.streams;
        },      
    },
  mounted(){
    this.$store.dispatch('loadStreams');
  },
  methods: {
  deleteAllStreams(){
      this.$store.dispatch('deleteAllStreams')
    },
    deleteUser(){
      this.$router.push('/login')
    }
  }
}

</script>
<style scoped>
.setting{
 background: #EF4343;
 width: 1000px;
 height:800px;
}
section{
  display:flex;
float: left;
padding-left:30px;
}
 button {
    height: 50px;
    margin: 20px;
    outline: none;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 4px;
    font-family: PT Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
  }
</style>