<template>
    <h1>
        verifying...
    </h1>
</template>

<script setup>
    import { fetchStuff } from '@/utils'

    const route = useRoute()
    const token = route.query.token

    if (token) {
        verify_email(token)
    }

    
    async function verify_email(token) {
        const url = `https://backend.flask-redis.test/v1/email_verification`
        
        try {
            const response = await $fetch(
                url, 
                fetchStuff({
                    method: 'POST',
                    body: JSON.stringify({token: token})
                }),
            );
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
</script>