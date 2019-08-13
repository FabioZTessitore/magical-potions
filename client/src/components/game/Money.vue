<template>
    <div class="money" @click="makeMoney">
        <h3 class="money-heading">
            <font-awesome-icon icon="hand-holding-usd" /> {{ moneyStr }}
        </h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'money'
        ]),
        moneyStr () {
            console.log(this.money)
            return this.money.toFixed(1)
        }
    },
    methods: {
        makeMoney () {
            //this.$store.commit('increment')
        }
    }
}
</script>

<style lang="scss" scoped>
.money {
    font-size: 3rem;
}
</style>