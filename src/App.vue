<template>
  Логин: <input v-model="login"></input>
  Пароль: <input v-model="password"></input>
  <button @click="getUser">Проверка</button>
</template>

<script>
export default {
  name: 'App', 
  data(){
    return{
      login:'',
      password:'',
    }
  },
  methods:{
    async getUser(){
      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            login: this.login,
            password: this.password
          })
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Успешный вход:', data);
          // Например, сохранить токен и данные пользователя
          // localStorage.setItem('token', data.token);
        } else {
          this.error = data.message || 'Ошибка входа';
        }
      } catch (err) {
        this.error = 'Ошибка сети: ' + err.message;
      }
    }
  }
}
</script>