<template>
    <div class="login">
        <div class="login__form">
            <div class="form-group">
                <label for="username">Username:</label>
                <input id="username" type="text" v-model="form.username" required placeholder="Enter Username">
            </div>

            <div class="form-group">
                <label for="userpassword">Password:</label>
                <input id="userpassword" type="password" v-model="form.password" required placeholder="Enter Password">
            </div>
            
            <button type="button" @click="onLoginSubmit">Login</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data () {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapGetters([
            'socket'
        ])
    },
    methods: {
        ...mapActions([
            'setUserData'
        ]),
        onLoginSubmit () {
            this.socket.emit('authentication', this.form)

        }
    },
    created () {
        const me = this

        this.socket.off('loginResponse')
        this.socket.on('loginResponse', function (data) {
            // errors are handled by 'unauthorized'

            me.$store.dispatch('setUserData', data)
            me.$router.push('userhome')
        })
        
        this.socket.off('unauthorized')
        this.socket.on('unauthorized', function(err){
            console.log("There was an error with the authentication:", err.message);
        });
    }
}
</script>

<style lang="scss" scoped>
.login {
    margin-bottom: 3rem;

    &__heading {
        font-size: 6rem;
        text-align: center;
        font-weight: 300;
        margin-bottom: 4rem;
    }

    &__form {
        width: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .form-group {
            margin-bottom: 2rem;
        }
    }
}
</style>