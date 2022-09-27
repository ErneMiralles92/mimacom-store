/* eslint-disable @typescript-eslint/no-explicit-any */

/** A service wrapper for axios*/
import axios, { AxiosInstance, AxiosResponse } from 'axios'
const { VITE_API_URL } = import.meta.env

const axiosInstance: AxiosInstance = axios.create({
  baseURL: VITE_API_URL || 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
})

interface Params {
  [name: string]: any
}

class HttpService {
  get(url: string, config: { params: Params }): Promise<AxiosResponse> {
    return axiosInstance.get(url, config)
  }

  patch(url: string, data: any): Promise<any> {
    return axiosInstance.patch(url, data)
  }

  // The other methods can be added here.
}
export default new HttpService()
