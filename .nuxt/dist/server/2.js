exports.ids = [2];
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=9f3e06f4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><div><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.tag)))+" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag,index){return ("<span class=\"tag-default tag-pill ng-binding ng-scope\"><i class=\"ion-close-round\"></i>"+_vm._ssrEscape("\n                    "+_vm._s(tag)+"\n                  ")+"</span>")}))+"</div></fieldset> "+((_vm.isInEditMode)?("<button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Update Article\n            </button>"):("<button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button>"))+"</fieldset></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=9f3e06f4&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',

  async asyncData({
    params,
    store
  }) {
    const slug = params.slug; // console.log(params);
    // console.log(slug);

    if (slug) {
      const {
        data
      } = await Object(article["d" /* getArticle */])(slug);
      return {
        article: data.article
      };
    } else {
      return {
        article: {}
      };
    }
  },

  data() {
    return {
      slug: '',
      tag: '',
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    };
  },

  methods: {
    async onSubmit() {
      // console.log({
      //   article: this.article
      // })
      const {
        data,
        status
      } = await Object(article["a" /* addArticle */])({
        article: this.article
      }, this.$store); // const data = await addArticle2({
      //   article: this.article
      // })

      if (status == 200) {
        this.$router.push('/article/' + data.article.slug);
      } // console.log(data);

    },

    async onUpdate() {
      const {
        data,
        status
      } = await Object(article["h" /* updateArticle */])(this.slug, {
        article: this.article
      }, this.$store);

      if (status == 200) {
        this.$router.push('/article/' + data.article.slug);
      }
    },

    addTag(tag) {
      this.article.tagList.push(tag);
      this.tag = '';
    },

    removeTag(tag) {
      this.article.tagList = this.article.tagList.filter(item => item !== tag);
    }

  },
  computed: {
    isInEditMode() {
      return this.slug && true;
    }

  },

  mounted() {
    this.slug = this.$route.params.slug;
    console.log(this.$route);
  }

});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4630b134"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map