import { createApi } from '@reduxjs/toolkit/query/react'
import { request } from 'utils/api'

export const baseQuery = async (config) => {
  try {
    const result = await request(config)
    return { data: result.data }
  } catch (err) {
    return {
      error: { status: err.response?.status, data: err.response?.data?.errors },
    }
  }
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints(build) {
    return {
      getTest: build.query({
        query: () => ({
          url: '/get',
          method: 'get',
        }),
      }),
      postTest: build.mutation({
        query: (data) => ({
          url: '/post',
          method: 'post',
          data,
        }),
      }),
    }
  },
})
