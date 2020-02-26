# sku-select

## 电商SKU选择器

在线dome
> https://zhouchang2017.github.io/sku-select

商品数据结构 

```
{
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
      price: 99000,
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
  qty: 10
}
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
