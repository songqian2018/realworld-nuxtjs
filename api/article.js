// import request from '@/utils/request'
import { request } from '@/plugins/request'
import axios from "axios";

// 获取公共文章列表
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTczMTQwLCJ1c2VybmFtZSI6InNvbmdxaWFuIiwiZXhwIjoxNjI5MjU5NTM5fQ.Tvm27A9YJ-mTjMYeUnTuEhrvGckDZJyJn3MMI7xZMsw"
// 获取公共文章列表
export const getYourFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params,
        // headers: {
        //     // 添加用户身份，数据格式：Token空格Token数据
        //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTczMTQwLCJ1c2VybmFtZSI6InNvbmdxaWFuIiwiZXhwIjoxNjI5MjU5NTM5fQ.Tvm27A9YJ-mTjMYeUnTuEhrvGckDZJyJn3MMI7xZMsw`
        // }
    })
}

// 添加点赞
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}

// 取消点赞
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}

// 获取文章详情
export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}

// 获取文章评论
export const getComments = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`
    })
}


// 新增文章
export const addArticle = (params, store) => {
    // console.log(params);
    const { user } = store.state
    return axios.post('https://conduit.productionready.io/api/articles', params, {headers: {
        Authorization: `Token ${user.token}`
    }})
}

// 新增文章
export const updateArticle = (slug, params, store) => {
    // console.log(params);
    const { user } = store.state
    return axios.put(`https://conduit.productionready.io/api/articles/${slug}`, params, {headers: {
        Authorization: `Token ${user.token}`
    }})
}


export const addArticle2 = (params) => {
    return request({
        method: 'POST',
        url: '/api/articles',
        params
    })
}