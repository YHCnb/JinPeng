import request from '@/utils/request'

export function sendtext(data) {
  return request({
    url: '/posttext',///写下api
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}