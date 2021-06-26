exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateArticle; });
/* unused harmony export addArticle2 */
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
// import request from '@/utils/request'

 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTczMTQwLCJ1c2VybmFtZSI6InNvbmdxaWFuIiwiZXhwIjoxNjI5MjU5NTM5fQ.Tvm27A9YJ-mTjMYeUnTuEhrvGckDZJyJn3MMI7xZMsw"
// 获取公共文章列表

const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params // headers: {
    //     // 添加用户身份，数据格式：Token空格Token数据
    //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTczMTQwLCJ1c2VybmFtZSI6InNvbmdxaWFuIiwiZXhwIjoxNjI5MjU5NTM5fQ.Tvm27A9YJ-mTjMYeUnTuEhrvGckDZJyJn3MMI7xZMsw`
    // }

  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 新增文章

const addArticle = (params, store) => {
  // console.log(params);
  const {
    user
  } = store.state;
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://conduit.productionready.io/api/articles', params, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  });
}; // 新增文章

const updateArticle = (slug, params, store) => {
  // console.log(params);
  const {
    user
  } = store.state;
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`https://conduit.productionready.io/api/articles/${slug}`, params, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  });
};
const addArticle2 = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    params
  });
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=f3186daa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"home-page\">","</div>",[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                                        active: _vm.tab === 'your_feed'
                                    },attrs:{"exact":"","to":{
                                        name: 'home',
                                        query: {
                                            tab: 'your_feed'
                                        }
                                    }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                                        active: _vm.tab === 'global_feed'
                                    },attrs:{"exact":"","to":{
                                        name: 'home',
                                        query: {
                                            tab: 'global_feed'
                                        }
                                    }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                                        active: _vm.tab === 'tag'
                                    },attrs:{"exact":"","to":{
                                        name: 'home',
                                        query: {
                                            tab: 'tag',
                                            tag: _vm.tag
                                        }
                                    }}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                                name: 'profile',
                                params: {
                                    username: article.author.username
                                }
                            }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                                    name: 'profile',
                                    params: {
                                        username: article.author.username
                                    }
                                }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                                    active: article.favorited
                                }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n                            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                            name: 'article',
                            params: {
                                slug: article.slug
                            }
                        }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                                    active: item === _vm.page
                                }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                                        name: 'home',
                                        query: {
                                            page: item,
                                            tag: _vm.$route.query.tag,
                                            tab: _vm.tab
                                        }
                                    }}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(item,index){return _c('nuxt-link',{key:index,staticClass:"tag-pill tag-default",attrs:{"to":{
                                    name: 'home',
                                    query: {
                                        tab: 'tag',
                                        tag: item
                                    }
                                }}},[_vm._v("\n                                "+_vm._s(item)+"\n                            ")])}),1)],2)])],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=f3186daa&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js
// import request from '@/utils/request'
 // 获取文章标签列表

const getTags = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomePage',

  // 3.
  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 20;
    const {
      tag
    } = query;
    const tab = query.tab || 'global_feed';
    const loadArticles = store.state.user && tab === 'your_feed' ? api_article["g" /* getYourFeedArticles */] : api_article["e" /* getArticles */];
    const [articleRes, tagRes] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    articles.forEach(article => article.favoriteDisabled = false); // console.log(tags);

    return {
      page,
      limit,
      tags,
      tag,
      tab,
      articles,
      articlesCount
    };
  },

  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;
      console.log(article.favoriteDisabled);

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["c" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
      console.log(article.favoriteDisabled);
    }

  }
}); // 1.
// async asyncData ({ query }) {
//     const page = Number.parseInt(query.page || 1)
//     const limit = 20
//     const { data } = await getArticles({
//         limit,
//         offset: (page - 1) * limit
//     })
//     const { data: tagData } = await getTags()
//     console.log(tagData);
//     return {
//         page,
//         limit,
//         tags: tagData,
//         articles: data.articles,
//         articlesCount: data.articlesCount
//     }
// },
// 2. 引入Promise.all
// async asyncData ({ query, store }) {
//     const page = Number.parseInt(query.page || 1)
//     const limit = 20
//     const { tag } = query
//     const tab = query.tab || 'global_feed'
//     const [ articleRes, tagRes ] = await Promise.all([
//         getArticles({
//             limit,
//             offset: (page - 1) * limit,
//             tag
//         }),
//         getTags()
//     ])
//     const { articles, articlesCount } = articleRes.data;
//     const { tags } = tagRes.data
//     console.log(tags);
//     return {
//         page,
//         limit,
//         tags,
//         tag,
//         tab,
//         articles,
//         articlesCount
//     }
// },
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5de7a926"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map