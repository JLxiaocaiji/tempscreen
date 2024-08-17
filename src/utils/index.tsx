import { defineAsyncComponent } from 'vue'
import type { Component } from 'vue'

import { Spin } from 'ant-design-vue'

interface Options {
  size?: 'default' | 'small' | 'large'
  delay?: number
  timeout?: number
  loading?: boolean
  retry?: boolean
}

export function createAsyncComponent(loader: () => Promise<Component>, options: Options = {}) {
  const { size = 'small', delay = 100, timeout = 30000, loading = false, retry = true } = options

  return defineAsyncComponent({
    loader,
    loadingComponent: loading ? <Spin spinning={true} size={size} /> : undefined,
    timeout,
    onError: !retry
      ? () => {}
      : (error, retry, fail, attempts) => {
          console.log('error')
          console.log(error)
          // 检查错误信息（error.message）是否包含 “fetch” 这个词
          // 尝试次数（attempts）是否小于或等于 3
          if (error.message.match(/fetch/) && attempts <= 3) {
            retry()
          } else {
            fail()
          }
        }
  })
}
