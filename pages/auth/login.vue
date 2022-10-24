<script setup>
    import { ref } from 'vue'
    import { fetchStuff } from '@/utils'
    import { useUserStore } from '@/stores/user'

    definePageMeta({
        middleware: ["guest"]
        // or middleware: 'auth'
    })

    const userStore = useUserStore()

    const login_data = ref({
        email: '',
        password: '',
    })

    const login_errors = ref({})

    async function login() {
        const url = 'https://backend.flask-redis.test/v1/auth/login'
        
        try {
            const response = await $fetch(
                url, 
                fetchStuff({
                    method: 'POST',
                    body: JSON.stringify(login_data.value)
                })
            )
            const token = response.auth_token
            userStore.setToken(token)
            login_errors.value = {} // reset errors
            
        } catch (err) {
            login_errors.value = {} // reset errors
            if (err?.response?._data.errors) {
                err.response._data.errors.forEach((error) => {
                    login_errors.value[error.field] = error.message
                }) 
            }
        }
    }

    function clearForm() {
        login_errors.value = {} // reset errors
        login_data.value = {
            email: '',
            password: '',
        } // clear form
    }
</script>

<template>
    <section class="card">
        <header class="card-header">
            <h1 class="card-header-title">
                Login - {{ userStore.token }}
            </h1>
        </header>
        <div class="card-content">
            <form @submit.prevent="login()">
                <div class="field">
                    <label for="register_email" class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input
                            id="register_email"
                            name="email"
                            class="input"
                            :class="login_errors.email ? 'is-danger' : ''"
                            type="email"
                            placeholder="Enter your email address..." 
                            v-model="login_data.email"
                        >
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'fa-envelope']" />
                        </span>
                        <span v-if="login_errors.email" class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'fa-exclamation-triangle']" />
                        </span>
                    </div>
                    <p class="help" :class="login_errors.email ? 'is-danger' : ''">
                        {{ login_errors.email }}
                    </p>
                </div>
                <div class="field">
                    <label for="register_password" class="label">Password</label>
                    <div class="control has-icons-left has-icons-right">
                        <input
                            id="register_password"
                            name="password"
                            class="input"
                            :class="login_errors.password ? 'is-danger' : ''"
                            type="password"
                            placeholder="Enter a password..." 
                            v-model="login_data.password"
                        >
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'fa-key']" />
                        </span>
                        <span v-if="login_errors.password" class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'fa-exclamation-triangle']" />
                        </span>
                    </div>
                    <p class="help" :class="login_errors.password ? 'is-danger' : ''">
                        {{ login_errors.password }}
                    </p>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button type="submit" class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button type="reset" class="button is-link is-light" @click="clearForm()">Clear</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<style>
    .error {
        color: red;
    }
</style>