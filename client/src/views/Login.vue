<template>
<div class="login">
  <Nav></Nav>
<div class="content">
  <img :src="require('@/assets/logo.png')" @click="$router.push('/login')" />
   <h1>FLOW FREELY</h1>
  </div>
  <div class="login-form">
      <form @submit.prevent="registerUser">
        <div class="form-controls">
        <input type="text"  id="username" placeholder="Username" v-model="username"><br>
         <input type="password"  id="password" placeholder="Password" v-model="password">
        </div>
        <button>LogIn</button>
        <button class ="register"  @click="$router.push('/signup')">Register</button>
      </form>
  </div>
     <Navfooter/>
  </div>
</template>

<script>
// import axios from 'axios'
import Nav from '../components/Nav/Nav';
import Navfooter from '../components/Nav/Navfooter';
import useFormSubmit from "@/use/useFormSubmit";
import { toRefs, reactive } from "@vue/composition-api";
export default {
  components: {
  Nav,
  Navfooter
    },

      setup(_, { root }) {
    let credentials = reactive({
      username: null,
      password: null,
    });
    const { registerUser } = useFormSubmit("/api/login", credentials, root);
    return { ...toRefs(credentials), registerUser };
  },
    // data(){
    //     return {
    //             username:'',
    //             password:''
    //     }
    // },
    //  methods: {
    //      registerUser(){
    //           const newUser = {
    //       username: this.username,
    //       password: this.password,  
    //          };
    //   console.log(newUser);
    //   axios.post("http://localhost:5000/api/login", newUser);
      
    // }
    //      }
     }
    
</script>
<style scoped>
.login{
    background-color:#19274A;
}
h1{
  color:rgba(0, 178, 255, 0.8);
}
.content{
   position: relative;
  padding-top:5%;
}
form {
  display: grid;
  width: 300px;
  margin-left: 480px;
}
  input {
    margin: 10px;
    height: 50px;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    border: 2px solid #fff;
    font-family: PT Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0.1em;
    text-align: center;
    background: transparent;
  }
    ::placeholder {
      color: white;
      font-family: "PT Sans", sans-serif;
      letter-spacing: 0.3em;
      background: transparent;
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
