import axios from 'axios'

const client = axios.create(
    {baseURL: 'http://10.2.1.46/api/users'}
);

export default {
    create(data) {
        return client.post('/', data)
      },
      list() {
        return client.get('/')
      },
      get(id) {
        return client.get(`/${id}`)
      },
      update(id, data) {
        return client.put(`/${id}`, data)
      },
      delete(id) {
        return client.delete(`/${id}`)
      },
}