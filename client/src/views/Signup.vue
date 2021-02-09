<template>
<div class="login">
  <Nav></Nav>
<div class="content">
  <img :src="require('@/assets/logo.png')"/>
   <h1>FLOW FREELY</h1>
  </div>
    <div class="login-form">
  <form @submit.prevent="registerUser" >
  <h2>Sign Up</h2>
   <div class="form-controls">
       <input type="text"  id="username" placeholder="userrnamn" v-model="username">
			<input id="Email"  type="text" placeholder="email" v-model="email">
			<input id="password" type="password" placeholder="password" v-model="password" >
			<input id="confirm_password" placeholder="password-repeat" type="password"  v-model="repeatPassword">
	</div>
			<button>Signup</button>
     <button @click="$router.push('/login')">Login</button>
	</form>
</div>
 <Navfooter/>
</div>
</template>

<script>
// import axios from "axios"
import Nav from '../components/Nav/Nav';
import Navfooter from '../components/Nav/Navfooter';
import useFormSubmit from "@/use/useFormSubmit";
import { reactive, toRefs } from "@vue/composition-api";
export default {
  name: "Signup",
   components: {
  Nav,
  Navfooter
    },

setup(_, { root }) {
    let credentials = reactive({
      username: null,
      email:null,
      password: null,
      repeatPassword: null,
    });
    const { registerUser } = useFormSubmit("/api/register", credentials, root);
    return { ...toRefs(credentials), registerUser };
  },

/*   data() {
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
  
  }, */
};
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
  background-color:#19274A;
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
