<template>
  <div class="home">
    <app-header></app-header>

    <main class="main">

      <div class="potion">
        <span class="potion__figure">
          <font-awesome-icon icon="wine-bottle" />
        </span>
      </div>

      <div class="login">
        <app-login></app-login>
        <p class="login__signup">New to <strong>Magical Potions</strong>? <router-link to="/signup">Create an account</router-link></p>
      </div>

    </main>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Login from '@/views/Login.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appLogin: Login
  }
}
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 12rem;
}

.potion {
  font-size: 20rem;
  color: #6b13c2;
}

.login {
  &__signup {
    font-size: 1.2rem;
  }
}
</style>