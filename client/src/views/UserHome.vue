<template>
    <div class="userhome">
        UserHome

        <app-logo></app-logo>

        <app-user></app-user>

        <div class="game">
            <app-money></app-money>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/shared/Logo.vue'
import User from '@/components/user/User.vue'
import Money from '@/components/game/Money'

export default {
    components: {
        appLogo: Logo,
        appUser: User,
        appMoney: Money
    },
    created () {
        if (!this.$store.state.user.username)   return this.$router.push('/')
    }
}
</script>

<style lang="scss" scoped>
.userhome {
    .game {
        margin-top: 6rem;
        display: flex;
        justify-content: space-evenly;
    }
}
</style>