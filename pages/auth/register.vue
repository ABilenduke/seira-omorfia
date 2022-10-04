<script setup>
    import { ref } from 'vue'

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
            const response = await $fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(registration_data.value) // body data type must match "Content-Type" header
            });
            registration_errors.value = {} // reset errors
            console.log(response)
        } catch (err) {
            registration_errors.value = {} // reset errors
            console.log(err?.response?._data)
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
    <div>
        <header>
            <h1>
                Registration
            </h1>
        </header>
        <section>
            <form @submit.prevent="register()">
                <div>
                    <label>
                        <span>
                            name
                        </span>
                        <input type="text" name="name" v-model="registration_data.name" />
                    </label>
                    <p v-if="registration_errors.name" class="error">
                        {{ registration_errors.name }}
                    </p>
                </div>
                <div>
                    <label>
                        <span>
                            email
                        </span>
                        <input type="email" name="email" v-model="registration_data.email" />
                    </label>
                    <p v-if="registration_errors.email" class="error">
                        {{ registration_errors.email }}
                    </p>
                </div>
                <div>
                    <label>
                        <span>
                            username
                        </span>
                        <input type="text" name="username" v-model="registration_data.username" />
                    </label>
                    <p v-if="registration_errors.username" class="error">
                        {{ registration_errors.username }}
                    </p>
                </div>
                <div>
                    <label>
                        <span>
                            password
                        </span>
                        <input type="password" name="password" v-model="registration_data.password" />
                    </label>
                    <p v-if="registration_errors.password" class="error">
                        {{ registration_errors.password }}
                    </p>
                </div>
                <div>
                    <label>
                        <span>
                            password confirmation
                        </span>
                        <input type="password" name="password_confirmation" v-model="registration_data.password_confirmation" />
                    </label>
                    <p v-if="registration_errors.password_confirmation" class="error">
                        {{ registration_errors.password_confirmation }}
                    </p>
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                    <button type="reset"  @click="clearForm()">
                        Clear
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

<style>
    .error {
        color: red;
    }
</style>