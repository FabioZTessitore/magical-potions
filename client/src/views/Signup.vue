<template>
    <div class="sigunp">
        <div class="signup__heading">
            Sign Up to Magical Potions
        </div>

        <div class="signup__form">
            <form @onSubmit="onSignupSubmit">
                <div class="form-group">
                    <label for="useremail">Email Address:</label>
                    <input id="useremail" type="email" v-model="form.email" required placeholder="Enter Email">
                    <span class="description">"We'll never share your email with anyone else.</span>
                </div>

                <div class="form-group">
                    <label for="username">Username:</label>
                    <input id="username" type="text" v-model="form.username" required placeholder="Enter Username">
                </div>

                <div class="form-group">
                    <label for="userpassword">Password:</label>
                    <input id="userpassword" type="password" v-model="form.password" required placeholder="Enter Password">
                </div>
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                email: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        onSignupSubmit () {

        }
    }
}
</script>

<style lang="scss" scoped>
.signup {
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
        justify-content: center;

        .form-group {
            margin-bottom: 2rem;
        }

        .description {
            display: block;
        }
    }
}
</style>