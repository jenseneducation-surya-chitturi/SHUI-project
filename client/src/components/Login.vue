<template>
  <div class="login-form">
      <form @submit.prevent="registerUser">
        <div class="form-controls">
          	<label for="Name" class="floatLabel">username</label>
          <input type="text"  id="username"  v-model="username">
          	<label for="Name" class="floatLabel">password</label>
          <input type="password"  id="password" v-model="password">
        </div>
        <button @click="$router.push('/flow')">LogIn</button>
      </form>
      <button class ="register">Register</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
                username:'',
                password:''
        }
    },
     methods: {
         registerUser(){
              const newUser = {
          username: this.username,
          password: this.password,  
             };
      console.log(newUser);

      axios.post("http://localhost:5000/api/login", newUser);
      
    }
         }
     }
    

</script>
<style scoped>
  form {
  background:darkblue;
  padding: 4em 4em 2em;
  max-width: 400px;
  margin: 50px auto 0;
  box-shadow: 0 0 1em #222;
  border-radius: 2px;
}
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    margin:0;
  }
  input[type="text"],
  input[type="password"] {
    background: #fff;
    border: 1px solid #dbdbdb;
    font-size: 1.2em;
    padding: .8em .5em;
    border-radius: 2px;
  }
  input[type="text"]:focus,
  input[type="password"]:focus {
    background: #fff
  }
  input[type="submit"] {
    background: rgba(148,186,101,0.7);
    box-shadow: 0 3px 0 0 darken(rgba(148,186,101,0.7), 10%);
    border-radius: 2px;
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 2em;
    margin: 1em 0 0;
    outline: none;
    padding: .4em 0;
    text-shadow: 0 1px #68B25B;
  }
  input[type="submit"]:hover {
    background: rgba(148,175,101,1);
    text-shadow:0 1px 3px darken(rgba(148,186,101,0.7), 30%);
  }
  label{
    position: absolute;
    left: 8px;
    top: 12px;
    color: #999;
    font-size: 16px;
    display: inline-block;
    padding: 4px 10px;
    font-weight: 400;
    background-color: rgba(255,255,255,0);
  }
    .floatLabel{
      top: -11px;
      background-color: rgba(255,255,255,0.8);
      font-size: 14px;
    }

</style>
