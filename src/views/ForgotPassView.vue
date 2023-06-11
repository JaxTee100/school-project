<template>
<div class="forgot-pass">
  
  <form >
      <label id="email" >INPUT YOUR EMAIL</label><br>
      <input type="text" v-model="emailInput" required><br><br>

      <button class="sign-in-btn">Submit</button>
  </form>
</div>
  
    
</template>

<script>
export default {

}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .forgot-pass{
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  .forgot-pass form{
    padding: 15px;
    width: 23%;
  }
  label{
    font-weight: 600;
  }
  input{
    all: unset;
    margin-top: 10px;
    width: 100%;
    height: 30px;
    padding: 5px;
    border: 1px solid #CFC8E1;
    border-radius: 3px;
    

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
</style>