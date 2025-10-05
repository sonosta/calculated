import { createApp } from 'vue';
import App from './App.vue';
import './assets/style/global.scss';
import components  from './components/components.js';

const app = createApp(App);

//Объявление компонентов из экспортируемого файла component.js
Object.entries(components).forEach(([name, component]) => {
  app.component(name, component);
});

app.mount('#app');