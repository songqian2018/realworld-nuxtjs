<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" type="button" @click="update()">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr>
          <button class="btn btn-outline-danger" @click="logout()">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined
import { updateUser } from '@/api/user'

export default {
    middleware: 'authenticated',
    name: 'SettingsIndex',
    async asyncData ({ store }) {

        // console.log(store.state.user);

        let { image, username, bio, email  } = store.state.user

        // console.log(tags);
        return {
          image, 
          username, 
          bio, 
          email,
          password: ''
        }
    },
    methods: {
      async update () {
        const data = await updateUser({ image: this.image, username: this.username, bio: this.bio, email: this.email, password: this.password })

        if (data) {
          const user = data.data.user
          if (user) {
            this.$store.commit('setUser', user)
            Cookie.set('user', user)
          }
        }

        this.$router.push(`/profile/${this.username}/my_articles/?page=1`)
      },
      logout () {
        this.$store.commit('setUser', null)
        Cookie.remove('user')
        this.$router.push('/')
      }
    }
};
</script>

<style>
</style>