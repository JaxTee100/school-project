<template>
  <div class="login">
    <form >
      <h2>Sign In</h2>
      

      <label id="email" >Email</label><br>
      <input type="email" v-model="email" required><br><br>

      <label id="password">Password</label><br>
      <input type="password" v-model="password"><br>

      
      <router-link to="/forgotPassword"><p>Forgot Password?</p></router-link>
      <button class="sign-in-btn">Sign In</button>
      <button class="google-btn">Sign In with Google</button>
      <p class="no-account">Don't have an account <router-link to="/registration">Signup</router-link></p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {

  setup(){
    const email = ref('');
    const password = ref('');

    return {email, password}
  }

}
</script>

<style scoped>
  .login{
    display: flex;
    justify-content: center;
  }
  .login form{
    padding: 15px;
    width: 23%;
    
  }
  .login form input{
    all: unset;
    margin-top: 10px;
    width: 100%;
    height: 30px;
    padding: 5px;
    border: 1px solid #CFC8E1;
    border-radius: 3px;
    

  }
  .login form label{
    font-weight: 600;
  }
  .login form h2{
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
  }
  .login form p{
    text-align: right;
    margin-bottom: 35px;
  }
  .login form .no-account{
    text-align: center;
  }
  .sign-in-btn{
    all: unset;
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
    text-align: center;
    border: 1px solid #7c55d6;
    padding: 5px;
    color: white;
    font-weight: 600;
    background-color: #7c55d6;
    border-radius: 3px;
  }
  .google-btn{
    all: unset;
    width: 100%;
    height: 30px;
    text-align: center;
    border: 1px solid #e6e5e1;
    padding: 5px;
    border-radius: 3px;
    font-weight: 600;
    
  }
  #email{
    margin: 10px 0;

  }
  @media only screen and (max-width: 480px) {
  .login form{
    width: 100%;
    border: 1px solid red;
    
  }
}

</style>