<template>
    <div class="userhome">
        UserHome

        <app-logo></app-logo>

        <app-user></app-user>
    </div>
</template>

<script>
import Logo from '@/components/shared/Logo.vue'
import User from '@/components/user/User.vue'

export default {
    components: {
        appLogo: Logo,
        appUser: User
    },
    created () {
        if (!this.$store.state.user.username)   return this.$router.push('/')
    }
}
</script>