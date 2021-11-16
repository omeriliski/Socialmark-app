import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import "@/assets/style.css"
import appHeader from "@/components/shared/appHeader"
import appBookmarkList from "@/components/shared/appBookmarkList"
import {appAxios} from './utils/appAxios'
import store from './store'

const app=createApp(App);
app.component("AppHeader",appHeader);
app.component("AppBookmarkList",appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$log = console.log;
app.mount('#app');
