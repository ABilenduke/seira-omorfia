<script setup>
    import { ref } from 'vue'
    const menuIsActive = ref(null)
</script>

<template>
    <section>
        <!-- <header>
            H!
        </header> -->
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <NuxtLink to="/" class="navbar-item">
                    <img src="~/assets/img/seira_logo.png" width="120" height="auto">
                </NuxtLink>

                <a role="button" class="navbar-burger" :class="menuIsActive ? 'is-active' : ''" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="menuIsActive = !menuIsActive">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu" :class="menuIsActive ? 'is-active' : ''">
                <div class="navbar-start">
                    
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <NuxtLink to="/auth/register" class="button is-primary">
                                <strong>Sign up</strong>
                            </NuxtLink>
                            <NuxtLink to="/auth/login" class="button is-light">
                                Login
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <main class="p-3">
            <slot />
        </main>
        <footer class="footer">
            B!E
        </footer>
    </section>
</template>

<style>
.navbar {
    min-height: 2.5rem;
}
</style>