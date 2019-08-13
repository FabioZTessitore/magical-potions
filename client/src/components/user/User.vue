<template>
    <div class="user">
        Welcome {{ user.username }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'user'
        ])
    }
}
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
    font-size: 2rem;
}
</style>