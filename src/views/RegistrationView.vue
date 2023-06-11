<template>
  <div class="register">
    <form >
      <h2>Sign Up</h2>
      
      <label id="firstName" >First Name</label><br>
      <input type="text" v-model="firstName" required><br><br>

      <label  >Last Name</label><br>
      <input type="text" v-model="lastName" required><br><br>

      <label id="email" >Email</label><br>
      <input type="email" v-model="email" required><br><br>

      <label >Password</label><br>
      <input type="password" v-model="password"><br><br>
      
      <label id="email" >Confirm Password</label><br>
      <input type="password" v-model="confirmPassword" required><br><br>

      <button class="sign-in-btn">Sign Up</button>
      <button class="google-btn">Sign Up with Google</button>
      <p class="no-account">Already have an account <router-link to="/login">Signin</router-link></p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {

  setup(){
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password =ref('');
    const confirmPassword = ref('');


    return {firstName, lastName, email, password, confirmPassword}
  }

}
</script>

<style>
.register{
  display: flex;
  justify-content: center;
}
.register form{
    padding: 15px;
    width: 23%;
    
  }
.register form input{
  all: unset;
  margin-top: 10px;
  width: 100%;
  height: 30px;
  padding: 5px;
  border: 1px solid #CFC8E1;
  border-radius: 3px;
  

}
.register form label{
    font-weight: 600;
  }
.register form h2{
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
  }

.register form .no-account{
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
 @media only screen and (max-width: 480px) {
  .register form{
    width: 100%;
    
  }
}

</style>