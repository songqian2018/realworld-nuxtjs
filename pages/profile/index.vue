<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button v-if="!user" class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp; Follow {{ profile.username }}
            </button>
            <nuxt-link class="btn btn-sm btn-outline-secondary action-btn" v-if="user" to="/settings">
              <i class="ion-gear-a"></i> Edit Profile Settings
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                  <!-- :to="{
                    name: '',
                    params: {
                      username: username,
                      tab: 'my_articles'
                    }
                  }" 
                  :to="`/profile/${username}/my_articles`"
                  -->
                <nuxt-link 
                  class="nav-link"
                  :class="{
                    active: tab === 'my_articles'
                  }" 
                  exact
                  :to="`/profile/${username}/my_articles/?page=1`"
                  >My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                  <!-- :to="{
                    name: 'profile',
                    query: {
                      username: username,
                      tab: 'favorited_articles'
                    }
                  }" -->
                <nuxt-link 
                  class="nav-link"
                  :class="{
                    active: tab === 'favorited_articles'
                  }"
                  exact
                  :to="`/profile/${username}/favorited_articles/?page=1`"
                  >Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

          <div 
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }"><img :src="article.author.image" /></nuxt-link>
              <div class="info">
                <nuxt-link class="author" :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }">{{ article.author.username }}</nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button 
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                  active: article.favorited
                }"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link class="preview-link" :to="{
                name: 'article',
                params: {
                    slug: article.slug
                }
            }">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list" v-if="article.tagList.length">
                <li class="tag-default tag-pill tag-outline" v-for="(tag, index) in article.tagList" :key="index">{{ tag }}</li>
              </ul>
            </nuxt-link>
          </div>

          <!-- 分页列表 -->
          <nav>
              <ul class="pagination">
                  <li
                      class="page-item"
                      :class="{
                          active: item === page
                      }"
                      v-for="item in totalPage"
                      :key="item"
                  >
                      <nuxt-link
                          class="page-link"
                          :to="`/profile/${username}/${tab}/?page=${item}`"
                      >{{ item }}</nuxt-link>
                  </li>
              </ul>
          </nav>
          <!-- /分页列表 -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { 
    getArticles, 
    addFavorite,
    deleteFavorite
} from '@/api/article'
import { mapState } from 'vuex'
import { getProfile } from '@/api/profile'

export default {
    middleware: 'authenticated',
    name: 'UserProfile',
    computed: {
        ...mapState(['user']),
        totalPage () {
            return Math.ceil(this.articlesCount / this.limit)
        }
    },
    async asyncData ({ params, query, store }) {
        const username = params.username
        const tab = params.tab
        const p = query.page

        const { data } = await getProfile({ username })
        const { profile } = data
        // console.log(params);
        // console.log(data);
        // console.log(p);

        const page = Number.parseInt(p || 1)
        const limit = 5
        let getData = { };
        if (tab === 'my_articles') {
            getData = { 
                author: username,
                limit,
                offset: (page - 1) * limit,
            };
        } else {
            getData = { 
                favorited: username,
                limit,
                offset: (page - 1) * limit,
            };
        }
        // console.log(getData);
        const { data: { articles, articlesCount } } = await getArticles(getData)

        articles.forEach(article => article.favoriteDisabled = false)
        // console.log(articles);
        // console.log(articlesCount);

        return {
          page,
          limit,
          profile,
          tab,
          username,
          articles, 
          articlesCount
        }
    },
    watchQuery: ['page', 'tab'],
        methods: {
            async onFavorite (article) {
                article.favoriteDisabled = true
                // console.log(article.favoriteDisabled);
                if (article.favorited) {
                    // 取消点赞
                    await deleteFavorite(article.slug)
                    article.favorited = false
                    article.favoritesCount += -1
                } else {
                    await addFavorite(article.slug)
                    article.favorited = true
                    article.favoritesCount += 1
                }
                article.favoriteDisabled = false
                // console.log(article.favoriteDisabled);
            }
        }
};
</script>

<style>
</style>