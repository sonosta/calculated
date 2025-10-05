<template>
    <div class="flex gap-10" style="max-width: 10%;">
        <my-input
            :placeholder="'Логин'"
            :label="'Логин'"
            v-model:value="login"
        />
        <my-input
            :placeholder="'Пароль'"
            :label="'Пароль'"
            v-model:value="password"
        />
        <button style="width: 100%;" class="btn" @click="getUser">Проверка</button>
    </div>
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
        localStorage.clear();
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
            localStorage.setItem('User', data.data.id);
            localStorage.setItem('Token', data.token);
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