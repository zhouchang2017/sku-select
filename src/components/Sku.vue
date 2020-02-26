<template>
    <div class="flex flex-col">
        <div class="flex flex-col p-3" v-if="product">
            <div class="text-gray-700 font-semibold">库存信息</div>
            <table class="min-w-full leading-normal mb-6">
                <thead class="table w-full">
                    <tr>
                        <th
                            v-for="name in cols"
                            :key="name"
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >{{name}}</th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >库存</th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >价格</th>
                    </tr>
                </thead>
                <tbody class="overflow-y-auto block" style="height:300px;">
                    <tr v-for="item in product.items" :key="item.id" class="table w-full">
                        <td
                            v-for="value in item.option_values"
                            :key="value.id"
                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                            <p class="text-gray-900 whitespace-no-wrap">{{value.name}}</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">{{item.qty}}</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">￥{{item.price / 100}}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- 缩略图，价格，库存 -->
            <div class="flex mb-6">
                <!-- 左侧，缩略图 -->
                <div class="flex w-2/5">
                    <img
                        :src="avatar"
                        class="bg-gray-500 object-cover w-24 h-24 rounded overflow-hidden"
                    >
                </div>
                <div class="flex flex-col ml-3 text-gray-700 w-3/5">
                    <div class="flex">
                        <div>价格</div>
                        <div class="ml-auto text-red-500 font-bold">￥ {{price}}</div>
                    </div>
                    <div class="flex">
                        <div>库存</div>
                        <div class="ml-auto">{{countQty}}</div>
                    </div>
                    <div class="flex">
                        <div>{{tips}}</div>
                    </div>
                </div>
            </div>
            <div class="flex mb-3" v-for="option in options" :key="option.id">
                <option-selection-radio-group v-model="checkOptValues[option.id]" :option="option"/>
            </div>
        </div>
    </div>
</template>

<script>
const product = {
  attributes: [
    { name: "品牌", value: "Lacoste/拉科斯特" },
    { name: "功能", value: "轻质" },
    { name: "闭合方式", value: "系带" },
    { name: "尺码", value: "6,6.5,7.5,8,9,9.5" },
    { name: "图案", value: "拼色" },
    { name: "风格", value: "运动" },
    { name: "流行元素", value: "车缝线" },
    { name: "鞋跟高", value: "平跟(小于等于1cm)" },
    { name: "颜色分类", value: "白/黑 147,黑/绿 1B4,白/红 286" },
    { name: "货号", value: "M0074R M2/M0014P M2" },
    { name: "季节", value: "春秋" },
    { name: "鞋头款式", value: "圆头" },
    { name: "场合", value: "日常" },
    { name: "跟底款式", value: "平跟" },
    { name: "鞋面内里材质", value: "混合材质" },
    { name: "鞋制作工艺", value: "胶粘鞋" },
    { name: "鞋面材质", value: "头层牛皮（除牛反绒）" },
    { name: "款式", value: "运动休闲鞋" }
  ],
  brand: { id: "5e2681bb001f5053d8b2b1df", name: "LACOSTE/法国鳄鱼" },
  category: { id: "5e267fb3001f5053d8b2b1db", name: "男鞋" },
  code: "M0074R",
  description:
    '<p class="ql-align-center"><img src="http://q5q1efml2.bkt.clouddn.com/CivzGmGF6CPDboeTtY9GGm8LTr7KSSIh"><img src="http://q5q1efml2.bkt.clouddn.com/I3LligxNxkv4qoA6ObzEJBi4YvJPwyEx"><img src="http://q5q1efml2.bkt.clouddn.com/2NPUsz08drQWojSXgVpU2bO4pUS1O2a6"><img src="http://q5q1efml2.bkt.clouddn.com/Gxo8acySUQt01goXnNs7f0jdWR2lrF60"><img src="http://q5q1efml2.bkt.clouddn.com/PlPmPGFma8566H8BD5SmcODg0Yu0sZsy"><img src="http://q5q1efml2.bkt.clouddn.com/wSpbCJ4LeMq3IbnhevXaGlIJOX5zxwRp"><img src="http://q5q1efml2.bkt.clouddn.com/TFKXdIZ4QzcjQOiwvK2jFDlx8xkHSH0h"><img src="http://q5q1efml2.bkt.clouddn.com/P2AnlGDZOxAd95ghPK0dFML4GuFfLEDE"><img src="http://q5q1efml2.bkt.clouddn.com/nKNWmNTLXj4M4fxPqRguonFgZL1rBYp2"><img src="http://q5q1efml2.bkt.clouddn.com/jTb13xEggnFxWEq4TTcWz6ImKYquRPwe"><img src="http://q5q1efml2.bkt.clouddn.com/7XAbvBLLt6cJX4v9SFHKHPuy4BLQBCWw"><img src="http://q5q1efml2.bkt.clouddn.com/GLk65HHS2rbZDZIf5SDTFGG0TAsGHmMD"></p><p class="ql-align-center"><img src="http://q5q1efml2.bkt.clouddn.com/uyHJ6E8NLykVsfqZVePDtP94gbRdJD2I"><img src="http://q5q1efml2.bkt.clouddn.com/otToYyQsnLvboA5O8oqGw3uMR9UHoFuY"></p><p class="ql-align-center">&nbsp;</p><p class="ql-align-center">&nbsp;</p><p class="ql-align-center">&nbsp;</p><p class="ql-align-center">单品推荐</p><p class="ql-align-center">&nbsp;</p><p class="ql-align-center"><a href="//item.taobao.com/item.htm?spm=a1z10.5-c.w4002-3174489855.41.1f6f76c5zcEfwv&amp;id=610687544220" rel="noopener noreferrer" target="_blank">https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-3174489855.41.1f6f76c5zcEfwv&amp;id=610687544220</a></p><p class="ql-align-center">&nbsp;</p><p class="ql-align-center"><img src="http://q5q1efml2.bkt.clouddn.com/31BEOL2t8kdxOW6dUNrRUkjKpYykUqNy"><img src="http://q5q1efml2.bkt.clouddn.com/mAvtCT5aJaASjJfFRXHbjoe3NFZESWcS"><img src="http://q5q1efml2.bkt.clouddn.com/rjnLHE8jYRFAtNtzsBISxZjAIu36h3l4"></p>',
  id: "5e51e252ecbe820cbd5f6d6e",
  images: [
    "http://q5q1efml2.bkt.clouddn.com/4MZkwXgqXc2DVasinWEnXBk3RkNYyip9",
    "http://q5q1efml2.bkt.clouddn.com/LWUciUxPc6kFAOzvOK8kTuzcIUv4cRnX",
    "http://q5q1efml2.bkt.clouddn.com/paoHkyECvDFAHYd0njsifuQDtmLspjKJ",
    "http://q5q1efml2.bkt.clouddn.com/HCajpbV0eK0BoMJf4uUOWYKSHDgr0OIG",
    "http://q5q1efml2.bkt.clouddn.com/NAojjIdnNcYeRB1Q5uXOvtpZW7sknS1k"
  ],
  items: [
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
      code: "M0074R1B47H",
      id: "5e51e253ecbe820cbd5f6d77",
      option_values: [
        {
          id: "ff6fbca5-ddef-4097-809d-bc5ce9ca0716",
          name: "黑/绿 1B4",
          image:
            "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "3495981d-3079-4c4c-940c-7aad669e03ac",
          name: "7.5 41",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
      code: "M0074R2869H",
      id: "5e51e253ecbe820cbd5f6d80",
      option_values: [
        {
          id: "ad43368c-2434-4132-b16a-c360356a51e4",
          name: "白/红 286",
          image:
            "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "66654f58-e2ab-4327-8972-dc6687942a58",
          name: "9.5 44",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
      code: "M0074R14709",
      id: "5e51e253ecbe820cbd5f6d73",
      option_values: [
        {
          id: "56c9aeaf-1cb3-46e0-badd-4bc7105efb39",
          name: "白/黑 147",
          image:
            "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "f91a549f-9f1a-4d36-9d96-13f618c11ce5",
          name: "9 43",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
      code: "M0074R1B49H",
      id: "5e51e253ecbe820cbd5f6d7a",
      option_values: [
        {
          id: "ff6fbca5-ddef-4097-809d-bc5ce9ca0716",
          name: "黑/绿 1B4",
          image:
            "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "66654f58-e2ab-4327-8972-dc6687942a58",
          name: "9.5 44",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
      code: "M0074R1476H",
      id: "5e51e253ecbe820cbd5f6d70",
      option_values: [
        {
          id: "56c9aeaf-1cb3-46e0-badd-4bc7105efb39",
          name: "白/黑 147",
          image:
            "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "909efca1-2dc8-4920-90e3-dbb396a840f3",
          name: "6.5 40",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 5
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
      code: "M0074R1477H",
      id: "5e51e253ecbe820cbd5f6d71",
      option_values: [
        {
          id: "56c9aeaf-1cb3-46e0-badd-4bc7105efb39",
          name: "白/黑 147",
          image:
            "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "3495981d-3079-4c4c-940c-7aad669e03ac",
          name: "7.5 41",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
      code: "M0074R14708",
      id: "5e51e253ecbe820cbd5f6d72",
      option_values: [
        {
          id: "56c9aeaf-1cb3-46e0-badd-4bc7105efb39",
          name: "白/黑 147",
          image:
            "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "a6abc80b-524c-4430-8c0c-377987772565",
          name: "8 42",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
      code: "M0074R28606",
      id: "5e51e253ecbe820cbd5f6d7b",
      option_values: [
        {
          id: "ad43368c-2434-4132-b16a-c360356a51e4",
          name: "白/红 286",
          image:
            "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "188f6005-a882-450f-a726-410ce6007bbd",
          name: "6 39.5",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 1
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
      code: "M0074R2867H",
      id: "5e51e253ecbe820cbd5f6d7d",
      option_values: [
        {
          id: "ad43368c-2434-4132-b16a-c360356a51e4",
          name: "白/红 286",
          image:
            "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "3495981d-3079-4c4c-940c-7aad669e03ac",
          name: "7.5 41",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
      code: "M0074R2866H",
      id: "5e51e253ecbe820cbd5f6d7c",
      option_values: [
        {
          id: "ad43368c-2434-4132-b16a-c360356a51e4",
          name: "白/红 286",
          image:
            "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "909efca1-2dc8-4920-90e3-dbb396a840f3",
          name: "6.5 40",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
      code: "M0074R28609",
      id: "5e51e253ecbe820cbd5f6d7f",
      option_values: [
        {
          id: "ad43368c-2434-4132-b16a-c360356a51e4",
          name: "白/红 286",
          image:
            "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "f91a549f-9f1a-4d36-9d96-13f618c11ce5",
          name: "9 43",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
      code: "M0074R28608",
      id: "5e51e253ecbe820cbd5f6d7e",
      option_values: [
        {
          id: "ad43368c-2434-4132-b16a-c360356a51e4",
          name: "白/红 286",
          image:
            "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "a6abc80b-524c-4430-8c0c-377987772565",
          name: "8 42",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
      code: "M0074R1B46H",
      id: "5e51e253ecbe820cbd5f6d76",
      option_values: [
        {
          id: "ff6fbca5-ddef-4097-809d-bc5ce9ca0716",
          name: "黑/绿 1B4",
          image:
            "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "909efca1-2dc8-4920-90e3-dbb396a840f3",
          name: "6.5 40",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
      code: "M0074R1479H",
      id: "5e51e253ecbe820cbd5f6d74",
      option_values: [
        {
          id: "56c9aeaf-1cb3-46e0-badd-4bc7105efb39",
          name: "白/黑 147",
          image:
            "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "66654f58-e2ab-4327-8972-dc6687942a58",
          name: "9.5 44",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
      code: "M0074R1B406",
      id: "5e51e253ecbe820cbd5f6d75",
      option_values: [
        {
          id: "ff6fbca5-ddef-4097-809d-bc5ce9ca0716",
          name: "黑/绿 1B4",
          image:
            "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "188f6005-a882-450f-a726-410ce6007bbd",
          name: "6 39.5",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
      code: "M0074R14706",
      id: "5e51e253ecbe820cbd5f6d6f",
      option_values: [
        {
          id: "56c9aeaf-1cb3-46e0-badd-4bc7105efb39",
          name: "白/黑 147",
          image:
            "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "188f6005-a882-450f-a726-410ce6007bbd",
          name: "6 39.5",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 4
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
      code: "M0074R1B408",
      id: "5e51e253ecbe820cbd5f6d78",
      option_values: [
        {
          id: "ff6fbca5-ddef-4097-809d-bc5ce9ca0716",
          name: "黑/绿 1B4",
          image:
            "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "a6abc80b-524c-4430-8c0c-377987772565",
          name: "8 42",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    },
    {
      avatar:
        "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
      code: "M0074R1B409",
      id: "5e51e253ecbe820cbd5f6d79",
      option_values: [
        {
          id: "ff6fbca5-ddef-4097-809d-bc5ce9ca0716",
          name: "黑/绿 1B4",
          image:
            "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f"
        },
        {
          id: "f91a549f-9f1a-4d36-9d96-13f618c11ce5",
          name: "9 43",
          option_id: "591d3506-a424-41b2-a29d-819caa340305"
        }
      ],
      price: 109000,
      qty: 0
    }
  ],
  name: "19秋冬款LACOSTE/法国鳄鱼 经典款条纹撞色皮面男鞋 情侣款",
  on_sale: true,
  options: [
    {
      id: "486a065e-b5cf-439e-91ed-574a1b8ac69f",
      name: "颜色分类",
      image: true,
      values: [
        {
          id: "56c9aeaf-1cb3-46e0-badd-4bc7105efb39",
          name: "白/黑 147",
          image:
            "http://q5q1efml2.bkt.clouddn.com/oLTJwjSzYCYmOduu7WUHsdJqnoSIyub8",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f",
          disabled: false
        },
        {
          id: "ff6fbca5-ddef-4097-809d-bc5ce9ca0716",
          name: "黑/绿 1B4",
          image:
            "http://q5q1efml2.bkt.clouddn.com/SDbAtLSM7hva40ZvcKRURzcgukAq1sFA",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f",
          disabled: true
        },
        {
          id: "ad43368c-2434-4132-b16a-c360356a51e4",
          name: "白/红 286",
          image:
            "http://q5q1efml2.bkt.clouddn.com/xSyvD3e5coG8ZecVeyaouRHisjoRKE0R",
          option_id: "486a065e-b5cf-439e-91ed-574a1b8ac69f",
          disabled: true
        }
      ]
    },
    {
      id: "591d3506-a424-41b2-a29d-819caa340305",
      name: "尺码",
      image: false,
      values: [
        {
          id: "188f6005-a882-450f-a726-410ce6007bbd",
          name: "6 39.5",
          option_id: "591d3506-a424-41b2-a29d-819caa340305",
          disabled: false
        },
        {
          id: "909efca1-2dc8-4920-90e3-dbb396a840f3",
          name: "6.5 40",
          option_id: "591d3506-a424-41b2-a29d-819caa340305",
          disabled: false
        },
        {
          id: "3495981d-3079-4c4c-940c-7aad669e03ac",
          name: "7.5 41",
          option_id: "591d3506-a424-41b2-a29d-819caa340305",
          disabled: true
        },
        {
          id: "a6abc80b-524c-4430-8c0c-377987772565",
          name: "8 42",
          option_id: "591d3506-a424-41b2-a29d-819caa340305",
          disabled: true
        },
        {
          id: "f91a549f-9f1a-4d36-9d96-13f618c11ce5",
          name: "9 43",
          option_id: "591d3506-a424-41b2-a29d-819caa340305",
          disabled: true
        },
        {
          id: "66654f58-e2ab-4327-8972-dc6687942a58",
          name: "9.5 44",
          option_id: "591d3506-a424-41b2-a29d-819caa340305",
          disabled: true
        }
      ]
    }
  ],
  price: 109000,
  qty: 10,
  sort: 0,
  total_sales_qty: 0
};

export default {
  components: {
    "option-selection-radio-group": () => import("./OptionSelectionRadioGroup")
  },
  data() {
    return {
      id: null,
      product: null,
      checked: null,
      initialized: false,
      options: [],
      items: [],
      sku: {},
      maxPrice: 0,
      minPrice: 0,
      SKUResult: {},
      checkOptValues: {},
      valueSortMap: {}
    };
  },
  watch: {
    product(value) {
      if (value) {
        this.initializeProduct();
        this.initializeCheckedOptionValues();
        this.initializeSku();
        this.initializeItemsPrice();
        this.initializeSKU();
      }
    },
    checkOptValues: {
      handler() {
        this.loopSetOptionValueDisabled();
        this.checked = this.isAllChecked ? this.sku[this.currentKey] : null;
      },
      deep: true
    }
  },
  methods: {
    async search() {
      try {
        let { data } = await this.$axios.get(`products/${this.id}`);
        this.$set(this, "product", data);
      } catch (error) {
        console.error(error);
      }
    },
    // 遍历可选择项
    loopSetOptionValueDisabled() {
      // 获取所有未选取节点
      let unCheckedOptValues = this.getUnCheckedOptValues();
      // 遍历未选取节点
      unCheckedOptValues.forEach(value => {
        // 获取当前option 选定节点
        let siblingsSelectedValue = this.checkedOptValueSlice.find(
          v => v.option_id === value.option_id && v.id !== value.id
        );

        let testAttrIds = []; // 从选中节点中去掉选中的兄弟节点
        if (siblingsSelectedValue) {
          this.checkedOptValueIdSlice.forEach(id => {
            if (id !== siblingsSelectedValue.id) {
              testAttrIds.push(id);
            }
          });
        } else {
          testAttrIds = this.checkedOptValueIdSlice.concat();
        }

        // 推入当前id
        testAttrIds.push(value.id);
        testAttrIds.sort(
          (v1, v2) => this.valueSortMap[v2] - this.valueSortMap[v1]
        );
        const key = testAttrIds.join(";");
        const res = this.SKUResult[key];
        if (this.SKUResult[key]) {
          this.$nextTick(() => {
            this.$set(value, "disabled", !(res && res.qty > 0));
          });
        }
      });
    },
    // 未选中option value
    getUnCheckedOptValues() {
      let checkedIds = this.checkedOptValueSlice.map(item => item.id);
      return this.options.reduce((res, option) => {
        res.push(
          ...option.values.filter(value => checkedIds.indexOf(value.id) < 0)
        );
        return res;
      }, []);
    },
    // value添加option_id
    initializeProduct() {
      let optionsKeyMaps = {};
      const count = this.options.length;
      this.options = this.product.options.map((option, index) => {
        let values = option.values.map(value => {
          optionsKeyMaps[value.id] = option;
          value.option_id = option.id;
          this.$set(this.valueSortMap, value.id, count - index);
          return value;
        });
        option.values = values;
        return option;
      });

      this.items = this.product.items.map(item => {
        let optionValues = item.option_values.map(value => {
          value.option_id = optionsKeyMaps[value.id].id;
          return value;
        });
        item.option_values = optionValues;
        return item;
      });

      this.initialized = true;
    },
    // init check option values
    initializeCheckedOptionValues() {
      this.options.forEach(opt => {
        this.$set(this.checkOptValues, opt.id, null);
      });
    },
    // 初始化sku
    initializeSku() {
      this.sku = this.items.reduce((maps, item) => {
        const key = item.option_values.map(value => value.id).join(";");
        maps[key] = item;
        return maps;
      }, {});
    },
    // 初始化商品价格区间
    initializeItemsPrice() {
      const prices = this.items
        .filter(item => item.qty > 0)
        .map(item => item.price);
      this.maxPrice = Math.max.apply(Math, prices);
      this.minPrice = Math.min.apply(Math, prices);
    },
    // 初始化得到结果集
    initializeSKU() {
      let skuKeys = Object.keys(this.sku);
      skuKeys.forEach(key => {
        let skuKeyAttrs = key.split(";");

        let item = this.sku[key];
        // 对每个SKU信息key属性值进行拆分组合
        let combArr = this.arrayCombine(skuKeyAttrs);

        combArr.forEach(comb => this.add2SKUResult(comb, item));

        // 结果集接放入SKUResult
        this.SKUResult[key] = {
          qty: item.qty,
          prices: [item.price],
          attrs: item.option_values.map(value => value.name).join(" ")
        };
      });
    },
    // 把组合的key放入结果集SKUResult
    add2SKUResult(combArrItem, sku) {
      var key = combArrItem.join(";");
      if (this.SKUResult[key]) {
        // SKU信息key属性·
        this.SKUResult[key].qty += sku.qty;
        this.SKUResult[key].prices.push(sku.price);
        this.SKUResult[key].attrs +=
          "," + sku.option_values.map(value => value.name).join(" ");
      } else {
        this.SKUResult[key] = {
          qty: sku.qty,
          prices: [sku.price],
          attrs: sku.option_values.map(value => value.name).join(" ")
        };
      }
    },

    // 从数组中生成指定长度的组合
    arrayCombine(targetArr) {
      if (!targetArr || !targetArr.length) {
        return [];
      }

      var len = targetArr.length;
      var resultArrs = [];

      // 所有组合
      for (let n = 1; n < len; n++) {
        var flagArrs = this.getFlagArrs(len, n);
        while (flagArrs.length) {
          var flagArr = flagArrs.shift();
          var combArr = [];
          for (var i = 0; i < len; i++) {
            flagArr[i] && combArr.push(targetArr[i]);
          }
          resultArrs.push(combArr);
        }
      }

      return resultArrs;
    },
    // 获得从m中取n的所有组合
    getFlagArrs(m, n) {
      if (!n || n < 1) {
        return [];
      }

      var resultArrs = [];
      var flagArr = [];
      var isEnd = false;
      var i;
      var j;
      var leftCnt;

      for (i = 0; i < m; i++) {
        flagArr[i] = i < n ? 1 : 0;
      }

      resultArrs.push(flagArr.concat());

      while (!isEnd) {
        leftCnt = 0;
        for (i = 0; i < m - 1; i++) {
          if (flagArr[i] === 1 && flagArr[i + 1] === 0) {
            for (j = 0; j < i; j++) {
              flagArr[j] = j < leftCnt ? 1 : 0;
            }
            flagArr[i] = 0;
            flagArr[i + 1] = 1;
            var aTmp = flagArr.concat();
            resultArrs.push(aTmp);
            if (
              aTmp
                .slice(-n)
                .join("")
                .indexOf("0") === -1
            ) {
              isEnd = true;
            }
            break;
          }
          flagArr[i] === 1 && leftCnt++;
        }
      }
      return resultArrs;
    }
  },
  computed: {
    avatar() {
      return this.checked
        ? this.checked.avatar
        : this.product
          ? this.product.images[0]
          : "";
    },
    // 当前已选属性值
    checkedOptValueSlice() {
      return Object.values(this.checkOptValues).filter(item => item);
    },
    // 当前已选属性值id
    checkedOptValueIdSlice() {
      return this.checkedOptValueSlice.map(value => value.id);
    },
    // 是否全部选中
    isAllChecked() {
      return Object.values(this.checkOptValues).every(item => !!item);
    },
    // 未选中option
    getUnCheckedOptSlice() {
      let checkedOptIds = this.checkedOptValueSlice.map(item => item.option_id);
      return this.options.filter(opt => checkedOptIds.indexOf(opt.id) < 0);
    },
    // 提示文字
    tips() {
      let slice = this.isAllChecked
        ? ["已选择", ...this.checkedOptValueSlice.map(item => item.name)]
        : ["请选择", ...this.getUnCheckedOptSlice.map(opt => opt.name)];
      return slice.join(" ");
    },
    // 当前选定选项id字符串
    currentKey() {
      return (
        this.checkedOptValueIdSlice && this.checkedOptValueIdSlice.join(";")
      );
    },
    // 当前选定选项库存总数
    countQty() {
      if (this.currentKey && this.SKUResult[this.currentKey]) {
        return this.SKUResult[this.currentKey].qty;
      }
      return this.items.reduce((sum, item) => {
        sum += item.qty;
        return sum;
      }, 0);
    },
    // 所选商品价格
    price() {
      let min = this.minPrice;
      let max = this.maxPrice;
      if (this.currentKey && this.SKUResult[this.currentKey]) {
        const prices = this.SKUResult[this.currentKey].prices;
        min = Math.min.apply(Math, prices);
        max = Math.max.apply(Math, prices);
      }
      let amount = min === max ? [max] : [min, max];
      return amount.map(item => item / 100).join("-");
    },
    cols() {
      return this.options.map(option => option.name);
    }
  },
  mounted() {
    this.product = product;
    console.log(product)
  }
};
</script>
