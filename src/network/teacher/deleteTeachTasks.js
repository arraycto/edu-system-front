import { request } from '../request'

export function deleteTeachTasks(tno, cno, data) {
  return request({
    method: 'delete',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    url: '/api/v1/teacher/info/' + tno + '/tasks/' + 'course/' + cno,
    data: data
  })
}