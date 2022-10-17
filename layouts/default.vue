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
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger" :class="menuIsActive ? 'is-active' : ''" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="menuIsActive = !menuIsActive">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu" :class="menuIsActive ? 'is-active' : ''">
                <div class="navbar-start">
                    <NuxtLink to="/" class="navbar-item">
                        Home page
                    </NuxtLink>
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