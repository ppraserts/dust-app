import Axios from 'axios'
const RESOURCE_NAME = '/stations'
// import json from '../data/test.json'
export default {
  getAll () {
    return Axios.get(RESOURCE_NAME)
  },
  get (id, type) {
    return Axios.get(`${RESOURCE_NAME}/${id}/${type}`)
  }
}
