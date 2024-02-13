<template>
  <div class="container">
    <div class="main">

      <div style="object-fit: contain; height: 50px;">
        <img style="height: 100%;" src="/logo.png" alt="">
      </div>
    

     <form >

      <div class="custom-input">
        <label for="">Email</label>
        <input type="text" name="" id="">
      </div>

      <div class="custom-input">
        <label for="">Mot de passe</label>
        <input type="text" name="" id="">
      </div>
     

     </form>


      <button class="btn btn-primary" @click="login()">Acceder à la documentation </button>
    </div>
  </div>
</template>

<script lang="ts" allowJs="true">
// @ts-nocheck
import auth from "../../auth";
export default {
  props: ["client"],
  methods: {
    async login() {

    },
  },
};
</script>




<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .main{
  min-height: 350px;
  background: white;
  color: black;
  background: var(--wa-white);
  border-radius: 16px;
  position: sticky;
  top: 150px;
  padding: 2rem;
  bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 4px 24px 0px rgba(26, 24, 25, 0.08);
}


.custom-input{
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
}

input{
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  /* width: 100%; */
  min-width: 315px;
  padding-right: 10px;

  font-weight: 400;
  line-height: 1.5;
  color: var(--wa-body-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--wa-body-bg);
  background-clip: padding-box;
  border-radius: var(--wa-border-radius);
  border: 0.5px solid var(--wa-gray-500);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: hidden;
  /* border: none; */
  padding: 0.475rem 0.75rem;
  width: 100%;
  font-size: 1rem;
}

</style>