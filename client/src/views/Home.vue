<template>
  <div class="home">
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>