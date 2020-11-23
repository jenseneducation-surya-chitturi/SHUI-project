<template>
<div>
  <div class="view">
      <p class="date">{{date}}</p>
      <p class="content">{{content}}</p>
       <button @click="deleteStream(id)">x</button>
</div>
 <p class="tag">#{{tag}}</p>
 </div>
</template>

<script>
export default {
  name: "Streamview",
  props: ["id", "tag", "content","date"],
  data() {
    return {
    }
      },
  methods: {
    deleteStream(id){
      console.log(id)
      const streamId={
        id:id
      };
      console.log(streamId)
      this.$store.dispatch('deleteStream',streamId)
    }

  },
};
</script>
<style scoped>
.view{
background: #FFFFFF;
box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
width:500px;
height:150px;
margin:50px;
}
.date{
  display:flex;
  float:left;
  font-family: 'Snell Roundhand', cursive;
/*  font-family: 'Apple Chancery', cursive; */
}
.content{
  padding-top: 5px;
  display:flex;
  float:left;
 font-family: 'Brush Script MT', 'Brush Script Std', cursive; 
}
.tag{
  color:blue;
  margin-top:-35px;
  padding-right:350px;
}
</style>