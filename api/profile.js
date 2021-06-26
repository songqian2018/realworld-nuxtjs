import { request } from '@/plugins/request'

// 获取个人身份信息
export const getProfile = params => {
    return request({
        method: 'GET',
        url: '/api/profiles/' + params.username,
    })
}