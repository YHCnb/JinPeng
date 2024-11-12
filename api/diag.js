import request from '@/utils/request'
import upload from '@/utils/upload'

// 查询诊断信息列表
export function listDiag(query) {
  return request({
    url: '/view/diag/list',
    method: 'get',
    params: query
  })
}

// 查询诊断信息详细
export function getDiag(diagId) {
  return request({
    url: '/view/diag/' + diagId,
    method: 'get'
  })
}

// 新增诊断信息
export function addDiag(data) {
  return request({
    url: '/view/diag',
    method: 'post',
    data: data
  })
}

// 修改诊断信息
export function updateDiag(data) {
  return request({
    url: '/view/diag',
    method: 'put',
    data: data
  })
}

// 删除诊断信息
export function delDiag(diagId) {
  return request({
    url: '/view/diag/' + diagId,
    method: 'delete'
  })
}

// 图片转文本
export function imageToText(data) {
  return request({
    url: '/view/diag/imageToText',
    method: 'post',
    data: data
  })
}

// 生成影像报告的诊断内容
export function generateImageReport(data1) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: 'http://highspeed.beyesgroup.net:38881/v1/chat/completions',
      data: {
        "model": "baichuan2-13b",
        "messages": [{
          "role": "user",
          "content": "这是一位患者的放射科影像报告的描述字段内容：" + data1 +
            "假设你是一名经验丰富的放射科专家，并且你拥有充足的相关医学专业知识，请你根据上述描述内容生成该名患者的影像报告的诊断内容，以便其它医生和该患者了解这份影像中的关键信息。"
        }],
      },
      header: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "post",
      success: (res) => {
        var js = res.data.choices
        var ans = js[0].message.content
        // var ans=res.data
        resolve(ans); // 将请求成功的结果传递给Promise的resolve方法
      },
      fail: (err) => {
        reject(err); // 将请求失败的错误传递给Promise的reject方法
      }
    });
  });
}

export function getMRIFeedback(data1) {
  return request({
    url: '/view/diag/BigDataApiMRI',
    method: 'post',
    data: {
      "model": "baichuan2-13b",
      "messages": [{
        "role": "user",
        "content": "这是一位患者的放射科影像报告的描述字段内容：" + data1 +
          "假设你是一名经验丰富的放射科专家，并且你拥有充足的相关医学专业知识，请你根据上述描述内容生成该名患者的影像报告的诊断内容，以便其它医生和该患者了解这份影像中的关键信息。"
      }],
    },
    stream: "false",
  })
}

export function getCTFeedback(data1) {
  return request({
    url: '/view/diag/BigDataApiCT',
    method: 'post',
    data: {
      "model": "baichuan2-13b",
      "messages": [{
        "role": "user",
        "content": "这是一位患者的放射科影像报告的描述字段内容：" + data1 +
          "该名患者的性别为，年龄为岁。假设你是一名经验丰富的放射科专家，并且你拥有充足的相关医学专业知识，请你根据上述描述内容生成该名患者的CT影像报告的诊断内容，以便其它医生和该患者了解这份CT影像中的关键信息。"
      }],
    },
    stream: "false",
  })
}

export function getXrayFeedback(data1) {
  return request({
    url: '/view/diag/BigDataApiXray',
    method: 'post',
    data: {
      "model": "baichuan2-13b",
      "messages": [{
        "role": "user",
        "content": "这是一位患者的放射科影像报告的描述字段内容：" + data1 +
          "该名患者的性别为，年龄为岁。假设你是一名经验丰富的放射科专家，并且你拥有充足的相关医学专业知识，请你根据上述描述内容生成该名患者的CT影像报告的诊断内容，以便其它医生和该患者了解这份CT影像中的关键信息。"
      }],
    },
    stream: "false",
  })
}

export function sendImg(data1) {
  return upload({
    url: '/common/upload',
    filePath: data1,
    name: 'file',
    header: {
      "Content-Type": "multipart/form-data"
    },
    formData: {
      'file': data1,
      'user': 'test',
    },
  })
}