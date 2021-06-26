<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <div>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tag"
                  @keyup.enter.prevent.stop="addTag(tag)"
                />
                  <div class="tag-list">
                    <!-- ngRepeat: tag in $ctrl.article.tagList -->
                    <span 
                      v-for="(tag, index) in article.tagList" 
                      :key="index"
                      class="tag-default tag-pill ng-binding ng-scope">
                      <i class="ion-close-round" @click="removeTag(tag)"></i>
                      {{ tag }}
                    </span>
                    <!-- end ngRepeat: tag in $ctrl.article.tagList -->
                  </div>
              </fieldset>
              <button v-if="isInEditMode" class="btn btn-lg pull-xs-right btn-primary" type="button" @click="onUpdate">
                Update Article
              </button>
              <button v-else class="btn btn-lg pull-xs-right btn-primary" type="button" @click="onSubmit">
                Publish Article
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { 
        getArticle,
        addArticle,
        addArticle2,
        updateArticle
    } from '@/api/article'

export default {
    // 在路由匹配组件渲染之前会先执行中间件处理
    middleware: 'authenticated',
    name: 'EditorIndex',
        async asyncData ({ params, store }) {
            const slug = params.slug
            // console.log(params);
            // console.log(slug);
            if (slug) {
              const { data } = await getArticle(slug)
              return {
                article: data.article
              }
            } else {
              return {
                article: {}
              }
            }
        },
    data () {
      return {
        slug: '',
        tag: '',
        article: {
          title: '',
          description: '',
          body: '',
          tagList: []
        }
      }
    },
    methods: {
      async onSubmit() {
        // console.log({
        //   article: this.article
        // })
        const { data, status } = await addArticle({
          article: this.article
        }, this.$store)
        // const data = await addArticle2({
        //   article: this.article
        // })
        if (status == 200) {
          this.$router.push('/article/' + data.article.slug)
        }
        // console.log(data);
      },
      async onUpdate() {
          const { data, status } = await updateArticle(this.slug, {
            article: this.article
          }, this.$store)
          if (status == 200) {
            this.$router.push('/article/' + data.article.slug)
          }
      },
      addTag(tag) {
        this.article.tagList.push(tag)
        this.tag = ''
      },
      removeTag(tag) {
        this.article.tagList = this.article.tagList.filter(item => item !== tag)
      }
    },
    computed: {
        isInEditMode () {
            return this.slug && true
        }
    },
    mounted() {
      this.slug = this.$route.params.slug
      console.log(this.$route);
    }
};
</script>

<style>
</style>