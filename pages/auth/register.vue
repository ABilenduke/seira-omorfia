<script setup>
    import { ref } from 'vue'
    import { fetchStuff } from '@/utils'
    import { useUserStore } from '@/stores/user'

    const userStore = useUserStore()

    const registration_data = ref({
        name: '',
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
    })

    const registration_errors = ref({})

    async function register() {
        const url = 'https://backend.flask-redis.test/v1/auth/register'
        
        try {
            const response = await $fetch(
                url, 
                fetchStuff({
                    method: 'POST',
                    body: JSON.stringify(registration_data.value)
                })
            );
            const token = response.auth_token
            userStore.setToken(token)
            registration_errors.value = {} // reset errors
        } catch (err) {
            registration_errors.value = {} // reset errors
            if (err?.response?._data.errors) {
                err.response._data.errors.forEach((error) => {
                    registration_errors.value[error.field] = error.message
                }) 
            }
        }
    }

    function clearForm() {
        registration_errors.value = {} // reset errors
        registration_data.value = {
            name: '',
            email: '',
            username: '',
            password: '',
            password_confirmation: '',
        } // clear form
    }
</script>

<template>
    <section class="card">
        <header class="card-header">
            <h1 class="card-header-title">
                Registration
            </h1>
        </header>
        <div class="card-content">
            <form @submit.prevent="register()">
                <div class="field">
                    <label for="register_name" class="label">Name</label>
                    <div class="control">
                        <input
                            id="register_name"
                            name="name"
                            class="input"
                            :class="registration_errors.name ? 'is-danger' : ''"
                            type="text"
                            placeholder="Enter your full name..." 
                            v-model="registration_data.name"
                        />
                    </div>
                    <p class="help" :class="registration_errors.name ? 'is-danger' : ''">
                        {{ registration_errors.name }}
                    </p>
                </div>
                <div class="field">
                    <label for="register_email" class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input
                            id="register_email"
                            name="email"
                            class="input"
                            :class="!!registration_errors.email ? 'is-danger' : ''"
                            type="email"
                            placeholder="Enter your email address..." 
                            v-model="registration_data.email"
                        >
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'fa-envelope']" />
                        </span>
                        <span v-if="registration_errors.email" class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'fa-exclamation-triangle']" />
                        </span>
                    </div>
                    <p class="help" :class="registration_errors.email ? 'is-danger' : ''">
                        {{ registration_errors.email }}
                    </p>
                </div>
                <div class="field">
                    <label for="register_username" class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                        <input
                            id="register_username"
                            name="username"
                            class="input"
                            :class="!!registration_errors.username ? 'is-danger' : ''"
                            type="text"
                            placeholder="Enter a username..." 
                            v-model="registration_data.username"
                        >
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'fa-user']" />
                        </span>
                        <span v-if="registration_errors.username" class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'fa-exclamation-triangle']" />
                        </span>
                    </div>
                    <p class="help" :class="registration_errors.username ? 'is-danger' : ''">
                        {{ registration_errors.username }}
                    </p>
                </div>
                <div class="field">
                    <label for="register_password" class="label">Password</label>
                    <div class="control has-icons-left has-icons-right">
                        <input
                            id="register_password"
                            name="password"
                            class="input"
                            :class="registration_errors.password ? 'is-danger' : ''"
                            type="password"
                            placeholder="Enter a password..." 
                            v-model="registration_data.password"
                        >
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'fa-key']" />
                        </span>
                        <span v-if="registration_errors.password" class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'fa-exclamation-triangle']" />
                        </span>
                    </div>
                    <p class="help" :class="registration_errors.password ? 'is-danger' : ''">
                        {{ registration_errors.password }}
                    </p>
                </div>
                <div class="field">
                    <label for="register_password_confirmation" class="label">Password Confirmation</label>
                    <div class="control has-icons-left has-icons-right">
                        <input
                            id="register_password_confirmation"
                            name="password_confirmation"
                            class="input"
                            :class="registration_errors.password_confirmation ? 'is-danger' : ''"
                            type="password"
                            placeholder="Re-enter your password..." 
                            v-model="registration_data.password_confirmation"
                        >
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'fa-key']" />
                        </span>
                        <span v-if="registration_errors.password_confirmation" class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'fa-exclamation-triangle']" />
                        </span>
                    </div>
                    <p class="help" :class="registration_errors.password_confirmation ? 'is-danger' : ''">
                        {{ registration_errors.password_confirmation }}
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

