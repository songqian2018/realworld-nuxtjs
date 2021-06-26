<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
                    <p class="text-xs-center">
                    <!-- <a href="">Have an account?</a> -->
                    <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
                    <nuxt-link v-else to="/login">Have an account?</nuxt-link>
                    </p>

                    <ul class="error-messages">
                        <template
                            v-for="(messages, field) in errors"
                        >
                            <li
                                v-for="(message, index) in messages"
                                :key="index"
                            >{{ field }} {{ message }}</li>
                        </template>
                    </ul>

                    <form @submit.prevent="onSubmit">
                        <fieldset v-if="!isLogin" class="form-group">
                            <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" required minlength="0">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            {{ isLogin ? 'Sign in' : 'Sign up' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import request from '../utils/request'
import { login, register } from '@/api/user'

// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined

export default {
    middleware: 'notAuthenticated',
    name: 'LoginIndex',
    computed: {
        isLogin () {
            return this.$route.name === 'login'
        }
    },
    data () {
        return {
            user: {
                username: '',
                email: '921235158@qq.com',
                password: 'songqian'
            },
            errors: {}
        }
    },

    methods: {
        // 1.
        // async onSubmit () {
        //     const { data } = await request({
        //         method: 'POST',
        //         url: '/api/users/login',
        //         data: {
        //             user: this.user
        //         }
        //     })
        //     console.log(data);
        // }

        // 2.
        // async onSubmit() {
        //     const { data } = await login({
        //         user: this.user
        //     })
        // }

        // 3.
        // async onSubmit() {
        //     try {
        //         const { data } = await login({
        //             user: this.user
        //         })
        //         this.$router.push('/')
        //     } catch(err) {
        //         // console.log('请求失败', err)
        //         // console.dir(err)
        //         this.errors = err.response.data.errors
        //     }
        // }

        // 4.
        // async onSubmit () {
        //     try {
        //         const { data } = this.isLogin
        //             ? await login({
        //                 user: this.user
        //             })
        //             : await register({
        //                 user: this.user
        //             })
        //         // 跳转到首页
        //         this.$router.push('/')
        //     } catch (err) {
        //         this.errors = err.response.data.errors
        //     }
        // }

        // 5.
        // async onSubmit () {
        //     try {
        //         const { data } = this.isLogin
        //             ? await login({
        //                 user: this.user
        //             })
        //             : await register({
        //                 user: this.user
        //             })
        //         // 保存用户的登录状态
        //         this.$store.commit('setUser', data.user)
        //         // 跳转到首页
        //         this.$router.push('/')
        //     } catch (err) {
        //         this.errors = err.response.data.errors
        //     }
        // }

        // 6.
        async onSubmit () {
            // console.log(this);
            try {
                const { data } = this.isLogin
                    ? await login({
                        user: this.user
                    })
                    : await register({
                        user: this.user
                    })
                // console.log(data);
                // 保存用户的登录状态
                this.$store.commit('setUser', data.user)

                // 为了防止页面刷新数据丢失，我们需要把数据持久化
                Cookie.set('user', data.user)

                // 跳转到首页
                this.$router.push('/')
            } catch (err) {
                this.errors = err.response.data.errors
            }
        }
    
    }
}
</script>

<style>

</style>