import { reactive } from 'vue'
import type { HeaderDataType } from '@/types'

export const list: HeaderDataType[] = reactive([
  {
    img: '/src/assets/images/tag/unit.png',
    describe: '原烟气烟尘',
    num: 219,
    detail: 'test1'
  },
  {
    img: '/src/assets/images/tag/device.png',
    describe: '净烟气烟尘',
    num: 61341,
    detail: 'test2'
  },
  {
    img: '/src/assets/images/tag/video.png',
    describe: '原烟气SO2',
    num: 373,
    detail: 'test3'
  },
  {
    img: '/src/assets/images/tag/xiaofangshuan.png',
    describe: '净烟气SO2',
    num: 822,
    detail: 'test4'
  },
  {
    img: '/src/assets/images/tag/huojing.png',
    describe: '原烟气NOX',
    num: 0,
    detail: 'test5'
  },
  {
    img: '/src/assets/images/tag/huojing.png',
    describe: '净烟气NOX',
    num: 0,
    detail: 'test5'
  }
])
