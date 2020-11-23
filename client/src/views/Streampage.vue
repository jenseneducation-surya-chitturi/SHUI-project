<template>
<div class="stream">
   <section>
    <img :src="require('@/assets/header.png')" @click="$router.push('/setting')" />
  </section>
  <div class="stream-body">
    <h1>Added streams</h1>

  <stream-view v-for="stream in streams" :key="stream.id" 
  :tag="stream.tag"
  :content="stream.content"
  :id="stream.id"
  :date="stream.date" >
  </stream-view>
  </div>
  <div class="streampage-buttons">
  <button @click="moveToAddstream">Add Stream</button>
  </div>
</div>
</template>

<script>
import Streamview from '../components/Streamview.vue';

export default {

  components:{
    'stream-view':Streamview,
    
  },
  data(){
    return{
      toggleView:false,
    }
  },
  methods:{
    moveToAddstream(){
      this.$router.push('/addstream')
    }
  },
   computed: {
        streams() {
            return this.$store.state.streams;
        },      
    },
  mounted(){
    this.$store.dispatch('loadStreams');
  }
}
</script>
<style scoped>
section{
  display:flex;
float: left;
padding-left:30px;
}
.stream{
  background-color:#19274A;
   width: 1000px;
 height:800px;
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