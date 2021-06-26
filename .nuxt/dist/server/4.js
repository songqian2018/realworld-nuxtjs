exports.ids = [4];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=d4627bc4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> "+((!_vm.user)?("<button class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n              Follow "+_vm._s(_vm.profile.username)+"\n          ")+"</button>"):"<!---->")+" "),(_vm.user)?_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n          ")]):_vm._e()],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'my_articles'
                },attrs:{"exact":"","to":("/profile/" + _vm.username + "/my_articles/?page=1")}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'favorited_articles'
                },attrs:{"exact":"","to":("/profile/" + _vm.username + "/favorited_articles/?page=1")}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
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
              }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
                  slug: article.slug
              }
          }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),(article.tagList.length)?_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag,index){return _c('li',{key:index,staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(tag))])}),0):_vm._e()])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                        active: item === _vm.page
                    }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":("/profile/" + _vm.username + "/" + _vm.tab + "/?page=" + item)}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=d4627bc4&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/profile.js
 // 获取个人身份信息

const getProfile = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/profiles/' + params.username
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'UserProfile',
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },

  async asyncData({
    params,
    query,
    store
  }) {
    const username = params.username;
    const tab = params.tab;
    const p = query.page;
    const {
      data
    } = await getProfile({
      username
    });
    const {
      profile
    } = data; // console.log(params);
    // console.log(data);
    // console.log(p);

    const page = Number.parseInt(p || 1);
    const limit = 5;
    let getData = {};

    if (tab === 'my_articles') {
      getData = {
        author: username,
        limit,
        offset: (page - 1) * limit
      };
    } else {
      getData = {
        favorited: username,
        limit,
        offset: (page - 1) * limit
      };
    } // console.log(getData);


    const {
      data: {
        articles,
        articlesCount
      }
    } = await Object(api_article["e" /* getArticles */])(getData);
    articles.forEach(article => article.favoriteDisabled = false); // console.log(articles);
    // console.log(articlesCount);

    return {
      page,
      limit,
      profile,
      tab,
      username,
      articles,
      articlesCount
    };
  },

  watchQuery: ['page', 'tab'],
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true; // console.log(article.favoriteDisabled);

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

      article.favoriteDisabled = false; // console.log(article.favoriteDisabled);
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "30a30218"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map