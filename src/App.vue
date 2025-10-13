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
            :type="'password'"
            v-model:value="password"
        />
        <div>
            <my-modal>
                <template #btn="{open}">
                    <button style="width: 100%;" class="btn" @click="getUser(open)">Проверка</button>
                </template>
                <template #title="{close}">
                    <div>Тут находится title</div>
                </template>
                <template #content="{close}">
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="2">Ничего не найдено</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </template>
                <template #action="{close}">
                    <div class="flex justifut-between row gap-10">
                        <button style="width: 100%; max-width: 100px" class="btn grey" @click="close">Закрыть</button>
                    </div>
                </template>
            </my-modal>
        </div>
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
    async getUser(open){
                    open();

        // localStorage.clear();
        // try {
        //     const response = await fetch('http://localhost:3000/api/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         login: this.login,
        //         password: this.password
        //     })
        //     });
        //     const data = await response.json();
        //     if (response.ok) {
        //     localStorage.setItem('User', data.data.id);
        //     localStorage.setItem('Token', data.token);
        //     } else {
        //     this.error = data.message || 'Ошибка входа';
        //     }
        // } catch (err) {
        //     this.error = 'Ошибка сети: ' + err.message;
        // }
    }
}
}
</script>