import { reactive } from "vue";

interface headerDataType {
  img?: string;
  describe?: string;
  num?: number;
  detail?: Record<string, string | number | undefined>[];
}

export const list: headerDataType[] = reactive([
  {
    img: "/images/unit.png",
    describe: "接入单位",
    num: 219,
    detail: [
      { describe: "在线单位数", num: 219 },
      { describe: "离线单位数", num: 0 },
    ],
  },
  {
    img: "/images/device.png",
    describe: "接入设备数",
    num: 61341,
    detail: [
      { describe: "用传装置数", num: 216 },
      { describe: "4 G 网关数 ", num: 196 },
      { describe: "其他设备数", num: 60929 },
    ],
  },
  {
    img: "/images/video.png",
    describe: "接入视频数",
    num: 373,
  },
  {
    img: "/images/xiaofangshuan.png",
    describe: "消防水系统",
    num: 822,
  },
  {
    img: "/images/huojing.png",
    describe: "实时火警",
    num: 0,
  },
]);