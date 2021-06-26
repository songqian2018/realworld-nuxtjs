<template>
    <div class="article-meta">
        <nuxt-link :to="{
            name: 'profile',
            params: {
                username: article.author.username
            }
        }">
            <img :src="article.author.image" />
        </nuxt-link>
        <div class="info">
            <nuxt-link :to="{
                name: 'profile',
                params: {
                    username: article.author.username
                }
            }" class="author">{{ article.author.username }}</nuxt-link>
            <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
        </div>


        <template v-if="isMineArticle && deleteBar">
            <nuxt-link 
                class="btn btn-outline-secondary btn-sm" 
                :to="{
                    name: 'update',
                    params: {
                        slug: article.slug
                    }
                }">
                <i class="ion-edit"></i> Edit Article
            </nuxt-link>

            <button 
                class="btn btn-outline-danger btn-sm">
                <i class="ion-trash-a"></i> Delete Article
            </button>
        </template>
        <template v-else>
            <button 
                class="btn btn-sm btn-outline-secondary"
                :class="{
                    active: article.author.following
                }"
            >
                <i class="ion-plus-round"></i>
                &nbsp; Follow {{ article.author.username }} <span class="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary">
                <i class="ion-heart"></i>
                &nbsp; Favorite Post <span class="counter">(29)</span>
            </button>
        </template>


    </div>
</template>

<script>
    export default {
        name: 'ArticleMeta',
        props: {
            article: {
                type: Object,
                required: true
            },
            deleteBar: {
                type: Boolean,
                required: false
            }
        },
        computed: {
            isMineArticle () {
                // console.log(this.article);
                // console.log(this.$store);
                return this.article.author.username === this.$store.state.user.username
            }
        },
        mounted () {
            // console.log(this.isMineArticle);
            // console.log(this.deleteBar);
        }
    }
</script>

<style>

</style>