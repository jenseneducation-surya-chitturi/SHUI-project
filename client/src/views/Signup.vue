<template>
  <form @submit.prevent="registerUser" >
  <h2>Sign Up</h2>
  	<p>
			<label for="Name" class="floatLabel">Name</label>
			<input id="Name" type="text"  v-model="username">
		</p>
		<p>
			<label for="Email" class="floatLabel">Email</label>
			<input id="Email"  type="text"  v-model="email">
		</p>
		<p>
			<label for="password" class="floatLabel">Password</label>
			<input id="password" type="password" v-model="password" >
		</p>
		<p>
			<label for="confirm_password" class="floatLabel">Confirm Password</label>
			<input id="confirm_password" type="password"  v-model="repeatPassword">
		</p>
		<p>
			<button>signup</button>
       <router-link to="/login">login</router-link>
		</p>
    
	</form>
</template>

<script>
import axios from "axios"
export default {
  name: "Signup",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },

  methods: {
  registerUser() {
      if(this.password === !this.repeatPassword){
                 return;
            } else {
      const newUser = {
          username: this.username,
          email: this.email,
          password: this.password,
          repeatPassword: this.repeatPassword   
             };
      console.log(newUser);

      axios.post("http://localhost:5000/api/register", newUser);
    }
            
  }
  
  },
};
</script>
<style scoped>
form {
  background: darkblue;
  padding: 4em 4em 2em;
  max-width: 400px;
  margin: 50px auto 0;
  box-shadow: 0 0 1em #222;
  border-radius: 2px;
}
  h2 {
    margin:0 0 50px 0;
    padding:10px;
    text-align:center;
    font-size:30px;
    color:darken(#e5e5e5, 50%);
    border-bottom:solid 1px #e5e5e5;
  }
  p {
    margin: 0 0 3em 0;
    position: relative;
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
