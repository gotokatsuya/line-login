import { LineLogin } from "line-login-capacitor-plugin";

const { createApp } = Vue;

createApp({
  methods: {
    onClickLineLogin(event) {
      console.log("onClickLineLogin");
      LineLogin.login({permissions: ["profile"]}).then((res) => {
        console.log(res);
        alert(res)
      }).catch((e) => {
        alert(e)
      });
    }
  }
}).mount('#app');
