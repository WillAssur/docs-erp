<script setup>
import DefaultTheme from "vitepress/theme";
import LoginComponent from "./LoginComponent.vue";
const { Layout } = DefaultTheme;
</script>

<template>
  <div class="main-content">
    <div v-if="!user">
      <Layout>
        <Content> </Content>
      </Layout>
    </div>
    <div v-else>
   
      <p align="center">
        <LoginComponent/>
      </p>
    </div>
  </div>
</template>

<script>
// import auth from "../../auth";
export default {
  data() {
    return {
      auth0client: null,
      user: null,
    };
  },
  async mounted() {
    // this.auth0client = await auth.createClient();
    // this.user = await this.auth0client.getUser();
  },
  methods: {
    async login() {
      await auth.loginAAWithPopup(this.auth0client);
    },
    async getUser() {
      this.user = await this.auth0client.getUser();
    },
  },
};
</script>