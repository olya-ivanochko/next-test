import axios from 'axios'
import qs from 'qs'

export function getBaseURL() {
  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT
  return apiEndpoint
}

axios.defaults.baseURL = getBaseURL()
axios.defaults.timeout = 20000 // Max time limit: 20s
axios.defaults.method = 'GET'
axios.defaults.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'brackets' })

export function jsonConfig(config) {
  config.headers = {
    ...config.headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  return config
}

export function request(config) {
  if (config.data) {
    jsonConfig(config)
  }

  return axios.request(config)
}

export default axios
