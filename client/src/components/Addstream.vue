<template>
  <div class="addstream">
      <form @submit.prevent="addStream" class="form-section">
      <div class="form-controltop">
       <label for="title">Tag</label>
       <input type="text" name="tag" id="tag" placeholder="Place" v-model="stream.tag">
      </div>
       <div class="form-controltop">
       <label for="title">date</label>
       <input type="date" name="title" id="date" placeholder="Date" v-model="stream.date">
      </div>
      <div class="form-controlbottom">
        <label for="description">content</label>
        <textarea name="description" id="description" cols="30" rows="4" v-model="stream.content"></textarea>
      </div>
      <button>Add Stream</button>
      </form>
  </div>
</template>

<script>
export default {
    name:"Addstream",
    data(){
        return{
            stream:{
                tag:'',
               content:'',
               date:''
            }
        }
    },
    computed:{
    },
    methods:{
        addStream(){
            console.log(this.stream)
            this.$store.dispatch('addStream',this.stream);
            this.$router.push('/stream')
        }
    }
}
</script>
<style scoped>
.addstream{
background: #FFFFFF;
box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
width:500px;
height:150px;
margin:50px;
}
#date{
  font-family: 'Snell Roundhand', cursive;
/*  font-family: 'Apple Chancery', cursive; */
}
#content{
 font-family: 'Brush Script MT', 'Brush Script Std', cursive; 
}
#tag{
  color:blue;
}
</style>
