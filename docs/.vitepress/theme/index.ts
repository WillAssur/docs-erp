
import "./custom.css";
//@ts-nocheck
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";
import LogoutButton from "./components/LogoutButton.vue";
import LoginComponent from "./components/LoginComponent.vue";
// Custom Theme Entrypoint for Vite, somehow we must ignore the default import
// import CSS after DefaultTheme otherwise everything must be overridden

const Theme = {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: any }) {
    app.component("login", LoginComponent);
    app.component("LogoutButton", LogoutButton);
  },
};

export default Theme;
