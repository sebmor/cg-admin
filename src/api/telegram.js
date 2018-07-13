import api from './../utils/httpApi'

export function broadcastMessage (messageData) {
  return api.post('/admin/broadcast', {
    message: messageData.sendMessage
  })
}
